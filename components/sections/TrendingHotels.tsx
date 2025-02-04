"use client";

import { useState } from "react";
import HotelCard from "@/components/common/HotelCard";
import { hotels } from "@/data/hotels";
import { Button } from "@/components/ui/button";

const TrendingHotels = () => {
  const [visibleHotels, setVisibleHotels] = useState(8);

  const handleLoadMore = () => {
    setVisibleHotels(prev => Math.min(prev + 4, hotels.length));
  };

  const showLoadMoreButton = visibleHotels < hotels.length;

  return (
    <section className="py-12">
      <div className="container mx-auto px-12">
        <h2 className="text-5xl font-thin mb-8 text-center">TRENDING HOTELS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {hotels.slice(0, visibleHotels).map((hotel, index) => (
            <HotelCard
              key={index}
              {...hotel}
            />
          ))}
        </div>

        {showLoadMoreButton && (
          <div className="flex justify-center">
            <Button 
              variant="outline"
              className="bg-black text-white hover:bg-black/90 px-8"
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingHotels; 