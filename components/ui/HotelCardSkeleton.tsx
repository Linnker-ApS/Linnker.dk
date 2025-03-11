const HotelCardSkeleton = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'full' }) => {
  const sizes = {
    sm: {
      container: 'w-[200px]',
      image: 'aspect-[4/3]'
    },
    md: {
      container: 'w-[270px]',
      image: 'aspect-[4/3]'
    },
    lg: {
      container: 'w-[300px]',
      image: 'aspect-[4/3]'
    },
    full: {
      container: 'w-full',
      image: 'aspect-[4/3]'
    }
  };

  return (
    <div className={`rounded-lg overflow-hidden animate-pulse flex flex-col ${sizes[size].container}`}>
      {/* Image placeholder */}
      <div className={`relative w-full aspect-square bg-gray-200 mb-2 ${sizes[size].image}`}></div>
      
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