"use client";

import { useParams, useSearchParams } from "next/navigation";
import MainHeader from "@/components/common/MainHeader";
import Footer from "@/components/common/Footer";
import HotelGallery from "@/components/hotel/HotelGallery";
import { hotels } from "@/data/hotels";
import BookingFooter from "@/components/hotel/BookingFooter";
import HotelAmenities from "@/components/hotel/HotelAmenities";
import HotelAbout from "@/components/hotel/HotelAbout";
import HotelRooms from "@/components/hotel/HotelRooms";
import { format } from "date-fns";
import BookingCard from "@/components/hotel/BookingCard";
import { DateRange } from "react-day-picker";

const HotelProfile = () => {
  const searchParams = useSearchParams();
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === id);

  const handleViewOffer = (dateRange: DateRange, guests: number) => {
    if (!hotel) return;

    const isbrochner = hotel.bookingUrl.includes('brochner-hotels');
    
    const params = new URLSearchParams({
      [isbrochner ? 'checkin' : 'check_in']: isbrochner 
        ? format(dateRange.from!, 'dd-MM-yyyy')
        : dateRange.from!.toISOString().split('T')[0],
      [isbrochner ? 'checkout' : 'check_out']: isbrochner
        ? format(dateRange.to!, 'dd-MM-yyyy')
        : dateRange.to!.toISOString().split('T')[0],
      [isbrochner ? 'adults0' : 'adults']: guests.toString(),
      'rooms': '1'
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

          {/* Hotel Details */}
          <div className="grid grid-cols-3 gap-8">
            {/* Left column - Description and Amenities */}
            <div className="col-span-2 space-y-12">
              <HotelAbout 
                description={hotel.description}
                highlights={hotel.highlights}
              />

              <HotelAmenities 
                amenities={hotel.amenities}
              />

              <HotelRooms 
                rooms={hotel.rooms}
              />
              <HotelRooms 
                rooms={hotel.rooms}
              /><HotelRooms 
              rooms={hotel.rooms}
            /><HotelRooms 
            rooms={hotel.rooms}
          /><HotelRooms 
          rooms={hotel.rooms}
        />
            </div>

            {/* Right column - Map and Contact */}
            <div className="sticky top-24 space-y-6">
      <BookingCard
        price={hotel.price}
        onViewOffer={handleViewOffer}
        initialDates={
          searchParams.get('startDate') && searchParams.get('endDate')
            ? {
                startDate: new Date(searchParams.get('startDate')!),
                endDate: new Date(searchParams.get('endDate')!)
              }
            : undefined
        }
        initialGuests={Number(searchParams.get('adults')) || 1}
      />
    </div>
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