"use client";

import { Hotel } from "@/data/hotels";

interface BookingFooterProps {
  hotel: Pick<Hotel, 'price'>;  // Only pick the price field from Hotel type
  onViewOffer?: () => void;
}

const BookingFooter = ({ 
  hotel,
  onViewOffer 
}: BookingFooterProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Price Section */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Starting at</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-semibold">
                {hotel.price.currency} {hotel.price.amount.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500">
                per {hotel.price.per}
              </span>
            </div>
          </div>

          {/* View Offer Button */}
          <button 
            className="bg-[#FFB700] hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-medium transition-colors"
            onClick={onViewOffer}
          >
            View Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingFooter; 