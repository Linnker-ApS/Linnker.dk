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
    <div className="group cursor-pointer max-w-[333px] mx-auto rounded-t-sm overflow-hidden bg-white">
      {/* Image Container */}
      <div className="relative w-[333px] h-[333px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          sizes="auto"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Container */}
      <div className="pt-1">
        {/* Hotel Name */}
        <h3 className="font-medium text-lg text-gray-900">
          {name.toUpperCase()}
        </h3>

        {/* Location */}
        <div className="text-md text-gray-500">
          {location.city} · {location.country}
        </div>

        {/* Price and Rating Container */}
        <div className="flex justify-between items-center">
          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="font-semibold text-sm">
              from {price.currency} {price.amount}
            </span>
            <span className="text-xs text-gray-500">
              per {price.per}
            </span>
          </div>

          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
