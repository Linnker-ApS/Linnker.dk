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
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-12">
      {hotels.slice(0, visibleHotels).map((hotel) => (
        <div 
          key={hotel.id}
          onClick={() => onHotelClick(hotel.id)}
          className="cursor-pointer"
        >
          <HotelCard
            {...hotel}
          />
        </div>
      ))}
    </div>
  );
};

export default HotelGrid; 