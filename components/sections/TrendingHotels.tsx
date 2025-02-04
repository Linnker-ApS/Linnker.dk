import HotelCard from "@/components/common/HotelCard";
import { hotels } from "@/data/hotels";
import { Button } from "@/components/ui/button";

// This will be replaced with your API data later
const mockHotels = [
  {
    imageUrl: "/images/hotel-1.jpg",
    name: "HOTEL OSTERPORT NORT",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4
  },
  // ... more hotels with their respective images
];

const TrendingHotels = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8">TRENDING HOTELS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {hotels.slice(0, 8).map((hotel, index) => (
            <HotelCard
              key={index}
              {...hotel}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            variant="outline"
            className="bg-black text-white hover:bg-black/90 px-8"
          >
            Load more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingHotels; 