import { DateRange, GuestCount } from './booking.types';
import { Price } from './hotel.types';

export interface SearchbarProps {
  initialDestination?: string;
  initialStartDate?: Date;
  initialEndDate?: Date;
  initialGuests?: GuestCount;
  showInitialSuggestions?: boolean;
  disableAutocomplete?: boolean;
}

export interface BookingCardProps {
  price: Price;
  onViewOffer: (dates: DateRange, guests: GuestCount) => void;
  initialDates?: DateRange;
  initialGuests?: GuestCount;
}

export interface MainHeaderProps {
  isSticky?: boolean;
  initialDestination?: string;
  initialStartDate?: Date;
  initialEndDate?: Date;
  initialGuests?: GuestCount;
} 

export interface MobileSearchbarProps {
  destination: string;
  dateRange: DateRange | undefined;
  guests: GuestCount;
  onDestinationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (range: DateRange | undefined) => void;
  onGuestChange: (type: keyof GuestCount, operation: 'add' | 'subtract') => void;
  onSearch: () => void;
}
