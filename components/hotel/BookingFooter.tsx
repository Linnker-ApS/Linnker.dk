"use client";

import { Hotel } from "@/data/hotels";
import { CustomButton } from "@/components/ui/CustomButton";

interface BookingFooterProps {
  hotel: Pick<Hotel, 'price'>;  // Only pick the price field from Hotel type
  onViewOffer?: () => void;
}

const BookingFooter = ({ 
  hotel,
  onViewOffer 
}: BookingFooterProps) => {
  return (
    <div className="sticky bottom-0 bg-site-background border-t  shadow-lg z-50">
      <div className="container mx-auto px-4 py-2 ">
        <div className="flex items-center justify-between">
          {/* Price Section */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Starting at</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-semibold">
                {hotel.price.currency} {hotel.price.amount}
              </span>
              <span className="text-sm text-gray-500">
                per {hotel.price.per}
              </span>
            </div>
          </div>

          {/* View Offer Button */}
          <CustomButton 
            variant="secondary"
            size="lg"
            onClick={onViewOffer}
          >
            View Offer
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default BookingFooter; 