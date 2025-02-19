"use client";

import Image from "next/image";
import { useState } from "react";

interface PhotoGalleryProps {
  images: string[];
  hotelName: string;
}

const PhotoGallery = ({ images, hotelName }: PhotoGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Fallback image URL
  const fallbackImage = "/images/placeholder-hotel.jpg";

  // Handle image load error
  const handleImageError = (index: number) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // Get image source with fallback
  const getImageSrc = (index: number) => {
    if (imageErrors[index] || !images[index]) {
      return fallbackImage;
    }
    return images[index];
  };

  // Ensure we have enough images, pad with fallbacks if needed
  const ensureMinimumImages = () => {
    if (!Array.isArray(images) || images.length < 5) {
      console.warn('PhotoGallery: Not enough images provided');
      return Array(5).fill(fallbackImage);
    }
    return images;
  };

  const safeImages = ensureMinimumImages();

  return (
    <div className="grid grid-cols-4 gap-3 mb-8 relative">
      {/* Smaller image left */}
      <div className="col-span-1">
        <div 
          className="rounded-tl-lg rounded-bl-lg relative overflow-hidden cursor-pointer h-[520px] w-auto"
          onClick={() => setSelectedImageIndex(1)}
        >
          <Image
            src={getImageSrc(1)}
            alt={`${hotelName} - View 1`}
            fill
            className="object-cover hover:opacity-90 transition"
            onError={() => handleImageError(1)}
            priority // Load this image first
          />
        </div>
      </div>

      {/* Main large image in center */}
      <div className="col-span-2 relative overflow-hidden h-[520px]">
        <Image
          src={getImageSrc(selectedImageIndex)}
          alt={`${hotelName} - Main view`}
          fill
          className="object-cover"
          onError={() => handleImageError(selectedImageIndex)}
          priority // Load this image first
        />
      </div>

      {/* Smaller images right */}
      <div className="col-span-1 space-y-3">
        {safeImages.slice(3, 5).map((_, index) => (
          <div 
            key={index}
            className={`relative overflow-hidden cursor-pointer h-[254px] 
              ${index === 0 ? 'rounded-tr-lg' : ''}`}
            onClick={() => setSelectedImageIndex(index + 3)}
          >
            <Image
              src={getImageSrc(index + 3)}
              alt={`${hotelName} - View ${index + 3}`}
              fill
              className="object-cover hover:opacity-90 transition"
              onError={() => handleImageError(index + 3)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery; 