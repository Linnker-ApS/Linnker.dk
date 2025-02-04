"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface HotelCardProps {
  imageUrl: string;
  name: string;
  location: {
    city: string;
    country: string;
  };
  price: {
    amount: number;
    currency: string;
    per: string;
  };
  rating?: number;
}

const HotelCard = ({ imageUrl, name, location, price, rating }: HotelCardProps) => {
  return (
    <div className="group cursor-pointer max-w-[333px] mx-auto rounded-t-sm overflow-hidden bg-white hover:shadow-md transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative w-[333px] h-[333px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Container */}
      <div className="pt-1 p-1 pl-2">
        {/* Hotel Name */}
        <h3 className="font-medium text-base text-gray-900 mb-1">
          {name}
        </h3>

        {/* Location */}
        <div className="text-xs text-gray-500 mb-2">
          {location.city} · {location.country}
        </div>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-3 w-3 ${
                  index < rating 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="font-semibold text-base">
            {price.currency} {price.amount}
          </span>
          <span className="text-xs text-gray-500">
            per {price.per}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
