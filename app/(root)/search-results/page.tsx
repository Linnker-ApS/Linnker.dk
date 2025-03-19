"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { hotels } from "@/data/hotels";
import SearchResultsGrid from "@/components/search-results/SearchResultsGrid";
import { MapIcon, XIcon } from "lucide-react";
import HotelMap from "@/components/search-results/map/HotelMap";
import AmenitiesFilter from "@/components/search-results/AmenitiesFilter";
import Footer from "@/components/common/Footer";
import MainHeader from "@/components/common/PageSearchbar";
import MobileSearchbar from "@/components/mobile-components/common/MobileSearchbar";
import { DateRange } from "react-day-picker";

const AMENITIES = ["Breakfast", "Free-Wifi", "Parking", "Pool", "Spa", "Gym"];

const SearchResults = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [showMap, setShowMap] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
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

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      // Auto-hide map on medium screens
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setShowMap(false);
      } else if (window.innerWidth >= 1024) {
        setShowMap(true);
      }
    };
    
    // Initial check
    checkScreenSize();
    
    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleFilterChange = (filter: string) => {
    setSelectedAmenities(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const toggleMap = () => {
    setShowMap(prev => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50">
        <div className="hidden md:block">
          <MainHeader isSticky={true} />
        </div>
        <div className="md:hidden">
          <MobileSearchbar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 w-full">
        {/* Left side - Hotel listings */}
        <div className={`${showMap && !isMobile ? 'w-[55%] xl:w-auto xl:flex-1' : 'w-full'} px-4 pt-4 transition-all duration-300 max-w-[1184px] mx-auto`}>
          {/* Amenities Filters */}
          <AmenitiesFilter 
            filters={AMENITIES}
            selectedFilters={selectedAmenities}
            onChange={handleFilterChange}
            className="mb-6 max-w-[1184px] mx-auto"
          />

          <div className="flex justify-between items-center mb-4 max-w-[1184px] mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Search Results</h1>
            <button 
              className="flex items-center gap-2 text-sm bg-white px-3 py-2 rounded-full shadow-md lg:hidden"
              onClick={toggleMap}
            >
              {showMap && isMobile ? (
                <>
                  <XIcon size={18} />
                  Hide map
                </>
              ) : (
                <>
                  <MapIcon size={18} />
                  Show map
                </>
              )}
            </button>
          </div>

          {/* Search Results Grid */}
          <div className="mb-6 ">
            <SearchResultsGrid 
              hotels={hotels}
              destination={destination}
              startDate={dateRange?.from}
              endDate={dateRange?.to}
            />
          </div>
        </div>

        {/* Right side - Map */}
        {showMap && (
          <div className={`${
            isMobile 
              ? 'fixed inset-0 z-[999]'
              : 'w-[45%] xl:flex-1'
          }`}>
            <div className={`${
              isMobile 
                ? 'h-screen' 
                : 'sticky top-[84px] h-[calc(100vh-84px)]'
            }`}>
              {isMobile && (
                <button 
                  className="absolute top-4 right-4 z-[1000] bg-white p-2 rounded-full shadow-md"
                  onClick={() => setShowMap(false)}
                >
                  <XIcon size={24} />
                </button>
              )}
              <HotelMap 
                hotels={hotels}
                destination={destination}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults; 