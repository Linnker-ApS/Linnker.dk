"use client";

import { useState } from "react";
import { hotels } from "@/data/hotels";
import { Button } from "@/components/ui/button";
import HotelGrid from "@/components/common/HotelGrid";

const TrendingHotels = () => {
  const [visibleHotels, setVisibleHotels] = useState(8);

  const handleLoadMore = () => {
    setVisibleHotels(prev => Math.min(prev + 4, hotels.length));
  };

  const isAllHotelsVisible = visibleHotels >= hotels.length;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-thin mb-8 text-center">TRENDING HOTELS</h2>
        
        <div className="mb-8">
          <HotelGrid hotels={hotels} visibleHotels={visibleHotels} />
        </div>

        <div className="flex justify-center">
          <Button 
            variant="outline"
            className="bg-black text-white hover:bg-black/90 px-8 disabled:opacity-50"
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