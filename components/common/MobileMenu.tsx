"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CustomButton } from "@/components/ui/CustomButton";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CustomButton variant="primary" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </CustomButton>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px]">
        {/* Mobile navigation content */}
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu; 