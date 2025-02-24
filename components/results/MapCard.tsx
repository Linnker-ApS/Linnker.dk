"use client";

import Image from "next/image";
import { Star, X } from "lucide-react";
import { useRouter } from "next/navigation";
import helvetica from "@/app/(root)/fonts";


interface MapCardProps {
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
  onClose?: () => void;
}

const MapCard = ({ 
  id,
  imageUrl, 
  name, 
  location, 
  price, 
  rating,
  onClose
}: MapCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/hotel/${id}`);
  };

  return (
    <div style={{ fontFamily: "var(--font-helvetica)" }} className="group cursor-pointer overflow-hidden w-[300px] rounded-lg">
      {/* Image Container with Close Button */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="absolute top-2 right-2 p-1 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
        >
          <X className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="px-2 py-2 bg-white rounded-b-lg" onClick={handleClick}>
        <h3 className="font-regular text-md text-gray-900 line-clamp-1">
          {name.toUpperCase()}
        </h3>

        <div className="text-sm text-gray-500 truncate">
          {location.city} · {location.country}
        </div>

        <div className="flex justify-between items-center py-2">
          <div className="flex items-baseline gap-1">
            <span className="font-semibold text-sm whitespace-nowrap">
              from {price.currency} {price.amount}
            </span>
            <span className="text-xs text-gray-500">
              per {price.per}
            </span>
          </div>

          {rating && (
            <div className="flex items-center gap-1 shrink-0">
              <Star className="h-3 w-3 text-black fill-black" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapCard; 