"use client";

import { Hotel } from "@/data/hotels";
import HotelCard from "../common/HotelCard";

interface HotelGridProps {
  hotels: Hotel[];
  visibleHotels: number;
  onHotelClick: (hotelId: string) => void;
}

const HotelGrid = ({ hotels, visibleHotels, onHotelClick }: HotelGridProps) => {
  return (
    <div className="
      grid grid-cols-1 gap-y-8 gap-4 
      md:grid-cols-2 md:px-4
      lg:grid-cols-3
      xl:grid-cols-4 xl:gap-x-6 xl:px-0 
      2xl:grid-cols-4"
    >
      {hotels.slice(0, visibleHotels).map((hotel) => (
        <div 
          key={hotel.id}
          onClick={() => onHotelClick(hotel.id)}
          className="w-full flex justify-center"
        >
          <HotelCard
            {...hotel}
            size="md"
          />
        </div>
      ))}
    </div>
  );
};

export default HotelGrid; 