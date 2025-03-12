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
      grid grid-cols-1 gap-y-6 place-items-center
      xs:grid-cols-1 xs:gap-x-3
      sm:px-6
      md:grid-cols-3 md:gap-x-4 md:px-8
      xl:grid-cols-4"
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