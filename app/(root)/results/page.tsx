"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { hotels } from "@/data/hotels";
import SearchResultsGrid from "@/components/common/SearchResultsGrid";
import { MapIcon } from "lucide-react";
import HotelMap from "@/components/results/HotelMap";
import AmenitiesFilter from "@/components/common/AmenitiesFilter";
import Footer from "@/components/common/Footer";
import MainHeader from "@/components/common/MainHeader";

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
      <MainHeader 
        isSticky={true}
        initialDestination={searchParams.get('destination') || ''}
        initialStartDate={searchParams.get('startDate') ? new Date(searchParams.get('startDate')!) : undefined}
        initialEndDate={searchParams.get('endDate') ? new Date(searchParams.get('endDate')!) : undefined}
        initialGuests={{
          adults: Number(searchParams.get('adults')) || 2,
          children: Number(searchParams.get('children')) || 0,
          rooms: Number(searchParams.get('rooms')) || 1
        }}
      />

      {/* Main Content */}
      <div className="flex flex-1 w-full">
        {/* Left side - Hotel listings */}
        <div className="w-[55%] pl-12 pt-4">
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

          {/* Search Results Grid with space for pagination */}
          <div className="mb-6">
            <SearchResultsGrid 
              hotels={hotels}
              destination={searchParams.get('destination') || ''}
              startDate={searchParams.get('startDate') ? new Date(searchParams.get('startDate')!) : undefined}
              endDate={searchParams.get('endDate') ? new Date(searchParams.get('endDate')!) : undefined}
            />
          </div>
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