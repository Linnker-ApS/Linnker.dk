"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, CalendarDays, Building, MapPin } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

const DetailedSearchbar = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });
  const [rooms, setRooms] = useState(1);

  const handleSearch = () => {
    console.log({ destination, date, rooms });
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-full shadow-lg p-2 mt-6">
      <div className="flex items-center gap-2 px-4">
        {/* Destination Input */}
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-transparent border-r border-gray-200 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Date Range Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "justify-start text-left font-normal hover:bg-transparent",
                !date.from && "text-gray-500"
              )}
            >
              <CalendarDays className="mr-2 h-5 w-5 text-gray-400" />
              {date.from ? (
                date.to ? (
                  <>
                    {format(date.from, "MMM d")} - {format(date.to, "MMM d")}
                  </>
                ) : (
                  format(date.from, "MMM d")
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
              defaultMonth={date.from}
              selected={{ from: date.from, to: date.to }}
              onSelect={(selectedDate: any) => setDate(selectedDate)}
              numberOfMonths={2}
              className="rounded-md border"
            />
          </PopoverContent>
        </Popover>

        {/* Rooms Counter */}
        <div className="flex items-center border-l border-gray-200 pl-4">
          <Building className="h-5 w-5 text-gray-400 mr-2" />
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => setRooms((prev) => Math.max(1, prev - 1))}
              disabled={rooms <= 1}
            >
              -
            </Button>
            <span className="w-8 text-center">{rooms} {rooms === 1 ? 'Room' : 'Rooms'}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => setRooms((prev) => prev + 1)}
            >
              +
            </Button>
          </div>
        </div>

        {/* Search Button */}
        <Button 
          onClick={handleSearch}
          size="icon"
          className="rounded-full h-12 w-12 bg-primary hover:bg-primary/90"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default DetailedSearchbar; 