"use client";

import { useState } from "react";
import { 
  Wifi, 
  Tv, 
  Coffee, 
  Utensils, 
  Car,  
  Dumbbell, 
  Wine, 
  Snowflake,
  BedDouble,
  Waves,
  MapPin,
  LucideIcon,
  Bike
} from "lucide-react";

interface HotelAmenitiesProps {
  amenities: string[];
}

const amenityIcons: Record<string, LucideIcon> = {
  "Free Wi-Fi": Wifi,
  "TV": Tv,
  "Breakfast": Coffee,
  "Restaurant": Utensils,
  "Parking": Car,
  "Fitness Center": Dumbbell,
  "Bar": Wine,
  "Air Conditioning": Snowflake,
  "Room Service": BedDouble,
  "Sauna": Waves,
  "City View": MapPin,
  "Bike Rental": Bike
};

const HotelAmenities = ({ amenities }: HotelAmenitiesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxItems = 6;
  const needsShowMore = amenities.length > maxItems;

  const displayAmenities = isExpanded ? amenities : amenities.slice(0, maxItems);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Amenities</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayAmenities.map((amenity, index) => {
            const IconComponent = amenityIcons[amenity] || Wine;
            return (
              <div key={index} className="flex items-center gap-2">
                <IconComponent className="w-6 h-6 text-black" />
                <span>{amenity}</span>
              </div>
            );
          })}
        </div>
        {needsShowMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#FFB700] hover:text-[#E6A500] font-medium text-sm transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default HotelAmenities; 