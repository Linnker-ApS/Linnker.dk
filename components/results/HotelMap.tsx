"use client";

import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import { Hotel } from "@/data/hotels";

interface HotelMapProps {
  hotels: Hotel[];
  center?: { lat: number; lng: number };
}

const HotelMap = ({ hotels, center = { lat: 55.676098, lng: 12.568337 } }: HotelMapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const mapCenter = useMemo(() => center, [center]);

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={13}
      center={mapCenter}
      mapContainerClassName="w-full h-full"
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: true,
        fullscreenControl: true,
      }}
    >
      {hotels.map((hotel, index) => (
        <MarkerF
          key={index}
          position={{
            lat: 0, // You'll need to add latitude to your hotel data
            lng: 0, // You'll need to add longitude to your hotel data
          }}
          title={hotel.name}
        />
      ))}
    </GoogleMap>
  );
};

export default HotelMap; 