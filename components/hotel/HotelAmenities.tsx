interface HotelAmenitiesProps {
  amenities: string[];
}

const HotelAmenities = ({ amenities }: HotelAmenitiesProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FFB700] rounded-full" />
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelAmenities; 