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
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {amenities.map((amenity, index) => {
          const IconComponent = amenityIcons[amenity] || Wine;
          return (
            <div key={index} className="flex items-center gap-2">
              <IconComponent className="w-5 h-5 text-[#FFB700]" />
              <span>{amenity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelAmenities; 