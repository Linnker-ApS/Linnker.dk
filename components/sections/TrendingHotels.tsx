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
      <div className="container mx-auto px-16">
        <h2 className="text-5xl font-light mb-8 text-center tracking-wider">TRENDING HOTELS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {hotels.slice(0, visibleHotels).map((hotel, index) => (
            <HotelCard
              key={index}
              {...hotel}
            />
          ))}
        </div>

        {showLoadMoreButton && (
          <div className="flex justify-center py-12">
            <Button 
              variant="outline"
              className="bg-black text-white hover:bg-yellow-500 hover:text-black px-8"
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