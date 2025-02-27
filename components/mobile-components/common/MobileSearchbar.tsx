"use client";

import React from "react";
import { Search, CalendarDays, Users, MapPin } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { MobileSearchbarProps } from "@/types";
// ... other imports


const MobileSearchbar = ({ 
  destination,
  dateRange,
  guests,
  onDestinationChange,
  onDateChange,
}: MobileSearchbarProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 md:hidden">
      {/* Mobile layout here */}
    </div>
  );
};

export default MobileSearchbar;
