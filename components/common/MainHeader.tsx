"use client";

import Logo from "@/components/common/Logo";
import Searchbar from "@/components/ui/Searchbar";

interface MainHeaderProps {
  isSticky?: boolean;
  initialDestination?: string;
  initialStartDate?: Date;
  initialEndDate?: Date;
  initialGuests?: {
    adults: number;
    children: number;
    rooms: number;
  };
}

const MainHeader = ({ 
  isSticky = false,
  initialDestination = '',
  initialStartDate,
  initialEndDate,
  initialGuests = {
    adults: 2,
    children: 0,
    rooms: 1
  }
}: MainHeaderProps) => {
  return (
    <div className={`${isSticky ? 'sticky top-0' : ''} z-50 shadow-md py-[1.5vh] bg-site-background`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="w-[120px] shrink-0"></div>
          <div className="flex-1 max-w-3xl mx-auto px-4 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[140px]">
              <Logo variant="blackYellow" width={120} height={40} className="shrink-0" />
            </div>
            <Searchbar
              initialDestination={initialDestination}
              initialStartDate={initialStartDate}
              initialEndDate={initialEndDate}
              initialGuests={initialGuests}
            />
          </div>
          <div className="w-[120px] shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader; 