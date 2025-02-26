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