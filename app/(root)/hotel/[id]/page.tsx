"use client";

import { useParams, useSearchParams } from "next/navigation";
import MainHeader from "@/components/common/MainHeader";
import Footer from "@/components/common/Footer";
import HotelGallery from "@/components/hotel-page/HotelGallery";
import { hotels } from "@/data/hotels";
import BookingFooter from "@/components/hotel-page/BookingFooter";
import HotelAmenities from "@/components/hotel-page/HotelAmenities";
import HotelAbout from "@/components/hotel-page/HotelAbout";
import HotelRooms from "@/components/hotel-page/HotelRoomsGrid";
import { format } from "date-fns";
import BookingCard from "@/components/hotel-page/BookingCard";
import { DateRange } from "react-day-picker";
import { GuestCount } from "@/types";
import HotelRating from "@/components/hotel-page/HotelRating";
import MobileSearchbar from "@/components/mobile-components/common/MobileSearchbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HotelProfile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === id);

  // State for MobileSearchbar
  const [destination, setDestination] = useState(searchParams.get('destination') || '');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(() => {
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    return startDate && endDate ? {
      from: new Date(startDate),
      to: new Date(endDate)
    } : undefined;
  });
  const [guests, setGuests] = useState({
    adults: Number(searchParams.get('adults')) || 2,
    children: Number(searchParams.get('children')) || 0,
    rooms: Number(searchParams.get('rooms')) || 1
  });

  // Handler functions for MobileSearchbar
  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (range: DateRange | undefined) => {
    setDateRange(range);
  };

  const handleGuestChange = (type: keyof typeof guests, action: 'add' | 'subtract') => {
    setGuests(prev => ({
      ...prev,
      [type]: action === 'add' ? prev[type] + 1 : Math.max(type === 'rooms' ? 1 : 0, prev[type] - 1)
    }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set('destination', destination);
    if (dateRange?.from) params.set('startDate', dateRange.from.toISOString());
    if (dateRange?.to) params.set('endDate', dateRange.to.toISOString());
    params.set('adults', guests.adults.toString());
    params.set('children', guests.children.toString());
    params.set('rooms', guests.rooms.toString());
    
    router.push(`/search-results?${params.toString()}`);
  };

  const handleViewOffer = (dates: DateRange, guests: GuestCount) => {
    if (!hotel || !dates.from || !dates.to) return;

    const isbrochner = hotel.bookingUrl.includes('brochner-hotels');
    
    const params = new URLSearchParams({
      [isbrochner ? 'checkin' : 'check_in']: isbrochner 
        ? format(dates.from, 'dd-MM-yyyy')
        : dates.from.toISOString().split('T')[0],
      [isbrochner ? 'checkout' : 'check_out']: isbrochner
        ? format(dates.to, 'dd-MM-yyyy')
        : dates.to.toISOString().split('T')[0],
      [isbrochner ? 'adults0' : 'adults']: guests.adults.toString(),
      [isbrochner ? 'children0' : 'children']: guests.children.toString(),
      'rooms': guests.rooms.toString()
    });

    window.open(`${hotel.bookingUrl}?${params.toString()}`, '_blank');
  };

  // Log the parameters to verify they exist
  console.log('Search Params:', {
    destination: searchParams.get('destination'),
    startDate: searchParams.get('startDate'),
    endDate: searchParams.get('endDate'),
    adults: searchParams.get('adults'),
    children: searchParams.get('children'),
    rooms: searchParams.get('rooms')
  });

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  // Get all search parameters
  const startDate = searchParams.get('startDate') ? new Date(searchParams.get('startDate')!) : undefined;
  const endDate = searchParams.get('endDate') ? new Date(searchParams.get('endDate')!) : undefined;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="hidden md:block">
        <MainHeader 
          isSticky={false}
        />
      </div>

      <div className="md:hidden">
        <MobileSearchbar />
      </div>

      {/* Main content wrapper */}
      <div className="flex-1 relative">
        {/* Main Content */}
        <div className="container mx-auto px-36 py-8">
          {/* Hotel Gallery with Name and Photos */}
          <HotelGallery 
            images={hotel.images}
            hotelName={hotel.name}
            location={hotel.location}
          />

          {/* Decorative Divider */}
          <div className="my-12">
            <div className="w-full border-t border-gray-400" />
            <div className="flex justify-center -mt-3">
              <div className="bg-white px-4">
              </div>
            </div>
          </div>

          {/* Hotel Details */}
          <div className="space-y-12">
            {/* Top Section: About, Amenities, and Booking Card */}
            <div className="grid grid-cols-3 gap-8">
              {/* Left column */}
              <div className="col-span-2 space-y-12">
                <HotelAbout 
                  description={hotel.description}
                  highlights={hotel.highlights}
                />
                <HotelAmenities 
                  amenities={hotel.amenities}
                />
              </div>

              {/* Right column - Booking Card and Rating */}
              <div className="space-y-8">
                <div className="top-24">
                  <BookingCard
                    price={hotel.price}
                    onViewOffer={handleViewOffer}
                    initialDates={
                      searchParams.get('startDate') && searchParams.get('endDate')
                        ? {
                            from: new Date(searchParams.get('startDate')!),
                            to: new Date(searchParams.get('endDate')!)
                          }
                        : undefined
                    }
                    initialGuests={{
                      adults: Number(searchParams.get('adults')) || 2,
                      children: Number(searchParams.get('children')) || 0,
                      rooms: Number(searchParams.get('rooms')) || 1
                    }}
                  />
                </div>
                <HotelRating rating={hotel.rating} reviews={hotel.reviews} />
              </div>
            </div>

            {/* Room Types Section - Full Width */}
            <HotelRooms 
              rooms={hotel.rooms}
            />
          </div>
        </div>

        {/* Booking Footer */}
        <BookingFooter 
          hotel={hotel}
        />
      </div>

      <Footer />
    </div>
  );
};

export default HotelProfile; 