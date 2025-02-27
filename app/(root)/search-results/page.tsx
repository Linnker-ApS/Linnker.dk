"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { hotels } from "@/data/hotels";
import SearchResultsGrid from "@/components/search-results/SearchResultsGrid";
import { MapIcon } from "lucide-react";
import HotelMap from "@/components/search-results/map/HotelMap";
import AmenitiesFilter from "@/components/search-results/AmenitiesFilter";
import Footer from "@/components/common/Footer";
import MainHeader from "@/components/common/MainHeader";

const AMENITIES = ["Breakfast", "Free-Wifi", "Parking", "Pool", "Spa", "Gym"];

const SearchResults = () => {
  const searchParams = useSearchParams();
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  
  const destination = searchParams.get('destination') || '';
  const startDate = searchParams.get('startDate') ? new Date(searchParams.get('startDate')!) : undefined;
  const endDate = searchParams.get('endDate') ? new Date(searchParams.get('endDate')!) : undefined;

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
        initialDestination={destination}
        initialStartDate={startDate}
        initialEndDate={endDate}
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
              destination={destination}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>

        {/* Right side - Map */}
        <div className="w-[45%] sticky top-[84px] h-[calc(100vh-82px)]">
          <HotelMap 
            hotels={hotels}
            destination={destination}
          />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SearchResults; 