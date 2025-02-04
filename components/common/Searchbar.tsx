"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, CalendarDays, Users } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";

interface GuestCount {
  adults: number;
  children: number;
  rooms: number;
}

const Searchbar = () => {
  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [guests, setGuests] = useState<GuestCount>({ adults: 2, children: 0, rooms: 1 });
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const handleSearch = () => {
    console.log({ 
      destination, 
      startDate: dateRange?.from, 
      endDate: dateRange?.to, 
      guests 
    });
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
    <div className="w-full max-w-4xl mx-auto bg-white rounded-full shadow-lg p-2">
      <div className="flex flex-col md:flex-row gap-2">
        {/* Destination Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Where are you going?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFB700] h-10"
          />
        </div>

        {/* Date Range Selector */}
        <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal w-[200px] rounded-full h-10 px-4 border hover:bg-transparent",
                isDateOpen ? "ring-2 ring-[#FFB700]" : "focus:ring-2 focus:ring-[#FFB700] focus:outline-none"
              )}
            >
              <CalendarDays className="mr-2 h-4 w-4" />
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
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              className="rounded-md border"
            />
          </PopoverContent>
        </Popover>

        {/* Enhanced Guests Selector */}
        <Popover open={isGuestOpen} onOpenChange={setIsGuestOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal w-[180px] rounded-full h-10 px-4 border hover:bg-transparent",
                isGuestOpen ? "ring-2 ring-[#FFB700]" : "focus:ring-2 focus:ring-[#FFB700] focus:outline-none"
              )}
            >
              <Users className="mr-2 h-4 w-4" />
              {`${guests.adults + guests.children} Guest${
                guests.adults + guests.children !== 1 ? "s" : ""
              }`}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="p-4 space-y-4">
              {/* Adults Counter */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium">Adults</h4>
                  <p className="text-xs text-gray-500">Ages 13 or above</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => updateGuestCount('adults', 'subtract')}
                    disabled={guests.adults <= 1}
                  >
                    -
                  </Button>
                  <span className="w-6 text-center">{guests.adults}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => updateGuestCount('adults', 'add')}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Children Counter */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium">Children</h4>
                  <p className="text-xs text-gray-500">Ages 0-12</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => updateGuestCount('children', 'subtract')}
                    disabled={guests.children <= 0}
                  >
                    -
                  </Button>
                  <span className="w-6 text-center">{guests.children}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => updateGuestCount('children', 'add')}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Rooms Counter */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium">Rooms</h4>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => updateGuestCount('rooms', 'subtract')}
                    disabled={guests.rooms <= 1}
                  >
                    -
                  </Button>
                  <span className="w-6 text-center">{guests.rooms}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => updateGuestCount('rooms', 'add')}
                    disabled={guests.rooms >= 10}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Search Button */}
        <Button 
          className="md:w-auto w-full rounded-full h-10 px-4"
          onClick={handleSearch}
        >
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
