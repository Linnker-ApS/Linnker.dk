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
      container: 'w-[300px]',
      image: 'h-[250px]'
    },
    lg: {
      container: 'w-[300x]',
      image: 'h-[300px]'
    },
    full: {
      container: 'w-full',
      image: 'h-[320px]'
    }
  };

  const variants = {
    default: 'bg-white',
    compact: 'bg-white',
    featured: 'bg-white'
  };

  return (
    <div 
      onClick={handleClick}
      className={cn(
        "group cursor-pointer rounded-lg overflow-hidden mb-4",
        sizes[size].container,
        variants[variant],
        className
      )}
    >
      {/* Image Container */}
      <div className={cn(
        "relative w-full overflow-hidden",
        sizes[size].image,
        imageClassName
      )}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes={size === 'full' ? "100vw" : "auto"}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Container */}
      <div className="pt-2">
        {/* Hotel Name */}
        <h3 className="font-regular text-lg text-gray-900">
          {name.toUpperCase()}
        </h3>

        {/* Location */}
        <div className="text-md text-gray-500">
          {location.city} · {location.country}
        </div>

        {/* Price and Rating Container */}
        <div className="flex justify-between items-center mt-2">
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
