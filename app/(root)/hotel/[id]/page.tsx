"use client";

import { useParams, useSearchParams } from "next/navigation";
import MainHeader from "@/components/common/MainHeader";
import Footer from "@/components/common/Footer";
import HotelGallery from "@/components/hotel/HotelGallery";
import { hotels } from "@/data/hotels";
import BookingFooter from "@/components/hotel/BookingFooter";
import HotelAmenities from "@/components/hotel/HotelAmenities";
import HotelAbout from "@/components/hotel/HotelAbout";
import HotelRooms from "@/components/hotel/HotelRoomsGrid";
import { format } from "date-fns";
import BookingCard from "@/components/hotel/BookingCard";
import { DateRange } from "react-day-picker";
import { GuestCount } from "@/types";

const HotelProfile = () => {
  const searchParams = useSearchParams();
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === id);

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
  const guests = {
    adults: Number(searchParams.get('adults')) || 2,
    children: Number(searchParams.get('children')) || 0,
    rooms: Number(searchParams.get('rooms')) || 1
  };
  const destination = searchParams.get('destination') || '';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content wrapper */}
      <div className="flex-1 relative">
        <MainHeader 
          isSticky={false}
          initialDestination={destination}
          initialStartDate={startDate}
          initialEndDate={endDate}
          initialGuests={guests}
        />

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

              {/* Right column - Booking Card */}
              <div className="sticky top-24">
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