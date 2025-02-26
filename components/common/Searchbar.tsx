"use client";

import React, { useState, useMemo } from "react";
import { Calendar } from "@/components/ui/calendar";
import { CustomButton } from "@/components/ui/CustomButton";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, CalendarDays, Users } from "lucide-react";
import { format, addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { hotels } from "@/data/hotels";
import { useRouter } from "next/navigation";
import { SearchbarProps, GuestCount } from "@/types";

const Searchbar = ({ 
  initialDestination = "",
  initialStartDate = undefined,
  initialEndDate = undefined,
  initialGuests = { adults: 2, children: 0, rooms: 1 },
  showInitialSuggestions = false,
  disableAutocomplete = false
}: SearchbarProps) => {
  const router = useRouter();
  const [destination, setDestination] = useState(initialDestination);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: initialStartDate,
    to: initialEndDate,
  });
  const [guests, setGuests] = useState<GuestCount>(initialGuests);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  // Get unique locations from hotels data
  const locations = useMemo(() => {
    const uniqueLocations = new Set(
      hotels.map(hotel => `${hotel.location.city}, ${hotel.location.country}`)
    );
    return Array.from(uniqueLocations);
  }, []);

  // Filter locations based on input or show first 4 if enabled
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

  const handleLocationSelect = (location: string) => {
    setDestination(location);
    setShowSuggestions(false);
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
    setShowSuggestions(true);
  };

  const handleSearch = () => {
    // Validate date range
    if (!dateRange?.from || !dateRange?.to) {
      alert("Please select check-in and check-out dates");
      return;
    }

    // Adjust dates to start of day in local timezone
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

    router.push(`/results?${params.toString()}`);
  };

  const updateGuestCount = (type: 'adults' | 'children' | 'rooms', operation: 'add' | 'subtract') => {
    setGuests(prev => ({
      ...prev,
      [type]: operation === 'add' 
        ? type === 'rooms' ? Math.min(10, prev[type] + 1) : prev[type] + 1
        : Math.max(type === 'adults' ? 1 : 0, type === 'rooms' ? 1 : prev[type] - 1)
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-full shadow-lg p-2 relative">
      <div className="flex flex-col md:flex-row gap-2">
        {/* Destination Input with Autocomplete */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Where in Denmark?"
            value={destination}
            onChange={handleDestinationChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFB700] h-10"
          />
          
          {/* Autocomplete Suggestions */}
          {showSuggestions && filteredLocations.length > 0 && (
            <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg overflow-hidden">
              {filteredLocations.map((location, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLocationSelect(location)}
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Date Range Selector */}
        <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
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
              onSelect={setDateRange}
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
                      onClick={() => updateGuestCount(type as any, 'subtract')}
                      disabled={guests[type as keyof typeof guests] <= (type === 'adults' ? 1 : 0)}
                    >
                      -
                    </CustomButton>
                    <span className="w-6 text-center">{guests[type as keyof typeof guests]}</span>
                    <CustomButton
                      variant="white"
                      size="icon"
                      onClick={() => updateGuestCount(type as any, 'add')}
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

export default Searchbar;
