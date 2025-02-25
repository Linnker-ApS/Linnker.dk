interface HotelAboutProps {
  description: string;
  highlights?: string[];
}

const HotelAbout = ({ description, highlights }: HotelAboutProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">About this hotel</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      
      {highlights && highlights.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Highlights</h3>
          <ul className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FFB700] rounded-full" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HotelAbout; 