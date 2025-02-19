"use client";

import { useParams } from "next/navigation";
import MainHeader from "@/components/common/MainHeader";
import Footer from "@/components/common/Footer";
import HotelGallery from "@/components/hotel/HotelGallery";
import { hotels } from "@/data/hotels";

const HotelProfile = () => {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === id);

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <MainHeader isSticky={false} />

      {/* Main Content */}
      <div className="container mx-auto px-36 py-8">
        {/* Hotel Gallery with Name and Photos */}
        <HotelGallery 
          images={hotel.images}
          hotelName={hotel.name}
          location={hotel.location}
        />

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