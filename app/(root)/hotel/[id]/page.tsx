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

const HotelProfile = () => {
  const searchParams = useSearchParams();
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === id);

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

  // Log the processed parameters
  console.log('Processed Params:', { destination, startDate, endDate, guests });

  const handleViewOffer = () => {
    // Get search parameters
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const adults = searchParams.get('adults') || '2';
    const children = searchParams.get('children') || '0';
    const rooms = searchParams.get('rooms') || '1';

    // Create URL with search parameters
    const bookingUrl = new URL(hotel.bookingUrl);
    bookingUrl.searchParams.append('checkin', startDate || '');
    bookingUrl.searchParams.append('checkout', endDate || '');
    bookingUrl.searchParams.append('adults', adults);
    bookingUrl.searchParams.append('children', children);
    bookingUrl.searchParams.append('rooms', rooms);

    // Redirect to hotel website
    window.open(bookingUrl.toString(), '_blank');
  };

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
            </div>

            {/* Right column - Map and Contact */}
            <div className="sticky top-24 space-y-6">
              <div className="border rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">
                  {hotel.price.currency} {hotel.price.amount.toLocaleString()} 
                  <span className="text-base font-normal text-gray-600">
                    / {hotel.price.per}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Footer */}
        <BookingFooter 
          hotel={hotel}
          onViewOffer={handleViewOffer}
        />
      </div>

      <Footer />
    </div>
  );
};

export default HotelProfile; 