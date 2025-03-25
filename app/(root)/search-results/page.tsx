"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchResultsGrid from "@/components/search-results/SearchResultsGrid";
import { MapIcon, XIcon } from "lucide-react";
import HotelMap from "@/components/search-results/map/HotelMap";
import AmenitiesFilter from "@/components/search-results/AmenitiesFilter";
import Footer from "@/components/common/Footer";
import MainHeader from "@/components/common/PageSearchbar";
import MobileSearchbar from "@/components/mobile-components/common/MobileSearchbar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setDestination, setDateRange, setGuests } from "@/store/slices/searchSlice";
import { useSearchHotelsQuery } from "@/store/services/api";

const AMENITIES = ["Breakfast", "Free-Wifi", "Parking", "Pool", "Spa", "Gym"];

const SearchResults = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  
  // Get search parameters
  const destination = searchParams.get('destination') || '';
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const adults = searchParams.get('adults') || '2';
  const children = searchParams.get('children') || '0';
  const rooms = searchParams.get('rooms') || '1';
  
  // Use RTK Query to fetch hotels
  const { data: hotels = [], isLoading, error } = useSearchHotelsQuery({
    destination: destination || undefined,
    startDate: startDate || undefined,
    endDate: endDate || undefined,
    guests: Number(adults) + Number(children),
    rooms: Number(rooms)
  });
  
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [showMap, setShowMap] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleHotels, setVisibleHotels] = useState(hotels);
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize Redux state from URL params on first load
  useEffect(() => {
    if (destination) {
      dispatch(setDestination(destination));
    }
    
    if (startDate && endDate) {
      dispatch(setDateRange({
        from: new Date(startDate),
        to: new Date(endDate)
      }));
    }
    
    if (adults || children || rooms) {
      // We'd need to implement a setGuestsDirectly action for this
      // For now, we'll handle it in the component
    }
  }, []);

  // Update visible hotels when data changes
  useEffect(() => {
    if (hotels && hotels.length > 0) {
      setVisibleHotels(hotels);
    }
  }, [hotels]);

  // Handler for filter changes
  const handleFilterChange = (filters: string[]) => {
    setSelectedAmenities(filters);
    // Filter hotels based on selected amenities
    // This would be better handled by the API, but for now we'll do it client-side
  };

  // Handler for page changes
  const handlePageChange = (page: number, displayedHotels: any[]) => {
    setCurrentPage(page);
    setVisibleHotels(displayedHotels);
  };

  // Toggle map visibility
  const toggleMap = () => {
    setShowMap(!showMap);
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
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50">
        {/* Desktop searchbar - visible from lg and up */}
        <MainHeader isSticky={true} />
        
        {/* Mobile searchbar - visible up to lg */}
        <div className="lg:hidden">
          <MobileSearchbar />
        </div>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFB700]"></div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="text-center p-8 text-red-500">
          <p>Error loading hotels. Please try again later.</p>
        </div>
      )}

      {/* Main Content */}
      {!isLoading && !error && (
        <div className="flex flex-1 w-full bg-site-background">
          {/* Left side - Hotel listings */}
          <div className={`${showMap && !isMobile ? 'w-[65%] xl:w-auto xl:flex-1' : 'w-full'} px-4 pt-4 transition-all duration-300 max-w-[1184px] mx-auto`}>
            {/* Amenities Filters */}
            <AmenitiesFilter 
              filters={AMENITIES}
              selectedFilters={selectedAmenities}
              onChange={handleFilterChange}
              className="mb-6 max-w-[1184px] mx-auto"
            />

            <div className="flex justify-between items-center mb-4 max-w-[1184px] mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold px-4">
                {hotels.length} Results
              </h1>
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
            <div className="mb-6">
              <SearchResultsGrid 
                hotels={hotels}
                destination={destination}
                startDate={startDate ? new Date(startDate) : undefined}
                endDate={endDate ? new Date(endDate) : undefined}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            </div>
          </div>

          {/* Right side - Map */}
          {showMap && (
            <div className={`${
              isMobile 
                ? 'fixed inset-0 z-[999]'
                : 'w-[35%] xl:flex-1'
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
                  hotels={visibleHotels}
                  destination={destination}
                />
              </div>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SearchResults; 