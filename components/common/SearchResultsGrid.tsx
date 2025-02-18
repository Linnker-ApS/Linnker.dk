"use client";

import { Hotel } from "@/data/hotels";
import HotelCard from "./HotelCard";
import { useState } from "react";

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

  // Generate page numbers array
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // First page
        i === totalPages || // Last page
        (i >= currentPage - 1 && i <= currentPage + 1) // Current page and neighbors
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push('...');
      }
    }
    return pages;
  };

  return (
    <div className="flex flex-col">
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
              onClick={() => handleHotelClick(hotel)}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-12 ">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            Previous
          </button>
          
          {getPageNumbers().map((pageNum, index) => (
            <button
              key={index}
              onClick={() => typeof pageNum === 'number' && handlePageChange(pageNum)}
              className={`w-10 h-10 rounded-full flex items-center justify-center
                ${typeof pageNum === 'number' 
                  ? pageNum === currentPage
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                  : 'cursor-default'
                }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            Next
          </button>
        </div>
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