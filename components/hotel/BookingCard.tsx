"use client";

import { CustomButton } from "@/components/ui/CustomButton";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarDays, Users, X } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BookingCardProps, GuestCount } from "@/types";

const BookingCard = ({ 
  price, 
  onViewOffer,
  initialDates,
  initialGuests = { adults: 2, children: 0, rooms: 1 }
}: BookingCardProps) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(initialDates);
  const [guests, setGuests] = useState<GuestCount>(initialGuests);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const updateGuestCount = (type: 'adults' | 'children' | 'rooms', operation: 'add' | 'subtract') => {
    setGuests(prev => ({
      ...prev,
      [type]: operation === 'add' 
        ? type === 'rooms' ? Math.min(10, prev[type] + 1) : prev[type] + 1
        : Math.max(type === 'adults' ? 1 : 0, prev[type] - 1)
    }));
  };

  const handleViewOffer = () => {
    if (!dateRange?.from || !dateRange?.to) {
      alert("Please select dates");
      return;
    }
    onViewOffer(dateRange, guests);
  };

  return (
    <div className="border rounded-xl bg-white p-6 shadow-lg space-y-6">
      {/* Price Display */}
      <h3 className="text-2xl font-semibold">
        {price.currency} {price.amount.toLocaleString()}
        <span className="text-base font-normal text-gray-600">
        { } per {price.per}
        </span>
      </h3>

      {/* Date Selector */}
      <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
        <PopoverTrigger asChild>
          <CustomButton
            variant="white"
            className={cn(
              "w-full justify-start text-left font-normal h-10",
              isDateOpen ? "ring-2 ring-[#FFB700]" : ""
            )}
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "MMM d")} - {format(dateRange.to, "MMM d")}
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
          <div className="relative">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              disabled={{ before: new Date() }}
            />
            <div className="p-1 border-t flex justify-end">
              <CustomButton
                variant="white"
                size="icon"
                onClick={() => setIsDateOpen(false)}
              >
                <X className="h-4 w-4" />
              </CustomButton>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Guest Selector */}
      <Popover open={isGuestOpen} onOpenChange={setIsGuestOpen}>
        <PopoverTrigger asChild>
          <CustomButton
            variant="white"
            className={cn(
              "w-full justify-start text-left font-normal h-10",
              isGuestOpen ? "ring-2 ring-[#FFB700]" : ""
            )}
          >
            <Users className="mr-2 h-4 w-4" />
            {`${guests.adults + guests.children} Guest${
              guests.adults + guests.children !== 1 ? "s" : ""
            }`}
          </CustomButton>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="p-4 space-y-4">
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

      {/* View Offer Button */}
      <CustomButton
        variant="primary"
        className="w-full"
        onClick={handleViewOffer}
        disabled={!dateRange?.from || !dateRange?.to}
      >
        {dateRange?.from && dateRange?.to ? "View Offer" : "Check Availability"}
      </CustomButton>
    </div>
  );
};

export default BookingCard; 