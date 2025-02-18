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
    <main className="flex min-h-screen flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white shadow-md py-[1.5vh]">
        <div className="container mx-auto px-4 flex items-center gap-8">
          <Logo variant="black" width={120} height={100} className="mx-auto"/>
          <div className="flex-1">
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
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full h-[calc(100vh-84px)]">
        {/* Left side - Hotel listings */}
        <div className="w-[55%] overflow-y-auto pl-8 py-6 pr-6">
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
        <div className="w-[45%] h-full">
          <HotelMap hotels={hotels} />
        </div>
      </div>
    </main>
  );
};

export default SearchResults; 