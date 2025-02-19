// import { hotels, type Hotel } from "@/data/hotels";

export type Hotel = {
  id: string;
  imageUrl: string;
  images: string[];
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
  description: string;
  amenities: string[];
};

export const hotels: Hotel[] = [
  // Copenhagen Area (16 hotels) - Higher price range due to capital city
  {
    id: "grand-plaza-copenhagen",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: [
      "/images/hotels/hotel-7.jpg",
      "/images/hotels/hotel-3.jpg",
      "/images/hotels/hotel-9.jpg",
      "/images/hotels/hotel-5.jpg",
      "/images/hotels/hotel-11.jpg",
      "/images/hotels/hotel-2.jpg"
    ],
    name: "Grand Plaza Copenhagen",
    location: {
      city: "Sankt Peders Stræde 34, 1453 København",
      country: "Denmark"
    },
    price: {
      amount: 1800,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8,
    description: "Experience luxury in the heart of Copenhagen. Our hotel combines modern Scandinavian design with world-class amenities and spectacular city views.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "copenhagen-admiral-hotel",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: [
      "/images/hotels/hotel-3.jpg"
    ],
    name: "Copenhagen Admiral Hotel",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1650,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the elegance of Copenhagen with our Admiral Hotel. Located in the heart of the city, this hotel offers a perfect blend of comfort and luxury.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "nyhavn-waterfront-hotel",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: [
      "/images/hotels/hotel-9.jpg"
    ],
    name: "Nyhavn Waterfront Hotel",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1750,
      currency: "DKK",
      per: "night"
    },
    rating: 4.9,
    description: "Enjoy the breathtaking views of Nyhavn from your room at our Waterfront Hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "the-nordic-light",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: [
      "/images/hotels/hotel-5.jpg"
    ],
    name: "The Nordic Light",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1550,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the beauty of Nordic design in our The Nordic Light hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "royal-garden-hotel",
    imageUrl: "/images/hotels/hotel-11.jpg",
    images: [
      "/images/hotels/hotel-11.jpg"
    ],
    name: "Royal Garden Hotel",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 2100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.9,
    description: "Experience the grandeur of Copenhagen with our Royal Garden Hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "tivoli-corner-hotel",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: [
      "/images/hotels/hotel-2.jpg"
    ],
    name: "Tivoli Corner Hotel",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1900,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8,
    description: "Experience the charm of Copenhagen with our Tivoli Corner Hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "copenhagen-strand",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: [
      "/images/hotels/hotel-8.jpg"
    ],
    name: "Copenhagen Strand",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1600,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the beauty of Copenhagen with our Copenhagen Strand hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "vesterbro-urban-hotel",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: [
      "/images/hotels/hotel-4.jpg"
    ],
    name: "Vesterbro Urban Hotel",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1450,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the vibrant atmosphere of Copenhagen with our Vesterbro Urban Hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "harbor-view-copenhagen",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: [
      "/images/hotels/hotel-6.jpg"
    ],
    name: "Harbor View Copenhagen",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1850,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the beauty of Copenhagen with our Harbor View hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "the-square-copenhagen",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: [
      "/images/hotels/hotel-1.jpg"
    ],
    name: "The Square Copenhagen",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1700,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the elegance of Copenhagen with our The Square hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "christianshavn-hotel",
    imageUrl: "/images/hotels/hotel-10.jpg",
    images: [
      "/images/hotels/hotel-10.jpg"
    ],
    name: "Christianshavn Hotel",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1550,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the charm of Copenhagen with our Christianshavn hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "københavn-central-hotel",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: [
      "/images/hotels/hotel-3.jpg"
    ],
    name: "København Central Hotel",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1650,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the convenience of Copenhagen with our København Central hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "nordic-hospitality",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: [
      "/images/hotels/hotel-7.jpg"
    ],
    name: "Nordic Hospitality",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1400,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the warmth of Nordic hospitality with our Nordic Hospitality hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "østerbro-boutique-hotel",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: [
      "/images/hotels/hotel-5.jpg"
    ],
    name: "Østerbro Boutique Hotel",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1600,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the elegance of Copenhagen with our Østerbro Boutique hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "copenhagen-islands",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: [
      "/images/hotels/hotel-9.jpg"
    ],
    name: "Copenhagen Islands",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 1750,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the beauty of Copenhagen with our Copenhagen Islands hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "frederiksberg-palace-hotel",
    imageUrl: "/images/hotels/hotel-11.jpg",
    images: [
      "/images/hotels/hotel-11.jpg"
    ],
    name: "Frederiksberg Palace Hotel",
    location: {
      city: "Copenhagen",
      country: "Denmark"
    },
    price: {
      amount: 2000,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8,
    description: "Experience the grandeur of Copenhagen with our Frederiksberg Palace hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },

  // Aarhus Area (12 hotels) - Second largest city
  {
    id: "aarhus-harbor-hotel",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: [
      "/images/hotels/hotel-4.jpg"
    ],
    name: "Aarhus Harbor Hotel",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the beauty of Aarhus with our Harbor hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "city-lodge-aarhus",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: [
      "/images/hotels/hotel-8.jpg"
    ],
    name: "City Lodge Aarhus",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the convenience of Aarhus with our City Lodge hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "aarhus-central-hotel",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: [
      "/images/hotels/hotel-2.jpg"
    ],
    name: "Aarhus Central Hotel",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1300,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the convenience of Aarhus with our Central hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "the-mayor-hotel",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: [
      "/images/hotels/hotel-6.jpg"
    ],
    name: "The Mayor Hotel",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1400,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the charm of Aarhus with our The Mayor hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "waterfront-suites",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: [
      "/images/hotels/hotel-1.jpg"
    ],
    name: "Waterfront Suites",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1350,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the convenience of Aarhus with our Waterfront Suites hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "latin-quarter-inn",
    imageUrl: "/images/hotels/hotel-10.jpg",
    images: [
      "/images/hotels/hotel-10.jpg"
    ],
    name: "Latin Quarter Inn",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the charm of Aarhus with our Latin Quarter Inn hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "aarhus-guldsmeden",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: [
      "/images/hotels/hotel-3.jpg"
    ],
    name: "Aarhus Guldsmeden",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1250,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the craftsmanship of Aarhus with our Guldsmeden hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "downtown-apartments",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: [
      "/images/hotels/hotel-7.jpg"
    ],
    name: "Downtown Apartments",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Experience the convenience of Aarhus with our Downtown Apartments hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "aarhus-riverside",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: [
      "/images/hotels/hotel-5.jpg"
    ],
    name: "Aarhus Riverside",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1300,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the beauty of Aarhus with our Riverside hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "university-park-hotel",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: [
      "/images/hotels/hotel-9.jpg"
    ],
    name: "University Park Hotel",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the convenience of Aarhus with our University Park hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "aros-art-hotel",
    imageUrl: "/images/hotels/hotel-11.jpg",
    images: [
      "/images/hotels/hotel-11.jpg"
    ],
    name: "ARoS Art Hotel",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1450,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8,
    description: "Experience the art of Aarhus with our ARoS Art hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "botanical-gardens-inn",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: [
      "/images/hotels/hotel-4.jpg"
    ],
    name: "Botanical Gardens Inn",
    location: {
      city: "Aarhus",
      country: "Denmark"
    },
    price: {
      amount: 1250,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the beauty of Aarhus with our Botanical Gardens Inn hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },

  // Odense Area (10 hotels)
  {
    id: "hans-christian-andersen-hotel",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: [
      "/images/hotels/hotel-8.jpg"
    ],
    name: "Hans Christian Andersen Hotel",
    location: {
      city: "Odense",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the charm of Odense with our Hans Christian Andersen hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "odense-palace-hotel",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: [
      "/images/hotels/hotel-2.jpg"
    ],
    name: "Odense Palace Hotel",
    location: {
      city: "Odense",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the elegance of Odense with our Palace hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "city-garden-lodge",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: [
      "/images/hotels/hotel-6.jpg"
    ],
    name: "City Garden Lodge",
    location: {
      city: "Odense",
      country: "Denmark"
    },
    price: {
      amount: 950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the beauty of Odense with our City Garden Lodge hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "fairytale-inn",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: [
      "/images/hotels/hotel-1.jpg"
    ],
    name: "Fairytale Inn",
    location: {
      city: "Odense",
      country: "Denmark"
    },
    price: {
      amount: 1000,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the charm of Odense with our Fairytale Inn hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "river-view-odense",
    imageUrl: "/images/hotels/hotel-10.jpg",
    images: [
      "/images/hotels/hotel-10.jpg"
    ],
    name: "River View Odense",
    location: {
      city: "Odense",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the beauty of Odense with our River View hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "historic-center-hotel",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: [
      "/images/hotels/hotel-3.jpg"
    ],
    name: "Historic Center Hotel",
    location: {
      city: "Odense",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the history of Odense with our Historic Center hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "odense-harbor-hotel",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: [
      "/images/hotels/hotel-7.jpg"
    ],
    name: "Odense Harbor Hotel",
    location: {
      city: "Odense",
      country: "Denmark"
    },
    price: {
      amount: 1050,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the beauty of Odense with our Harbor hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "university-guest-house",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: [
      "/images/hotels/hotel-5.jpg"
    ],
    name: "University Guest House",
    location: {
      city: "Odense",
      country: "Denmark"
    },
    price: {
      amount: 900,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Experience the convenience of Odense with our University Guest House hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "odense-central-station-hotel",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: [
      "/images/hotels/hotel-9.jpg"
    ],
    name: "Odense Central Station Hotel",
    location: {
      city: "Odense",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the convenience of Odense with our Central Station hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "sankt-knuds-hotel",
    imageUrl: "/images/hotels/hotel-11.jpg",
    images: [
      "/images/hotels/hotel-11.jpg"
    ],
    name: "Sankt Knuds Hotel",
    location: {
      city: "Odense",
      country: "Denmark"
    },
    price: {
      amount: 1250,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the charm of Odense with our Sankt Knuds hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },

  // Aalborg Area (10 hotels)
  {
    id: "aalborg-tower-hotel",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: [
      "/images/hotels/hotel-4.jpg"
    ],
    name: "Aalborg Tower Hotel",
    location: {
      city: "Aalborg",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the view of Aalborg with our Tower hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "lindholm-høje-hotel",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: [
      "/images/hotels/hotel-8.jpg"
    ],
    name: "Lindholm Høje Hotel",
    location: {
      city: "Aalborg",
      country: "Denmark"
    },
    price: {
      amount: 1050,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the view of Aalborg with our Lindholm Høje hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "aalborg-fjord-hotel",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: [
      "/images/hotels/hotel-2.jpg"
    ],
    name: "Aalborg Fjord Hotel",
    location: {
      city: "Aalborg",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the beauty of Aalborg with our Fjord hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "park-hotel-aalborg",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: [
      "/images/hotels/hotel-6.jpg"
    ],
    name: "Park Hotel Aalborg",
    location: {
      city: "Aalborg",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the beauty of Aalborg with our Park hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "city-center-lodge",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: [
      "/images/hotels/hotel-1.jpg"
    ],
    name: "City Center Lodge",
    location: {
      city: "Aalborg",
      country: "Denmark"
    },
    price: {
      amount: 950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Experience the convenience of Aalborg with our City Center lodge. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "jens-bangs-hotel",
    imageUrl: "/images/hotels/hotel-10.jpg",
    images: [
      "/images/hotels/hotel-10.jpg"
    ],
    name: "Jens Bangs Hotel",
    location: {
      city: "Aalborg",
      country: "Denmark"
    },
    price: {
      amount: 1300,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the charm of Aalborg with our Jens Bangs hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "kunsten-art-hotel",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: [
      "/images/hotels/hotel-3.jpg"
    ],
    name: "Kunsten Art Hotel",
    location: {
      city: "Aalborg",
      country: "Denmark"
    },
    price: {
      amount: 1250,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the art of Aalborg with our Kunsten Art hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "aalborg-marina-hotel",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: [
      "/images/hotels/hotel-7.jpg"
    ],
    name: "Aalborg Marina Hotel",
    location: {
      city: "Aalborg",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the beauty of Aalborg with our Marina hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "utzon-center-hotel",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: [
      "/images/hotels/hotel-5.jpg"
    ],
    name: "Utzon Center Hotel",
    location: {
      city: "Aalborg",
      country: "Denmark"
    },
    price: {
      amount: 1400,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8,
    description: "Experience the design of Aalborg with our Utzon Center hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "nordkraft-urban-hotel",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: [
      "/images/hotels/hotel-9.jpg"
    ],
    name: "Nordkraft Urban Hotel",
    location: {
      city: "Aalborg",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the convenience of Aalborg with our Nordkraft Urban hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },

  // Esbjerg Area (8 hotels)
  {
    id: "esbjerg-strand-hotel",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: [
      "/images/hotels/hotel-4.jpg"
    ],
    name: "Esbjerg Strand Hotel",
    location: {
      city: "Esbjerg",
      country: "Denmark"
    },
    price: {
      amount: 950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the beauty of Esbjerg with our Strand hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "maritime-hotel",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: [
      "/images/hotels/hotel-8.jpg"
    ],
    name: "Maritime Hotel",
    location: {
      city: "Esbjerg",
      country: "Denmark"
    },
    price: {
      amount: 1050,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the beauty of Esbjerg with our Maritime hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "fisherman's-wharf-inn",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: [
      "/images/hotels/hotel-2.jpg"
    ],
    name: "Fisherman's Wharf Inn",
    location: {
      city: "Esbjerg",
      country: "Denmark"
    },
    price: {
      amount: 900,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Experience the charm of Esbjerg with our Fisherman's Wharf Inn hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "port-tower-hotel",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: [
      "/images/hotels/hotel-6.jpg"
    ],
    name: "Port Tower Hotel",
    location: {
      city: "Esbjerg",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the view of Esbjerg with our Port Tower hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "men-at-sea-hotel",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: [
      "/images/hotels/hotel-1.jpg"
    ],
    name: "Men at Sea Hotel",
    location: {
      city: "Esbjerg",
      country: "Denmark"
    },
    price: {
      amount: 1000,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the view of Esbjerg with our Men at Sea hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "esbjerg-city-hotel",
    imageUrl: "/images/hotels/hotel-10.jpg",
    images: [
      "/images/hotels/hotel-10.jpg"
    ],
    name: "Esbjerg City Hotel",
    location: {
      city: "Esbjerg",
      country: "Denmark"
    },
    price: {
      amount: 950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Experience the convenience of Esbjerg with our City hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "dock-hotel-esbjerg",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: [
      "/images/hotels/hotel-3.jpg"
    ],
    name: "Dock Hotel Esbjerg",
    location: {
      city: "Esbjerg",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the convenience of Esbjerg with our Dock hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "north-sea-hotel",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: [
      "/images/hotels/hotel-7.jpg"
    ],
    name: "North Sea Hotel",
    location: {
      city: "Esbjerg",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the view of Esbjerg with our North Sea hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },

  // Roskilde Area (8 hotels)
  {
    id: "viking-hotel-roskilde",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: [
      "/images/hotels/hotel-5.jpg"
    ],
    name: "Viking Hotel Roskilde",
    location: {
      city: "Roskilde",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the charm of Roskilde with our Viking hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "cathedral-view-hotel",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: [
      "/images/hotels/hotel-9.jpg"
    ],
    name: "Cathedral View Hotel",
    location: {
      city: "Roskilde",
      country: "Denmark"
    },
    price: {
      amount: 1250,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the view of Roskilde with our Cathedral View hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "roskilde-fjord-hotel",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: [
      "/images/hotels/hotel-2.jpg"
    ],
    name: "Roskilde Fjord Hotel",
    location: {
      city: "Roskilde",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the beauty of Roskilde with our Fjord hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "festival-hotel-roskilde",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: [
      "/images/hotels/hotel-7.jpg"
    ],
    name: "Festival Hotel Roskilde",
    location: {
      city: "Roskilde",
      country: "Denmark"
    },
    price: {
      amount: 1050,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the charm of Roskilde with our Festival hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "historic-roskilde-inn",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: [
      "/images/hotels/hotel-4.jpg"
    ],
    name: "Historic Roskilde Inn",
    location: {
      city: "Roskilde",
      country: "Denmark"
    },
    price: {
      amount: 950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Experience the history of Roskilde with our Historic Inn hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "royal-roskilde-hotel",
    imageUrl: "/images/hotels/hotel-11.jpg",
    images: [
      "/images/hotels/hotel-11.jpg"
    ],
    name: "Royal Roskilde Hotel",
    location: {
      city: "Roskilde",
      country: "Denmark"
    },
    price: {
      amount: 1300,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the grandeur of Roskilde with our Royal hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "museum-view-hotel",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: [
      "/images/hotels/hotel-6.jpg"
    ],
    name: "Museum View Hotel",
    location: {
      city: "Roskilde",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the view of Roskilde with our Museum View hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "city-square-hotel",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: [
      "/images/hotels/hotel-1.jpg"
    ],
    name: "City Square Hotel",
    location: {
      city: "Roskilde",
      country: "Denmark"
    },
    price: {
      amount: 1000,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the convenience of Roskilde with our City Square hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },

  // Helsingør Area (8 hotels)
  {
    id: "kronborg-castle-hotel",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: [
      "/images/hotels/hotel-8.jpg"
    ],
    name: "Kronborg Castle Hotel",
    location: {
      city: "Helsingør",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the history of Helsingør with our Kronborg Castle hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "maritime-hotel-helsingør",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: [
      "/images/hotels/hotel-3.jpg"
    ],
    name: "Maritime Hotel Helsingør",
    location: {
      city: "Helsingør",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the view of Helsingør with our Maritime hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "sound-view-hotel",
    imageUrl: "/images/hotels/hotel-10.jpg",
    images: [
      "/images/hotels/hotel-10.jpg"
    ],
    name: "Sound View Hotel",
    location: {
      city: "Helsingør",
      country: "Denmark"
    },
    price: {
      amount: 1300,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the view of Helsingør with our Sound View hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "hamlet's-rest",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: [
      "/images/hotels/hotel-5.jpg"
    ],
    name: "Hamlet's Rest",
    location: {
      city: "Helsingør",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the charm of Helsingør with our Hamlet's Rest hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "royal-north-hotel",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: [
      "/images/hotels/hotel-2.jpg"
    ],
    name: "Royal North Hotel",
    location: {
      city: "Helsingør",
      country: "Denmark"
    },
    price: {
      amount: 1250,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the grandeur of Helsingør with our Royal North hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "harbor-view-inn",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: [
      "/images/hotels/hotel-7.jpg"
    ],
    name: "Harbor View Inn",
    location: {
      city: "Helsingør",
      country: "Denmark"
    },
    price: {
      amount: 1050,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the view of Helsingør with our Harbor View Inn hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "culture-harbor-hotel",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: [
      "/images/hotels/hotel-4.jpg"
    ],
    name: "Culture Harbor Hotel",
    location: {
      city: "Helsingør",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the view of Helsingør with our Culture Harbor hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "city-gate-hotel",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: [
      "/images/hotels/hotel-9.jpg"
    ],
    name: "City Gate Hotel",
    location: {
      city: "Helsingør",
      country: "Denmark"
    },
    price: {
      amount: 1000,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Experience the convenience of Helsingør with our City Gate hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },

  // Kolding Area (7 hotels)
  {
    id: "koldinghus-hotel",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: [
      "/images/hotels/hotel-6.jpg"
    ],
    name: "Koldinghus Hotel",
    location: {
      city: "Kolding",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the charm of Kolding with our Koldinghus hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "design-city-hotel",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: [
      "/images/hotels/hotel-1.jpg"
    ],
    name: "Design City Hotel",
    location: {
      city: "Kolding",
      country: "Denmark"
    },
    price: {
      amount: 1050,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the design of Kolding with our Design City hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "fjord-view-kolding",
    imageUrl: "/images/hotels/hotel-11.jpg",
    images: [
      "/images/hotels/hotel-11.jpg"
    ],
    name: "Fjord View Kolding",
    location: {
      city: "Kolding",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the view of Kolding with our Fjord View hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "business-hotel-kolding",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: [
      "/images/hotels/hotel-3.jpg"
    ],
    name: "Business Hotel Kolding",
    location: {
      city: "Kolding",
      country: "Denmark"
    },
    price: {
      amount: 950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Experience the convenience of Kolding with our Business hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "marina-hotel-kolding",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: [
      "/images/hotels/hotel-8.jpg"
    ],
    name: "Marina Hotel Kolding",
    location: {
      city: "Kolding",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the view of Kolding with our Marina hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "city-park-hotel",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: [
      "/images/hotels/hotel-5.jpg"
    ],
    name: "City Park Hotel",
    location: {
      city: "Kolding",
      country: "Denmark"
    },
    price: {
      amount: 1000,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the beauty of Kolding with our City Park hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "trapholt-view-hotel",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: [
      "/images/hotels/hotel-2.jpg"
    ],
    name: "Trapholt View Hotel",
    location: {
      city: "Kolding",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the view of Kolding with our Trapholt View hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },

  // Vejle Area (7 hotels)
  {
    id: "vejle-fjord-hotel",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: [
      "/images/hotels/hotel-7.jpg"
    ],
    name: "Vejle Fjord Hotel",
    location: {
      city: "Vejle",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the view of Vejle with our Fjord hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "munkebjerg-hotel",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: [
      "/images/hotels/hotel-4.jpg"
    ],
    name: "Munkebjerg Hotel",
    location: {
      city: "Vejle",
      country: "Denmark"
    },
    price: {
      amount: 1350,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the view of Vejle with our Munkebjerg hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "city-hotel-vejle",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: [
      "/images/hotels/hotel-9.jpg"
    ],
    name: "City Hotel Vejle",
    location: {
      city: "Vejle",
      country: "Denmark"
    },
    price: {
      amount: 950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the convenience of Vejle with our City hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "haraldskær-manor",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: [
      "/images/hotels/hotel-2.jpg"
    ],
    name: "Haraldskær Manor",
    location: {
      city: "Vejle",
      country: "Denmark"
    },
    price: {
      amount: 1500,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8,
    description: "Experience the view of Vejle with our Haraldskær Manor hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "wave-hotel",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: [
      "/images/hotels/hotel-6.jpg"
    ],
    name: "Wave Hotel",
    location: {
      city: "Vejle",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the view of Vejle with our Wave hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "vejle-center-hotel",
    imageUrl: "/images/hotels/hotel-11.jpg",
    images: [
      "/images/hotels/hotel-11.jpg"
    ],
    name: "Vejle Center Hotel",
    location: {
      city: "Vejle",
      country: "Denmark"
    },
    price: {
      amount: 1000,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Experience the convenience of Vejle with our Center hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "marina-view-hotel",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: [
      "/images/hotels/hotel-3.jpg"
    ],
    name: "Marina View Hotel",
    location: {
      city: "Vejle",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the view of Vejle with our Marina View hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },

  // Horsens Area (6 hotels)
  {
    id: "horsens-city-hotel",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: [
      "/images/hotels/hotel-8.jpg"
    ],
    name: "Horsens City Hotel",
    location: {
      city: "Horsens",
      country: "Denmark"
    },
    price: {
      amount: 950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the convenience of Horsens with our City hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "prison-hotel",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: [
      "/images/hotels/hotel-1.jpg"
    ],
    name: "Prison Hotel",
    location: {
      city: "Horsens",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the view of Horsens with our Prison hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "vitus-bering-hotel",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: [
      "/images/hotels/hotel-5.jpg"
    ],
    name: "Vitus Bering Hotel",
    location: {
      city: "Horsens",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the view of Horsens with our Vitus Bering hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "harbor-view-horsens",
    imageUrl: "/images/hotels/hotel-10.jpg",
    images: [
      "/images/hotels/hotel-10.jpg"
    ],
    name: "Harbor View Horsens",
    location: {
      city: "Horsens",
      country: "Denmark"
    },
    price: {
      amount: 1050,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the view of Horsens with our Harbor View hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "forum-hotel",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: [
      "/images/hotels/hotel-7.jpg"
    ],
    name: "Forum Hotel",
    location: {
      city: "Horsens",
      country: "Denmark"
    },
    price: {
      amount: 900,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Experience the convenience of Horsens with our Forum hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "central-station-hotel",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: [
      "/images/hotels/hotel-4.jpg"
    ],
    name: "Central Station Hotel",
    location: {
      city: "Horsens",
      country: "Denmark"
    },
    price: {
      amount: 950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the convenience of Horsens with our Central Station hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },

  // Randers Area (4 hotels)
  {
    id: "randers-hotel",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: [
      "/images/hotels/hotel-6.jpg"
    ],
    name: "Randers Hotel",
    location: {
      city: "Randers",
      country: "Denmark"
    },
    price: {
      amount: 900,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Experience the charm of Randers with our Randers hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "graceland-randers-hotel",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: [
      "/images/hotels/hotel-2.jpg"
    ],
    name: "Graceland Randers Hotel",
    location: {
      city: "Randers",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the view of Randers with our Graceland hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "river-view-inn",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: [
      "/images/hotels/hotel-9.jpg"
    ],
    name: "River View Inn",
    location: {
      city: "Randers",
      country: "Denmark"
    },
    price: {
      amount: 950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Experience the view of Randers with our River View Inn hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "city-heart-hotel",
    imageUrl: "/images/hotels/hotel-11.jpg",
    images: [
      "/images/hotels/hotel-11.jpg"
    ],
    name: "City Heart Hotel",
    location: {
      city: "Randers",
      country: "Denmark"
    },
    price: {
      amount: 1000,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the convenience of Randers with our City Heart hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },

  // Silkeborg Area (4 hotels)
  {
    id: "silkeborg-hotel",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: [
      "/images/hotels/hotel-3.jpg"
    ],
    name: "Silkeborg Hotel",
    location: {
      city: "Silkeborg",
      country: "Denmark"
    },
    price: {
      amount: 1100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Experience the convenience of Silkeborg with our Silkeborg hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "lake-view-hotel",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: [
      "/images/hotels/hotel-8.jpg"
    ],
    name: "Lake View Hotel",
    location: {
      city: "Silkeborg",
      country: "Denmark"
    },
    price: {
      amount: 1200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Experience the view of Silkeborg with our Lake View hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "aqua-hotel",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: [
      "/images/hotels/hotel-5.jpg"
    ],
    name: "Aqua Hotel",
    location: {
      city: "Silkeborg",
      country: "Denmark"
    },
    price: {
      amount: 1050,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Experience the view of Silkeborg with our Aqua hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  },
  {
    id: "forest-hotel-silkeborg",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: [
      "/images/hotels/hotel-1.jpg"
    ],
    name: "Forest Hotel Silkeborg",
    location: {
      city: "Silkeborg",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Experience the view of Silkeborg with our Forest hotel. Perfect for both business and leisure travelers.",
    amenities: [
      "Free Wi-Fi",
      "Spa & Wellness Center",
      "24/7 Room Service",
      "Restaurant & Bar",
      "Fitness Center",
      "Conference Rooms",
      "Indoor Pool",
      "Parking"
    ]
  }
]; 