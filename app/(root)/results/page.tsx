"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { hotels } from "@/data/hotels";
import SearchResultsGrid from "@/components/common/SearchResultsGrid";
import Searchbar from "@/components/common/Searchbar";
import Logo from "@/components/common/Logo";
import { MapIcon } from "lucide-react";
import HotelMap from "@/components/results/HotelMap";
import AmenitiesFilter from "@/components/common/AmenitiesFilter";
import Footer from "@/components/common/Footer";

const AMENITIES = ["Breakfast", "Free-Wifi", "Parking", "Pool", "Spa", "Gym"];

const SearchResults = () => {
  const searchParams = useSearchParams();
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  
  const handleFilterChange = (filter: string) => {
    setSelectedAmenities(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white shadow-md py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="w-[120px] shrink-0"></div>
            <div className="flex-1 max-w-3xl mx-auto px-4 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[140px]">
                <Logo variant="black" width={120} height={40} className="shrink-0" />
              </div>
              <Searchbar 
                initialDestination={searchParams.get('destination') || ''}
                initialStartDate={searchParams.get('startDate') ? new Date(searchParams.get('startDate')!) : undefined}
                initialEndDate={searchParams.get('endDate') ? new Date(searchParams.get('endDate')!) : undefined}
                initialGuests={{
                  adults: Number(searchParams.get('adults')) || 2,
                  children: Number(searchParams.get('children')) || 0,
                  rooms: Number(searchParams.get('rooms')) || 1
                }}
              />
            </div>
            <div className="w-[120px] shrink-0"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 w-full">
        {/* Left side - Hotel listings */}
        <div className="w-[55%] overflow-y-auto scrollbar-none pl-12 py-4">
          {/* Amenities Filters */}
          <AmenitiesFilter 
            filters={AMENITIES}
            selectedFilters={selectedAmenities}
            onChange={handleFilterChange}
            className="mb-6"
          />

          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-semibold">Search Results</h1>
            <button className="flex items-center gap-2 text-sm lg:hidden">
              <MapIcon size={20} />
              Show map
            </button>
          </div>

          {/* Search Results Grid */}
          <SearchResultsGrid 
            hotels={hotels}
            destination={searchParams.get('destination') || ''}
            startDate={searchParams.get('startDate') ? new Date(searchParams.get('startDate')!) : undefined}
            endDate={searchParams.get('endDate') ? new Date(searchParams.get('endDate')!) : undefined}
          />

          
        </div>

        {/* Right side - Map */}
        <div className="w-[45%] sticky top-[84px] h-[calc(100vh-82px)]">
          <HotelMap hotels={hotels} />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SearchResults; 