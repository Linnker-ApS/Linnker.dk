"use client";

import { useSearchParams } from "next/navigation";
import { hotels } from "@/data/hotels";
import SearchResultsGrid from "@/components/common/SearchResultsGrid";
import Searchbar from "@/components/common/Searchbar";
import Logo from "@/components/common/Logo";
import { MapIcon } from "lucide-react";
import HotelMap from "@/components/results/HotelMap";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination') || '';
  const startDate = searchParams.get('startDate') ? new Date(searchParams.get('startDate')!) : undefined;
  const endDate = searchParams.get('endDate') ? new Date(searchParams.get('endDate')!) : undefined;
  
  return (
    <main className="flex min-h-screen flex-col">
      {/* Sticky Header with Logo and Searchbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center gap-8">
          <Logo variant="black" />
          
          {/* Searchbar */}
          <div className="flex-1">
            <Searchbar 
              initialDestination={destination}
              initialStartDate={startDate}
              initialEndDate={endDate}
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
      <div className="w-full pl-4">
        <div className="flex gap-8 w-full pl-8">
          {/* Left side - Hotel listings */}
          <div className="flex-[0.65]">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold">Search Results</h1>
              <button className="flex items-center gap-2 text-sm lg:hidden">
                <MapIcon size={20} />
                Show map
              </button>
            </div>
            
            {/* Filters */}
            <div className="flex gap-4 mb-6 overflow-x-auto py-2">
              {["breakfast", "free wifi", "parking", "pool"].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 border rounded-full text-sm whitespace-nowrap hover:bg-black hover:text-white transition-colors"
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Search Results Grid */}
            <SearchResultsGrid 
              hotels={hotels}
              destination={destination}
              startDate={startDate}
              endDate={endDate}
            />
          </div>

          {/* Right side - Map */}
          <div className="flex-[0.35] max-h-screen sticky top-[88px] rounded-lg overflow-hidden hidden lg:block">
            <HotelMap hotels={hotels} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchResults; 