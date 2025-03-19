"use client";

import React, { useState } from "react";
import { Search, CalendarDays, Users, X, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { MobileSearchbarProps } from "@/types";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Logo from "@/components/common/Logo";
import { MobileButton } from "../ui/MobileButton";
import { CustomButton } from "@/components/ui/CustomButton";
import { hotels } from "@/data/hotels";
import { usePathname, useRouter } from "next/navigation";
import { useSearchStore } from '@/store/useSearchStore';

const MobileSearchbar = () => {
  const { 
    destination, 
    dateRange, 
    guests,
    setDestination,
    setDateRange,
    setGuests 
  } = useSearchStore();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<'destination' | 'dates' | 'guests' | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const [isFocused, setIsFocused] = useState(false);

  // Extract unique cities from hotels
  const DESTINATIONS = Array.from(new Set(
    hotels.map(hotel => hotel.location.city)
  ));

  const handleSearch = () => {
    if (!dateRange?.from || !dateRange?.to) {
      alert("Please select check-in and check-out dates");
      return;
    }

    const params = new URLSearchParams({
      destination,
      startDate: dateRange.from.toISOString(),
      endDate: dateRange.to.toISOString(),
      adults: guests.adults.toString(),
      children: guests.children.toString(),
      rooms: guests.rooms.toString()
    });

    setIsSheetOpen(false);
    router.push(`/search-results?${params.toString()}`);
  };

  const formatDateRange = () => {
    if (!dateRange?.from) return "Add Dates";
    if (!dateRange.to) return format(dateRange.from, "MMM d");
    return `${format(dateRange.from, "MMM d")} - ${format(dateRange.to, "MMM d")}`;
  };

  const formatGuestCount = () => {
    const totalGuests = guests.adults + guests.children;
    return totalGuests === 0 ? "Select Guests" : `${totalGuests} Guests, ${guests.rooms} Rooms`;
  };
 
  const toggleSection = (section: 'destination' | 'dates' | 'guests') => {
    setExpandedSection(prevSection => 
      prevSection === section ? null : section
    );
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);

    // Filter destinations based on input
    const filteredSuggestions = DESTINATIONS.filter(dest => 
      dest.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSuggestions(e.target.value ? filteredSuggestions : []);
  };

  const handleDateChange = (range: DateRange | undefined) => {
    setDateRange(range);
  };

  const handleGuestChange = (type: keyof typeof guests, action: 'add' | 'subtract') => {
    setGuests(type, action);
  };

  const handleSuggestionClick = (selectedDestination: string) => {
    // Update destination input with selected suggestion
    const event = {
      target: { value: selectedDestination }
    } as React.ChangeEvent<HTMLInputElement>;
    
    // Update destination
    setDestination(selectedDestination);

    // Clear suggestions
    setSuggestions([]);

    // Automatically move to dates section
    toggleSection('dates');
  };

  const handleBackNavigation = () => {
    if (pathname.startsWith('/hotel/')) {
      router.push('/search-results');
    } else if (pathname === '/search-results') {
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-white rounded-lg shadow-sm md:hidden z-40">
      {(pathname !== '/' && (destination || dateRange?.from)) ? (
        <div className="flex items-center w-full relative">
          <button 
            onClick={handleBackNavigation}
            className="p-2 hover:bg-gray-100 rounded-full absolute left-0 z-10"
          >
            <ArrowLeft className="w-5 h-5 text-gray-500" />
          </button>
          <div className="w-full flex justify-center">
            <CustomButton 
              className="bg-white text-black flex items-center gap-3 p-3 px-10 border max-w-[80%]"
              onClick={() => {
                setIsSheetOpen(true);
                setExpandedSection(null);
              }}
            >
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">{destination || 'Any destination'}</span>
                <span className="text-black font-thin">|</span>
                <span className="text-black font-medium">{formatDateRange()}</span>
              </div>
            </CustomButton>
          </div>
        </div>
      ) : (
        // Show default button when no data
        <CustomButton 
          variant="secondary"
          onClick={() => {
            setIsSheetOpen(true);
            setExpandedSection(null);
          }}
        >
          <Search className="w-5 h-5 text-black" />
          <span className="text-black">Start your search</span>
        </CustomButton>
      )}

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent 
          side="bottom" 
          className="h-auto h-[90vh] w-full p-0 rounded-t-xl z-50"
          style={{ 
            position: 'fixed',
            bottom: 0,
            overscrollBehavior: 'contain',
            transition: 'height 0.3s ease-out'
          }}
        >
          <div className="flex flex-col">
            <SheetHeader className="sticky top-0 z-10 bg-white p-4 border-b rounded-t-xl">
              <div className="flex justify-between items-center">
                <Logo variant="blackYellow" size="xs" />
                <button onClick={() => setIsSheetOpen(false)}>
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <VisuallyHidden>
                <SheetTitle>Search Options</SheetTitle>
              </VisuallyHidden>
            </SheetHeader>
            
            <div className="p-4 space-y-4">
              {/* Destination Input */}
              <div className="space-y-4 relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Where in Denmark?"
                    value={destination}
                    onClick={() => toggleSection('destination')}
                    onChange={handleDestinationChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                      // Delay hiding suggestions to allow for clicks
                      setTimeout(() => setIsFocused(false), 200);
                    }}
                    className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none bg-white focus:ring-2 focus:ring-[#FFB700]"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && destination) {
                        e.currentTarget.blur(); // Dismiss keyboard
                        setIsFocused(false);    // Hide suggestions
                        toggleSection('dates');  // Move to dates section
                      }
                    }}
                  />
                </div>

                {suggestions.length > 0 && isFocused && (
                  <ul className="absolute z-10 w-full bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <li 
                        key={index}
                        onClick={() => {
                          handleSuggestionClick(suggestion);
                          setIsFocused(false); // Hide suggestions after selection
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Dates Input */}
              <div className="space-y-4">
                <div 
                  onClick={() => toggleSection('dates')}
                  className="flex items-center gap-2 py-3 px-4 border rounded-lg cursor-pointer"
                >
                  <CalendarDays className="w-5 h-5 text-gray-400" />
                  <span className="flex-1">{formatDateRange()}</span>
                  {expandedSection === 'dates' ? 
                    <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  }
                </div>

                {expandedSection === 'dates' && (
                  <div className="flex justify-center">
                    <Calendar
                      mode="range"
                      selected={dateRange}
                      onSelect={(selectedRange) => {
                        handleDateChange(selectedRange);
                        
                        // Automatically toggle to guests section when end date is selected
                        if (selectedRange?.from && selectedRange?.to) {
                          toggleSection('guests');
                        }
                      }}
                      numberOfMonths={1}
                      disabled={{ before: new Date() }}
                      className="max-w-full"
                    />
                  </div>
                )}
              </div>

              {/* Guests Input */}
              <div className="space-y-4">
                <button 
                  onClick={() => toggleSection('guests')}
                  className="w-full flex justify-between items-center py-3 px-4 border rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span>{formatGuestCount()}</span>
                  </div>
                  {expandedSection === 'guests' ? 
                    <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  }
                </button>

                {expandedSection === 'guests' && (
                  <div>
                    {["adults", "children", "rooms"].map((type) => (
                      <div key={type} className="flex items-center justify-between py-2">
                        <div>
                          <p className="font-medium capitalize">{type}</p>
                          <p className="text-sm text-gray-500">
                            {type === 'adults' ? 'Ages 13 or above' : type === 'children' ? 'Ages 0-12' : ''}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleGuestChange(type as keyof typeof guests, 'subtract')}
                            className="w-8 h-8 flex items-center justify-center border rounded-full"
                          >
                            -
                          </button>
                          <span>{guests[type as keyof typeof guests]}</span>
                          <button
                            onClick={() => handleGuestChange(type as keyof typeof guests, 'add')}
                            className="w-8 h-8 flex items-center justify-center border rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <MobileButton 
                onClick={handleSearch} 
                variant="primary"
              >
                Search
              </MobileButton>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSearchbar;
