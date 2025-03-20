"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { CustomButton } from "@/components/ui/CustomButton";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, CalendarDays, Users, MapPin } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { hotels } from "@/data/hotels";
import { useRouter } from "next/navigation";
import MobileSearchbar from "../mobile-components/common/MobileSearchbar";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setDestination, setDateRange, setGuests, getDateRangeWithDateObjects } from '@/store/slices/searchSlice';
import { DateRange } from "react-day-picker";

// Searchbar component
interface SearchbarProps {
  showInitialSuggestions?: boolean;
  disableAutocomplete?: boolean;
}

const Searchbar = ({ 
  showInitialSuggestions = true,
  disableAutocomplete = true
}: SearchbarProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  // Get state from Redux
  const { destination, dateRange: serializedDateRange, guests } = useAppSelector(state => state.search);
  
  // Convert serialized date range to Date objects only once during render
  const dateRange = useMemo(() => 
    getDateRangeWithDateObjects(serializedDateRange), 
    [serializedDateRange]
  );

  // Local UI state
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [isDestinationFocused, setIsDestinationFocused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Memoize locations to prevent recalculation
  const locations = useMemo(() => {
    const uniqueLocations = new Set(
      hotels.map(hotel => `${hotel.location.city}, ${hotel.location.country}`)
    );
    return Array.from(uniqueLocations);
  }, []);

  // Memoize filtered locations
  const filteredLocations = useMemo(() => {
    if (disableAutocomplete || !showSuggestions) return [];
    
    if (!destination.trim() && showInitialSuggestions) {
      return locations.slice(0, 4);
    }

    return locations
      .filter(location =>
        location.toLowerCase().includes(destination.toLowerCase())
      )
      .slice(0, 4);
  }, [locations, destination, showSuggestions, showInitialSuggestions, disableAutocomplete]);

  // Handlers with memoization to prevent recreation on each render
  const handleLocationSelect = React.useCallback((location: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    dispatch(setDestination(location));
    setShowSuggestions(false);
    setIsDestinationFocused(false);
  }, [dispatch]);

  const handleDestinationChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDestination(e.target.value));
    setShowSuggestions(true);
  }, [dispatch]);

  const handleSearch = React.useCallback(() => {
    if (!dateRange?.from || !dateRange?.to) {
      alert("Please select check-in and check-out dates");
      return;
    }

    const startDate = new Date(dateRange.from);
    startDate.setHours(12, 0, 0, 0);

    const endDate = new Date(dateRange.to);
    endDate.setHours(12, 0, 0, 0);

    const params = new URLSearchParams({
      destination,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      adults: guests.adults.toString(),
      children: guests.children.toString(),
      rooms: guests.rooms.toString()
    });

    router.push(`/search-results?${params.toString()}`);
  }, [dateRange, destination, guests, router]);

  const handleDateChange = React.useCallback((range: DateRange | undefined) => {
    // Create a deep comparison to prevent unnecessary updates
    const currentFrom = dateRange?.from?.toISOString();
    const currentTo = dateRange?.to?.toISOString();
    const newFrom = range?.from?.toISOString();
    const newTo = range?.to?.toISOString();
    
    if (currentFrom !== newFrom || currentTo !== newTo) {
      dispatch(setDateRange(range));
    }
  }, [dateRange, dispatch]);

  const handleGuestChange = React.useCallback((type: keyof typeof guests, action: 'add' | 'subtract') => {
    dispatch(setGuests({ type, action }));
  }, [dispatch, guests]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Compute this value once per render
  const shouldShowSuggestions = !disableAutocomplete && 
    isDestinationFocused && 
    showSuggestions;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Mobile View */}
      <div className="md:hidden">
        <MobileSearchbar />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex bg-white rounded-full shadow-lg p-2 gap-2 relative">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Where in Denmark?"
            value={destination}
            onChange={handleDestinationChange}
            onFocus={() => {
              setShowSuggestions(true);
              setIsDestinationFocused(true);
            }}
            onBlur={() => {
              timeoutRef.current = setTimeout(() => {
                setShowSuggestions(false);
                setIsDestinationFocused(false);
              }, 200);
            }}
            className="w-full min-w-[200px] max-w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFB700] placeholder:font-helvetica"
          />
          
          {/* Suggestions Dropdown */}
          {shouldShowSuggestions && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-lg z-50 max-h-[300px] overflow-y-auto">
              {filteredLocations.map((location, index) => (
                <button
                  key={index}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                  onClick={() => handleLocationSelect(location)}
                >
                  <MapPin className="w-4 h-4 shrink-0 text-gray-400" />
                  <span className="truncate text-md">
                    {location.split(',').map((part, i) => (
                      <span key={i}>
                        {i > 0 && <span className="text-gray-400">,&nbsp;</span>}
                        <span className="text-gray-700">{part.trim()}</span>
                      </span>
                    ))}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date Range Selector */}
        <Popover 
          open={isDateOpen} 
          onOpenChange={(open) => {
            setIsDateOpen(open);
          }}
        >
          <PopoverTrigger asChild>
            <CustomButton
              variant="white"
              className={cn(
                "justify-start text-left font-normal w-[200px] h-10",
                isDateOpen ? "ring-2 ring-[#FFB700]" : ""
              )}
            >
              <CalendarDays className="mr-2 h-5 w-5" />
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "MMM d")} -{" "}
                    {format(dateRange.to, "MMM d")}
                  </>
                ) : (
                  format(dateRange.from, "MMM d, yyyy")
                )
              ) : (
                "Select dates"
              )}
            </CustomButton>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={handleDateChange}
              numberOfMonths={2}
              disabled={{ before: new Date() }}
              className="rounded-md border"
            />
          </PopoverContent>
        </Popover>

        {/* Guests Selector */}
        <Popover open={isGuestOpen} onOpenChange={setIsGuestOpen}>
          <PopoverTrigger asChild>
            <CustomButton
              variant="white"
              className={cn(
                "justify-start text-left font-normal w-[180px] h-10",
                isGuestOpen ? "ring-2 ring-[#FFB700]" : ""
              )}
            >
              <Users className="mr-2 h-5 w-5" />
              {`${guests.adults + guests.children} Guest${
                guests.adults + guests.children !== 1 ? "s" : ""
              }`}
            </CustomButton>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="p-4 space-y-4">
              {/* Guest counter buttons */}
              {["adults", "children", "rooms"].map((type) => (
                <div key={type} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                    <p className="text-xs text-gray-500">{type === 'adults' ? 'Ages 13 or above' : type === 'children' ? 'Ages 0-12' : ''}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CustomButton
                      variant="white"
                      size="icon"
                      onClick={() => handleGuestChange(type as keyof typeof guests, 'subtract')}
                      disabled={guests[type as keyof typeof guests] <= (type === 'adults' ? 1 : 0)}
                    >
                      -
                    </CustomButton>
                    <span className="w-6 text-center">{guests[type as keyof typeof guests]}</span>
                    <CustomButton
                      variant="white"
                      size="icon"
                      onClick={() => handleGuestChange(type as keyof typeof guests, 'add')}
                      disabled={type === 'rooms' && guests.rooms >= 10}
                    >
                      +
                    </CustomButton>
                  </div>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Search Button */}
        <CustomButton 
          variant="primary"
          className="md:w-auto w-full h-10"
          onClick={handleSearch}
          disabled={!dateRange?.from || !dateRange?.to}
        >
          <Search className="mr-1 h-5 w-5" />
          Search
        </CustomButton>
      </div>
    </div>
  );
};

export default React.memo(Searchbar);

// Extract date management logic
export const useDateRange = (initialDates?: DateRange) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(initialDates);
  const [isDateOpen, setIsDateOpen] = useState(false);

  return { dateRange, setDateRange, isDateOpen, setIsDateOpen };
};
