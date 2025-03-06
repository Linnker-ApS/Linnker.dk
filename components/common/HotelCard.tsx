"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface HotelCardProps {
  id: string;
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
  size?: 'sm' | 'md' | 'lg' | 'full';
  variant?: 'default' | 'compact' | 'featured';
}

const HotelCard = ({ 
  id,
  imageUrl, 
  name, 
  location, 
  price, 
  rating,
  className,
  imageClassName,
  size = 'md',
  variant = 'default'
}: HotelCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/hotel/${id}`);
  };

  const sizes = {
    sm: {
      container: 'w-[200px]',
      image: 'h-[200px]'
    },
    md: {
      container: 'w-[270px]',
      image: 'h-[270px]'
    },
    lg: {
      container: 'w-[300px]',
      image: 'h-[300px]'
    },
    full: {
      container: 'w-full',
      image: 'h-[200px]'
    }
  };

  const variants = {
    default: 'bg-site-background',
    compact: 'bg-site-background',
    featured: 'bg-site-background'
  };

  return (
    <div 
      onClick={handleClick}
      className={cn(
        "group cursor-pointer rounded-lg overflow-hidden flex flex-col"
        
      )}
    >
      {/* Image Container - Fixed Aspect Ratio */}
      <div className={cn(
        "relative w-full aspect-square overflow-hidden mb-2",
        sizes[size].image,
        imageClassName
      )}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Container - Flexible Height */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Hotel Name - Truncate after 2 lines */}
        <div>
          <h3 className="font-semibold text-md text-gray-900 line-clamp-1">
            {name.toUpperCase()}
          </h3>

          {/* Location - Truncate after 1 line */}
          <div className="text-sm text-gray-500 truncate">
            {location.city} · {location.country}
          </div>
        </div>

        {/* Price and Rating Container */}
        <div className="flex justify-between items-center">
          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="font-semibold text-sm whitespace-nowrap">
              from {price.currency} {price.amount}
            </span>
            <span className="text-xs text-gray-500">
              per {price.per}
            </span>
          </div>

          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-1 shrink-0 mt-1">
              <Star className="h-3 w-3 text-black fill-black" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
