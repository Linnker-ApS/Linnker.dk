"use client";

import { useLoadScript, GoogleMap, MarkerF, InfoWindow, OverlayView } from "@react-google-maps/api";
import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { Hotel } from "@/data/hotels";
import PriceMarker from "../results/PriceMarker";
import HotelCard from "../common/HotelCard";
import helvetica from "@/lib/fonts";
import MapCard from "../results/MapCard";

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
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const lastCenterRef = useRef(center);

  // Memoize map options
  const mapOptions = useMemo(() => ({
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: true,
    fullscreenControl: true,
    clickableIcons: false,
    disableDoubleClickZoom: true,
  }), []);

  // Memoize InfoWindow options with dynamic positioning
  const getInfoWindowOptions = useCallback((hotel: Hotel) => {
    if (!isLoaded || !mapRef.current) return {};
    
    const map = mapRef.current;
    const bounds = map.getBounds();
    const center = map.getCenter();
    
    if (!bounds || !center) return {};

    const markerPosition = new google.maps.LatLng(
      hotel.location.coordinates.latitude,
      hotel.location.coordinates.longitude
    );

    // Check if marker is in upper or lower half
    const isInUpperHalf = markerPosition.lat() > center.lat();
    // Check if marker is in left or right half
    const isInLeftHalf = markerPosition.lng() < center.lng();

    return {
      pixelOffset: new google.maps.Size(
        isInLeftHalf ? 35 : -35,  // Move right if marker is on left, left if marker is on right
        isInUpperHalf ? 35 : -35  // Move down if marker is on top, up if marker is on bottom
      ),
      maxWidth: 320,
      disableAutoPan: true
    };
  }, [isLoaded]);

  // Filter hotels based on destination
  const filteredHotels = useMemo(() => {
    if (!destination) return hotels;
    const searchLocation = destination.toLowerCase();
    return hotels.filter(hotel => {
      const hotelLocation = `${hotel.location.city}, ${hotel.location.country}`.toLowerCase();
      return hotelLocation.includes(searchLocation);
    });
  }, [hotels, destination]);

  // Effect to recenter map when destination or filtered hotels change
  useEffect(() => {
    if (isLoaded && mapRef.current) {
      centerMap();
    }
  }, [destination, filteredHotels, isLoaded]);

  // Center map on filtered hotels
  const centerMap = useCallback(() => {
    if (!mapRef.current || filteredHotels.length === 0) return;

    const bounds = new google.maps.LatLngBounds();
    filteredHotels.forEach((hotel) => {
      bounds.extend({
        lat: hotel.location.coordinates.latitude,
        lng: hotel.location.coordinates.longitude,
      });
    });

    mapRef.current.fitBounds(bounds);

    // If there's only one result, zoom out a bit
    if (filteredHotels.length === 1) {
      const listener = mapRef.current.addListener('idle', () => {
        if (mapRef.current) {
          mapRef.current.setZoom(Math.min(mapRef.current.getZoom() || 14, 14));
        }
        google.maps.event.removeListener(listener);
      });
    }
  }, [filteredHotels]);

  const handleMarkerClick = useCallback((hotel: Hotel) => {
    if (selectedHotel?.id === hotel.id) {
      setSelectedHotel(null);
      return;
    }

    if (mapRef.current) {
      const currentCenter = mapRef.current.getCenter();
      if (currentCenter) {
        lastCenterRef.current = { 
          lat: currentCenter.lat(), 
          lng: currentCenter.lng() 
        };
      }
    }
    
    setSelectedHotel(hotel);
  }, [selectedHotel]);

  const handleInfoWindowClose = useCallback(() => {
    if (mapRef.current) {
      const currentCenter = mapRef.current.getCenter();
      if (currentCenter) {
        lastCenterRef.current = { 
          lat: currentCenter.lat(), 
          lng: currentCenter.lng() 
        };
      }
    }
    setSelectedHotel(null);
  }, []);

  // Initial map load
  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    if (isInitialLoad) {
      centerMap();
      setIsInitialLoad(false);
    }
  }, [centerMap, isInitialLoad]);

  // Memoize the markers with hover state
  const markers = useMemo(() => 
    filteredHotels.map((hotel, index) => (
      <OverlayView
        key={hotel.id}
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
        <div 
          onClick={() => handleMarkerClick(hotel)}
          className="transition-[z-index] hover:z-[1000]"
          style={{ position: 'relative', zIndex: selectedHotel?.id === hotel.id ? 999 : 1 }}
        >
          <PriceMarker
            price={hotel.price.amount}
            currency={hotel.price.currency}
          />
        </div>
      </OverlayView>
    )), [filteredHotels, handleMarkerClick, selectedHotel]);

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
      center={isInitialLoad ? center : undefined}
      mapContainerClassName="w-full h-[91vh]"
      options={mapOptions}
      onLoad={onMapLoad}
    >
      {markers}
      {selectedHotel && (
        <InfoWindow
          position={{
            lat: selectedHotel.location.coordinates.latitude,
            lng: selectedHotel.location.coordinates.longitude,
          }}
          onCloseClick={handleInfoWindowClose}
          options={getInfoWindowOptions(selectedHotel)}
        >
          <div 
            className={`${helvetica.className}`}
            style={{ 
              background: 'transparent',
              padding: 0,
              margin: 0,
            }}
          >
            <style>
            {`
              .gm-style-iw-d { 
                background: transparent !important; 
                padding: 0 !important;
                overflow: hidden !important;
              }
              .gm-style-iw-c {
                background: transparent !important;
                padding: 0 !important;
                box-shadow: none !important;
                max-width: none !important;
              }
              .gm-style-iw {
                background: transparent !important;
                padding: 0 !important;
              }
              .gm-style-iw button.gm-ui-hover-effect {
                display: none !important;
              }
              .gm-style .gm-style-iw-tc {
                display: none !important;
              }
              .gm-style .gm-style-iw-t::after {
                display: none !important;
              }
            `}
            </style>
            <MapCard 
              {...selectedHotel} 
              onClose={handleInfoWindowClose}
            />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default HotelMap; 