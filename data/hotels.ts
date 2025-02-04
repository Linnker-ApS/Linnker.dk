// import { hotels, type Hotel } from "@/data/hotels";

export const hotels = [
  {
    imageUrl: "/images/hotels/hotel-1.jpg",
    name: "Grand Plaza Hotel",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8
  },
  {
    imageUrl: "/images/hotels/hotel-2.jpg",
    name: "Seaside Resort & Spa",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5
  },
  {
    imageUrl: "/images/hotels/hotel-3.jpg",
    name: "Urban Boutique Hotel",
    location: {
      city: "Odense",
      country: "Denmark"
    },
    price: {
      amount: 850,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6
  },
  {
    imageUrl: "/images/hotels/hotel-4.jpg",
    name: "Historic City Center Hotel",
    location: {
      city: "Aalborg",
      country: "Denmark"
    },
    price: {
      amount: 780,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3
  },
  {
    imageUrl: "/images/hotels/hotel-5.jpg",
    name: "Harbor View Inn",
    location: {
      city: "Esbjerg",
      country: "Denmark"
    },
    price: {
      amount: 920,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7
  },
  {
    imageUrl: "/images/hotels/hotel-6.jpg",
    name: "Nordic Lights Hotel",
    location: {
      city: "Roskilde",
      country: "Denmark"
    },
    price: {
      amount: 890,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4
  },
  {
    imageUrl: "/images/hotels/hotel-7.jpg",
    name: "Royal Garden Hotel",
    location: {
      city: "Frederiksberg",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.9
  },
  {
    imageUrl: "/images/hotels/hotel-8.jpg",
    name: "Coastal Retreat",
    location: {
      city: "Helsingør",
      country: "Denmark"
    },
    price: {
      amount: 830,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2
  },
  {
    imageUrl: "/images/hotels/hotel-9.jpg",
    name: "Modern City Hotel",
    location: {
      city: "Vejle",
      country: "Denmark"
    },
    price: {
      amount: 760,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5
  },
  {
    imageUrl: "/images/hotels/hotel-10.jpg",
    name: "Riverside Lodge",
    location: {
      city: "Kolding",
      country: "Denmark"
    },
    price: {
      amount: 840,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6
  },
  {
    imageUrl: "/images/hotels/hotel-11.jpg",
    name: "Downtown Luxury Hotel",
    location: {
      city: "Horsens",
      country: "Denmark"
    },
    price: {
      amount: 980,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8
  },
  {
    imageUrl: "/images/hotels/hotel-12.jpg",
    name: "Park View Hotel",
    location: {
      city: "Randers",
      country: "Denmark"
    },
    price: {
      amount: 870,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4
  }
];

export type Hotel = {
  imageUrl: string;
  name: string;
  location: {
    city: string;
    country: string;
  };
  price: {
    amount: number;
    currency: string;
    per: string;
  };
  rating: number;
}; 