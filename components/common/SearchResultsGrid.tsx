"use client";

import { Hotel } from "@/data/hotels";
import HotelCard from "./HotelCard";

interface SearchResultsGridProps {
  hotels: Hotel[];
  destination?: string;
  startDate?: Date;
  endDate?: Date;
}

const SearchResultsGrid = ({ hotels, destination, startDate, endDate }: SearchResultsGridProps) => {
  // Filter hotels based on search criteria
  const filteredHotels = hotels.filter(hotel => {
    if (destination) {
      const searchLocation = destination.toLowerCase();
      const hotelLocation = `${hotel.location.city}, ${hotel.location.country}`.toLowerCase();
      return hotelLocation.includes(searchLocation);
    }
    return true;
  });

  return (
    <div className="flex flex-col">
      {/* Results count */}
      <div className="text-gray-600">
        Found {filteredHotels.length} hotels
        {destination && ` in ${destination}`}
        {startDate && endDate && ` for selected dates`}
      </div>

      {/* Grid of hotel cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {filteredHotels.map((hotel, index) => (
          <div key={index} >
            <HotelCard 
              {...hotel}
              size="md"
              variant="default"
              onClick={() => handleHotelClick(hotel)}
            />
          </div>
        ))}
      </div>

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