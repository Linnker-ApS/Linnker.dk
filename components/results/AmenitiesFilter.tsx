"use client";

import { cn } from "@/lib/utils";

interface AmenitiesFilterProps {
  filters: string[];
  selectedFilters?: string[];
  onChange?: (filter: string) => void;
  className?: string;
}

const AmenitiesFilter = ({ 
  filters, 
  selectedFilters = [], 
  onChange,
  className 
}: AmenitiesFilterProps) => {
  return (
    <div className={cn("flex gap-4 overflow-x-auto py-2", className)}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange?.(filter)}
          className={cn(
            "px-4 py-2 border rounded-full text-sm whitespace-nowrap transition-colors",
            "hover:bg-black hover:text-white",
            selectedFilters.includes(filter) 
              ? "bg-black text-white" 
              : "bg-white text-gray-900"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default AmenitiesFilter; 