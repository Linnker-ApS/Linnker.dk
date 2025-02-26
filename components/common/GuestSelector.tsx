import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CustomButton } from "@/components/ui/CustomButton";
import { Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { GuestCount } from "@/types";

// Extract guest selector into reusable component
interface GuestSelectorProps {
  guests: GuestCount;
  onUpdate: (type: keyof GuestCount, operation: 'add' | 'subtract') => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const GuestSelector = ({
  guests,
  onUpdate,
  isOpen,
  onOpenChange
}: GuestSelectorProps) => {
  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <CustomButton
          variant="white"
          className={cn(
            "justify-start text-left font-normal w-[180px] h-10",
            isOpen ? "ring-2 ring-[#FFB700]" : ""
          )}
        >
          <Users className="mr-2 h-5 w-5" />
          {`${guests.adults + guests.children} Guest${
            guests.adults + guests.children !== 1 ? "s" : ""
          }`}
        </CustomButton>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="p-4 space-y-4">
          {["adults", "children", "rooms"].map((type) => (
            <div key={type} className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium">{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                <p className="text-xs text-gray-500">
                  {type === 'adults' ? 'Ages 13 or above' : type === 'children' ? 'Ages 0-12' : ''}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CustomButton
                  variant="white"
                  size="icon"
                  onClick={() => onUpdate(type as keyof GuestCount, 'subtract')}
                  disabled={guests[type as keyof GuestCount] <= (type === 'adults' ? 1 : 0)}
                >
                  -
                </CustomButton>
                <span className="w-6 text-center">{guests[type as keyof GuestCount]}</span>
                <CustomButton
                  variant="white"
                  size="icon"
                  onClick={() => onUpdate(type as keyof GuestCount, 'add')}
                  disabled={type === 'rooms' && guests.rooms >= 10}
                >
                  +
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}; 