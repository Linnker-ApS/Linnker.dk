"use client";

import Logo from "@/components/common/Logo";
import Searchbar from "@/components/common/Searchbar";
import { cn } from "@/lib/utils";

interface MainHeaderProps {
  isSticky?: boolean;
}

const MainHeader = ({ isSticky = false }: MainHeaderProps) => {
  const headerClasses = cn(
    "z-50 shadow-md py-[1.5vh] bg-site-background hidden lg:block",
    isSticky && "sticky top-0"
  );
  
  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center relative">
          <div className="flex-1 max-w-3xl relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[140px]">
              <Logo variant="blackYellow" size="xs" />
            </div>
            <Searchbar showInitialSuggestions={false} disableAutocomplete={false} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

