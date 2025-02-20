interface PriceMarkerProps {
  price: number;
  currency: string;
}

const PriceMarker = ({ price, currency }: PriceMarkerProps) => (
  <div className="cursor-pointer transform transition-transform hover:scale-110">
    <div className="relative">
      <div className="bg-white px-3 py-1 rounded-lg shadow-md border border-gray-200">
        <span className="text-sm font-semibold text-gray-900">
          {currency} {price}
        </span>
        
      </div>
    </div>
  </div>
);

export default PriceMarker; 