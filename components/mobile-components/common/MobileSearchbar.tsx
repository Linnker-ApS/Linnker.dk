"use client";

import React, { useState, useEffect } from "react";
import { Search, CalendarDays, Users, MapPin, X } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { MobileSearchbarProps } from "@/types";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/CustomButton";
import {MobileButton} from "../ui/MobileButton";

const MobileSearchbar = ({
  destination,
  dateRange,
  guests,
  onDestinationChange,
  onDateChange,
  onGuestChange,
  onSearch,
}: MobileSearchbarProps) => {
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  // Handle iOS keyboard and scroll
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    if (isDestinationOpen || isDateOpen || isGuestOpen) {
      // Lock scroll
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      // Reset
      document.body.style.height = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isDestinationOpen, isDateOpen, isGuestOpen]);

  const handleDestinationSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDestinationOpen(false);
    setIsDateOpen(true);
  };

  const handleDateSearch = () => {
    if (dateRange?.from && dateRange?.to) {
      setIsDateOpen(false);
      setIsGuestOpen(true);
    }
  };

  const handleGuestSearch = () => {
    setIsGuestOpen(false);
    onSearch();
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-white rounded-lg shadow-sm md:hidden">
      {/* Destination Input */}
      <button 
        className="flex items-center border rounded-lg p-3"
        onClick={() => setIsDestinationOpen(true)}
      >
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <span className="text-left text-gray-600">
          {destination || "Where in Denmark?"}
        </span>
      </button>

      {/* Date Button */}
      <button 
        className="flex items-center border rounded-lg p-3"
        onClick={() => setIsDateOpen(true)}
      >
        <CalendarDays className="w-5 h-5 text-gray-400 mr-2" />
        <span className="text-gray-600">
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
        </span>
      </button>

      {/* Guests Button */}
      <button 
        className="flex items-center border rounded-lg p-3"
        onClick={() => setIsGuestOpen(true)}
      >
        <Users className="w-5 h-5 text-gray-400 mr-2" />
        <span className="text-gray-600">
          {`${guests.adults + guests.children} Guest${
            guests.adults + guests.children !== 1 ? "s" : ""
          }`}
        </span>
      </button>

      {/* Search Button */}
      <MobileButton type="submit" onClick={onSearch}>
        Search
      </MobileButton>

      {/* Destination Sheet */}
      <Sheet open={isDestinationOpen} onOpenChange={setIsDestinationOpen}>
        <SheetContent 
          side="bottom" 
          className="h-[80vh] w-full p-0 fixed inset-0 top-auto translate-y-0"
          style={{ 
            position: 'fixed',
            bottom: 0,
            height: 'calc(var(--vh, 1vh) * 90)',
            maxHeight: '90vh',
            overscrollBehavior: 'contain',
            WebkitTransform: 'translateY(0)'
          }}
        >
          <div className="flex flex-col h-full bg-white">
            <SheetHeader className="sticky top-0 z-10 bg-white p-4 border-b">
              <div className="flex justify-between items-center">
                <Image src="/images/linnker/LogoBlackYellow.png" alt="Linnker" width={120} height={40} />
                <button onClick={() => setIsDestinationOpen(false)}>
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <DialogTitle className="sr-only">Select Destination</DialogTitle>
            </SheetHeader>
            <form onSubmit={handleDestinationSearch} className="p-4 flex-1 overflow-y-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where in Denmark?"
                  value={destination}
                  onChange={onDestinationChange}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none"
                  autoFocus
                />
              </div>
              <MobileButton className="my-3" variant="primary" type="submit">
                Search
              </MobileButton>
            </form>
          </div>
        </SheetContent>
      </Sheet>

      {/* Date Sheet */}
      <Sheet open={isDateOpen} onOpenChange={setIsDateOpen}>
        <SheetContent 
          side="bottom" 
          className="h-[90vh] w-full p-0"
          style={{ 
            position: 'fixed',
            bottom: 0,
            height: 'calc(var(--vh, 1vh) * 90)',
            maxHeight: '90vh',
            overscrollBehavior: 'contain'
          }}
        >
          <div className="flex flex-col h-full">
            <SheetHeader className="sticky top-0 z-10 bg-white p-4 border-b">
              <div className="flex justify-between items-center">
                <Image src="/images/linnker/LogoBlackYellow.png" alt="Linnker" width={120} height={40} />
                <button onClick={() => setIsDateOpen(false)}>
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <DialogTitle className="sr-only">Select Dates</DialogTitle>
            </SheetHeader>
            <div className="p-4 flex-1 flex flex-col">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={onDateChange}
                numberOfMonths={1}
                disabled={{ before: new Date() }}
              />
              {dateRange?.from && dateRange?.to && (
                <MobileButton className="my-3" type="submit" onClick={handleDateSearch}>
                  Search
                </MobileButton>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Guests Sheet */}
      <Sheet open={isGuestOpen} onOpenChange={setIsGuestOpen}>
        <SheetContent 
          side="bottom" 
          className="h-[90vh] w-full p-0"
          style={{ 
            position: 'fixed',
            bottom: 0,
            height: 'calc(var(--vh, 1vh) * 90)',
            maxHeight: '90vh',
            overscrollBehavior: 'contain'
          }}
        >
          <div className="flex flex-col h-full">
            <SheetHeader className="sticky top-0 z-10 bg-white p-4 border-b">
              <div className="flex justify-between items-center">
                <Image src="/images/linnker/LogoBlackYellow.png" alt="Linnker" width={120} height={40} />
                <button onClick={() => setIsGuestOpen(false)}>
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <DialogTitle className="sr-only">Select Number of Guests</DialogTitle>
            </SheetHeader>
            <div className="p-4 space-y-4">
              {["adults", "children", "rooms"].map((type) => (
                <div key={type} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium capitalize">{type}</p>
                    <p className="text-sm text-gray-500">
                      {type === 'adults' ? 'Ages 13 or above' : type === 'children' ? 'Ages 0-12' : ''}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => onGuestChange(type as keyof typeof guests, 'subtract')}
                      disabled={guests[type as keyof typeof guests] <= (type === 'adults' ? 1 : 0)}
                      className="w-8 h-8 flex items-center justify-center border rounded-full disabled:opacity-50"
                    >
                      -
                    </button>
                    <span>{guests[type as keyof typeof guests]}</span>
                    <Button
                      onClick={() => onGuestChange(type as keyof typeof guests, 'add')}
                      disabled={type === 'rooms' && guests.rooms >= 10}
                      className="w-8 h-8 flex items-center justify-center border rounded-full disabled:opacity-50"
                    >
                      +
                    </Button>
                  </div>
                </div>
              ))}
              <MobileButton type="submit" onClick={handleGuestSearch}>
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
