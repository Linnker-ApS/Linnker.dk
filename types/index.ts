import { DateRange as DayPickerRange } from "react-day-picker";

// Booking Types
export type DateRange = DayPickerRange;

export interface GuestCount {
  adults: number;
  children: number;
  rooms: number;
}

export interface RoomOffer {
  price: number;
  currency: string;
  perNight: boolean;
  freeCancellation: boolean;
  breakfast: boolean;
  paymentType: 'card' | 'cash';
  guests: number;
  rooms: number;
  taxes?: number;
}

// Hotel Types
export interface Location {
  address: string;
  city: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface Price {
  amount: number;
  currency: string;
  per: string;
}

export interface Room {
  name: string;
  description: string;
  size: string;
  occupancy: string;
  amenities: string[];
  imageUrl: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: Location;
  price: Price;
  rating: number;
  description: string;
  imageUrl: string;
  images: string[];
  amenities: string[];
  rooms: Room[];
  bookingUrl: string;
}

// Component Props Types
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

export interface PageSearchbarProps {
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

export interface MissionProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}


// Utility types
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

