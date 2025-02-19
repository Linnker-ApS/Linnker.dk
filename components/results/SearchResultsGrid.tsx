"use client";

import { Hotel } from "@/data/hotels";
import HotelCard from "../common/HotelCard";
import { useState } from "react";
import Pagination from "../common/Pagination";

interface SearchResultsGridProps {
  hotels: Hotel[];
  destination?: string;
  startDate?: Date;
  endDate?: Date;
}

const HOTELS_PER_PAGE = 18;

const SearchResultsGrid = ({ hotels, destination, startDate, endDate }: SearchResultsGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Filter hotels based on search criteria
  const filteredHotels = hotels.filter(hotel => {
    if (destination) {
      const searchLocation = destination.toLowerCase();
      const hotelLocation = `${hotel.location.city}, ${hotel.location.country}`.toLowerCase();
      return hotelLocation.includes(searchLocation);
    }
    return true;
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Calculate pagination values
  const totalPages = Math.ceil(filteredHotels.length / HOTELS_PER_PAGE);
  const startIndex = (currentPage - 1) * HOTELS_PER_PAGE;
  const displayedHotels = filteredHotels.slice(startIndex, startIndex + HOTELS_PER_PAGE);

  return (
    <div className="flex flex-col space-y-6">
      {/* Results count */}
      <div className="text-gray-600">
        Found {filteredHotels.length} hotels
        {destination && ` in ${destination}`}
        {startDate && endDate && ` for selected dates`}
      </div>

      {/* Grid of hotel cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-6">
        {displayedHotels.map((hotel, index) => (
          <div key={index}>
            <HotelCard 
              {...hotel}
              size="lg"
              variant="featured"
              className="w-full max-w-none"
              imageClassName="aspect-[4/3] w-full h-[256px]"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* No results message */}
      {filteredHotels.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No hotels found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResultsGrid; 