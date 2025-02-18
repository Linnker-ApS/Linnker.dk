"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

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
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'compact' | 'featured';
}

const HotelCard = ({ 
  imageUrl, 
  name, 
  location, 
  price, 
  rating,
  className,
  imageClassName,
  onClick,
  size = 'md',
  variant = 'default'
}: HotelCardProps) => {
  const sizes = {
    sm: {
      container: 'max-w-[200px]',
      image: 'w-[200px] h-[200px]'
    },
    md: {
      container: 'max-w-[300px]',
      image: 'w-[300px] h-[300px]'
    },
    lg: {
      container: 'max-w-[400px]',
      image: 'w-[400px] h-[400px]'
    }
  };

  const variants = {
    default: 'bg-white',
    compact: 'bg-white p-2',
    featured: 'bg-white shadow-lg border border-gray-100'
  };

  return (
    <div 
      onClick={onClick}
      className={cn(
        "group cursor-pointer rounded-t-sm overflow-hidden mb-8 mx-auto",
        sizes[size].container,
        variants[variant],
        className
      )}
    >
      {/* Image Container */}
      <div className={cn(
        "relative overflow-hidden",
        sizes[size].image,
        imageClassName
      )}>
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
        <h3 className="font-regular text-lg text-gray-900">
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
            <span className="font-semibold text-md">
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
