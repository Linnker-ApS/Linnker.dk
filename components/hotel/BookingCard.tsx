"use client";

import { CustomButton } from "@/components/ui/CustomButton";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarDays, Users } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface BookingCardProps {
  price: {
    amount: number;
    currency: string;
    per: string;
  };
  onViewOffer: (dates: DateRange, guests: number) => void;
  initialDates?: {
    startDate: Date;
    endDate: Date;
  };
  initialGuests?: number;
}

const BookingCard = ({ 
  price, 
  onViewOffer,
  initialDates,
  initialGuests = 1
}: BookingCardProps) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    initialDates ? {
      from: initialDates.startDate,
      to: initialDates.endDate
    } : undefined
  );
  const [guests, setGuests] = useState(initialGuests);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

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
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            disabled={{ before: new Date() }}
          />
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
            {guests} {guests === 1 ? "guest" : "guests"}
          </CustomButton>
        </PopoverTrigger>
        <PopoverContent className="w-60">
          <div className="p-2">
            <div className="flex items-center justify-between">
              <span>Guests</span>
              <div className="flex items-center gap-2">
                <CustomButton
                  variant="white"
                  size="icon"
                  onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                >
                  -
                </CustomButton>
                <span className="w-8 text-center">{guests}</span>
                <CustomButton
                  variant="white"
                  size="icon"
                  onClick={() => setGuests(prev => Math.min(10, prev + 1))}
                >
                  +
                </CustomButton>
              </div>
            </div>
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