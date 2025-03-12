"use client";

import { useState, useEffect } from "react";
import { Hotel, hotels } from "@/data/hotels";
import { Button } from "@/components/ui/button";
import HotelGrid from "@/components/homepage/HotelGrid";
import HotelCardSkeleton from '@/components/ui/HotelCardSkeleton';
import { useRouter } from "next/navigation";
import { addDays } from "date-fns";

const TrendingHotels = () => {
  const [visibleHotels, setVisibleHotels] = useState(8);
  const [isLoading, setIsLoading] = useState(true);
  const [trendingHotels, setTrendingHotels] = useState<Hotel[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Load hotels immediately without delay
    setTrendingHotels(hotels);
    setIsLoading(false);
  }, []);

  const handleHotelClick = (hotelId: string) => {
    // Set default dates
    const today = new Date();
    const tomorrow = addDays(today, 1);

    // Create default search parameters
    const defaultParams = new URLSearchParams({
      destination: '',
      startDate: today.toISOString(),
      endDate: tomorrow.toISOString(),
      adults: '2',
      children: '0',
      rooms: '1'
    });

    // Navigate to hotel page with default parameters
    router.push(`/hotel/${hotelId}?${defaultParams.toString()}`);
  };

  const handleLoadMore = () => {
    setVisibleHotels(prev => Math.min(prev + 8, trendingHotels.length));
  };

  const isAllHotelsVisible = visibleHotels >= trendingHotels.length;

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-4xl font-bold mb-8 text-center">TRENDING NOW</h2>
        
        {isLoading ? (
          <div className="
            grid grid-cols-1 gap-y-6 place-items-center
      xs:grid-cols-1 xs:gap-x-3
      sm:px-6
      md:grid-cols-3 md:gap-x-4 md:px-8
      xl:grid-cols-4"
          >
            {[...Array(8)].map((_, index) => (
              <div key={index} className="w-full flex justify-center">
                <HotelCardSkeleton size="md" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-16">
            <HotelGrid 
              hotels={trendingHotels} 
              visibleHotels={visibleHotels} 
              onHotelClick={handleHotelClick}
            />
          </div>
        )}

        {!isLoading && (
          <div className="flex justify-center">
            <Button 
              className="rounded-full h-10 px-8 bg-black text-white hover:bg-yellow-500 hover:text-black disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white"
              onClick={handleLoadMore}
              disabled={isAllHotelsVisible}
            >
              {isAllHotelsVisible ? 'No more hotels' : 'Load more'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingHotels;