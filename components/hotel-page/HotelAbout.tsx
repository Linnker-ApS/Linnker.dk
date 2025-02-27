"use client";

import { useState } from "react";

interface HotelAboutProps {
  description: string;
  highlights?: string[];
  name?: string;
}

const HotelAbout = ({ description, highlights, name }: HotelAboutProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 400;
  const needsReadMore = description.length > maxLength;

  const displayText = isExpanded 
    ? description 
    : description.slice(0, maxLength) + (needsReadMore ? '...' : '');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">About {name || 'Hotel'}</h2>
      <div className="space-y-2">
        <p className="text-gray-700 leading-relaxed">{displayText}</p>
        {needsReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#FFB700] hover:text-[#E6A500] font-medium text-sm transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>
      {highlights && highlights.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Highlights</h3>
          <ul className="grid grid-cols-2 gap-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 bg-[#FFB700] rounded-full" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HotelAbout; 