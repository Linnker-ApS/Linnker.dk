"use client";

import { useState } from "react";
import { hotels } from "@/data/hotels";
import { Button } from "@/components/ui/button";
import HotelGrid from "@/components/common/HotelGrid";

const TrendingHotels = () => {
  const [visibleHotels, setVisibleHotels] = useState(8);

  const handleLoadMore = () => {
    setVisibleHotels(prev => Math.min(prev + 8, hotels.length));
  };

  const isAllHotelsVisible = visibleHotels >= hotels.length;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">TRENDING NOW</h2>
        
        <div className="mb-16">
          <HotelGrid hotels={hotels} visibleHotels={visibleHotels} />
        </div>

        <div className="flex justify-center">
          <Button 
            className="rounded-full h-10 px-8 bg-black text-white hover:bg-yellow-500 hover:text-black disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white"
            onClick={handleLoadMore}
            disabled={isAllHotelsVisible}
          >
            {isAllHotelsVisible ? 'No more hotels' : 'Load more'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingHotels; 