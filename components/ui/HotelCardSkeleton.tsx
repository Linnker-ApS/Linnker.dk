import { cn } from "@/lib/utils";

const HotelCardSkeleton = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'full' }) => {
  const sizes = {
    sm: {
      container: 'w-[180px] xs:w-[200px] sm:w-[220px]',
      image: 'aspect-square'
    },
    md: {
      container: 'w-[300px]',
      image: 'aspect-square'
    },
    lg: {
      container: 'w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px]',
      image: 'aspect-square'
    },
    full: {
      container: 'w-full',
      image: 'h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px]'
    }
  };

  return (
    <div className={cn(
      "rounded-lg overflow-hidden animate-pulse flex flex-col",
      sizes[size].container
    )}>
      {/* Image placeholder */}
      <div className={cn(
        "relative w-full bg-gray-200 mb-2",
        sizes[size].image
      )}></div>
      
      {/* Content Container */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Hotel Name placeholder */}
        <div>
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
          
          {/* Location placeholder */}
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        </div>
        
        {/* Price and Rating Container */}
        <div className="flex justify-between items-center">
          {/* Price placeholder */}
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          
          {/* Rating placeholder */}
          <div className="h-4 bg-gray-200 rounded w-[40px]"></div>
        </div>
      </div>
    </div>
  );
};

export default HotelCardSkeleton; 