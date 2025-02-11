"use client";

import { Hotel } from "@/data/hotels";
import HotelCard from "./HotelCard";

interface HotelGridProps {
  hotels: Hotel[];
  visibleHotels?: number;
}

const HotelGrid = ({ hotels, visibleHotels }: HotelGridProps) => {
  const displayedHotels = visibleHotels ? hotels.slice(0, visibleHotels) : hotels;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
      {displayedHotels.map((hotel, index) => (
        <HotelCard
          key={index}
          {...hotel}
        />
      ))}
    </div>
  );
};

export default HotelGrid; 