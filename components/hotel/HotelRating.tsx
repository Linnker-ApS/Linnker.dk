import { Star } from "lucide-react";

interface HotelRatingProps {
  rating: number;
  reviews?: number;
}

const HotelRating = ({ rating, reviews = 0 }: HotelRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="bg-white rounded-xl border p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Rating</h2>
      
      <div className="space-y-3">
        {/* Rating Display */}
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold">{rating.toFixed(1)}</div>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < fullStars
                    ? 'fill-[#FFB700] text-[#FFB700]'
                    : index === fullStars && hasHalfStar
                    ? 'fill-[#FFB700]/50 text-[#FFB700]'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Count */}
        {reviews > 0 && (
          <div className="text-sm text-gray-600">
            Based on {reviews} reviews
          </div>
        )}

        {/* Rating Bars */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center gap-2">
              <span className="text-sm w-8">{stars}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#FFB700] rounded-full"
                  style={{ 
                    width: `${Math.random() * 100}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelRating; 