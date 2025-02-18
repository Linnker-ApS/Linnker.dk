"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import MainHeader from "@/components/common/MainHeader";
import Footer from "@/components/common/Footer";
import { hotels } from "@/data/hotels";

const HotelProfile = () => {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <MainHeader isSticky={true} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hotel Name and Location */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold mb-2">{hotel.name}</h1>
          <p className="text-gray-600">
            {hotel.location.city}, {hotel.location.country}
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-4 gap-4 mb-8 relative">
          {/* Main large image */}
          <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden h-[600px]">
            <Image
              src={hotel.images[selectedImageIndex]}
              alt={`${hotel.name} - Main view`}
              fill
              className="object-cover"
            />
          </div>

          {/* Smaller images */}
          {hotel.images.slice(1, 5).map((image, index) => (
            <div 
              key={index}
              className="relative rounded-lg overflow-hidden cursor-pointer h-[280px]"
              onClick={() => setSelectedImageIndex(index + 1)}
            >
              <Image
                src={image}
                alt={`${hotel.name} - View ${index + 1}`}
                fill
                className="object-cover hover:opacity-90 transition"
              />
            </div>
          ))}

          {/* View all photos button */}
          <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-gray-50">
            View all photos
          </button>
        </div>

        {/* Hotel Details */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left column - Description and Amenities */}
          <div className="col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About this hotel</h2>
              <p className="text-gray-600">{hotel.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Booking widget */}
          <div className="sticky top-24">
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">
                {hotel.price.currency} {hotel.price.amount} <span className="text-base font-normal text-gray-600">/ {hotel.price.per}</span>
              </h3>
              {/* Add booking form here */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelProfile; 