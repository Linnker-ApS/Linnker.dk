import { DateRange as DayPickerRange } from "react-day-picker";

// Guest and Booking related types
export interface GuestCount {
  adults: number;
  children: number;
  rooms: number;
}

// Only use one DateRange definition
export type DateRange = DayPickerRange;

// Hotel related types
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

// Component Props types
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