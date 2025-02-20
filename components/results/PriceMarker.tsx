interface PriceMarkerProps {
  price: number;
  currency: string;
}

const PriceMarker = ({ price, currency }: PriceMarkerProps) => (
  <div className="cursor-pointer transform transition-transform hover:scale-110">
    <div className="relative inline-block">
      <div className="bg-white px-1.5 py-0.5 rounded-lg shadow-md border border-gray-200 flex items-center justify-center">
        <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
          {currency} {price}
        </span>
      </div>
    </div>
  </div>
);

export default PriceMarker; 