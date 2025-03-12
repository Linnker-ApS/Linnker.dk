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
      container: 'w-[180px] xs:w-[200px] sm:w-[220px]',
      image: 'aspect-square'
    },
    md: {
      container: 'w-[300px]',
      image: 'aspect-square'
    },
    lg: {
      container: 'w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px]',
      image: 'aspect-square'
    },
    full: {
      container: 'w-full',
      image: 'h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px]'
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
        "group cursor-pointer rounded-lg overflow-hidden flex flex-col",
        sizes[size].container,
        variants[variant],
        className
      )}
    >
      {/* Image Container */}
      <div className={cn(
        "relative w-full overflow-hidden mb-2",
        sizes[size].image,
        imageClassName
      )}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 360px) 180px,
                 (max-width: 400px) 200px,
                 (max-width: 480px) 220px,
                 (max-width: 768px) 300px,
                 (max-width: 1024px) 300px,
                 300px"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Container */}
      <div className="flex-grow flex flex-col justify-between p-0">
        <div>
          <h3 className="font-semibold text-sm sm:text-lg text-gray-900 line-clamp-1">
            {name.toUpperCase()}
          </h3>

          <div className="text-sm sm:text-base text-gray-500 truncate">
            {location.city} · {location.country}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-1">
            <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
              from {price.currency} {price.amount}
            </span>
            <span className="text-xs text-gray-500">
              per {price.per}
            </span>
          </div>

          {rating && (
            <div className="flex items-center gap-1 shrink-0">
              <Star className="h-3 w-3 text-black fill-black" />
              <span className="text-xs sm:text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
