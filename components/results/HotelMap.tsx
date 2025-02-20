"use client";

import { useLoadScript, GoogleMap, MarkerF, InfoWindow, OverlayView } from "@react-google-maps/api";
import { useMemo, useState, useEffect, useRef } from "react";
import { Hotel } from "@/data/hotels";
import PriceMarker from "../results/PriceMarker";

interface HotelMapProps {
  hotels: Hotel[];
  destination?: string;
  center?: { lat: number; lng: number };
}

const HotelMap = ({ hotels, destination, center = { lat: 55.676098, lng: 12.568337 } }: HotelMapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  const mapRef = useRef<google.maps.Map | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const onMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  // Filter hotels using the same logic as SearchResultsGrid
  const filteredHotels = hotels.filter(hotel => {
    if (destination) {
      const searchLocation = destination.toLowerCase();
      const hotelLocation = `${hotel.location.city}, ${hotel.location.country}`.toLowerCase();
      return hotelLocation.includes(searchLocation);
    }
    return true;
  });

  // Update map bounds when filtered hotels change
  useEffect(() => {
    if (!isLoaded || filteredHotels.length === 0) return;
    
    const bounds = new google.maps.LatLngBounds();
    filteredHotels.forEach((hotel) => {
      bounds.extend({
        lat: hotel.location.coordinates.latitude,
        lng: hotel.location.coordinates.longitude,
      });
    });

    mapRef.current?.fitBounds(bounds);
  }, [filteredHotels, isLoaded]);

  const mapCenter = useMemo(() => center, [center]);

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full w-8 h-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={13}
      center={mapCenter}
      mapContainerClassName="w-full h-[91vh]"
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: true,
        fullscreenControl: true,
      }}
      onLoad={onMapLoad}
    >
      {filteredHotels.map((hotel, index) => (
        <OverlayView
          key={index}
          position={{
            lat: hotel.location.coordinates.latitude,
            lng: hotel.location.coordinates.longitude,
          }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={(width, height) => ({
            x: -(width / 2),
            y: -height,
          })}
        >
          <PriceMarker
            price={hotel.price.amount}
            currency={hotel.price.currency}
          />
        </OverlayView>
      ))}
    </GoogleMap>
  );
};

export default HotelMap; 