// import { hotels, type Hotel } from "@/data/hotels";

export type Hotel = {
  id: string;
  imageUrl: string;
  images: string[];
  name: string;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  price: {
    amount: number;
    currency: string;
    per: string;
  };
  rating: number;
  description: string;
  amenities: string[];
  highlights?: string[];
  rooms: {
    name: string;
    description: string;
    size: string;
    occupancy: string;
    amenities: string[];
    imageUrl: string;
  }[];
  bookingUrl: string;
  reviews: number;
};

const standardRooms = [
  {
    name: "Standard Single Room",
    description: "Standard single room with modern amenities",
    size: "25m²",
    occupancy: "2 adults",
    amenities: ["Free Wi-Fi", "Air Conditioning", "TV"],
    imageUrl: "/images/hotels/Superior_Single_Room.jpg",
  },
  {
    name: "Suite",
    description: "Comfortable suite with modern amenities",
    size: "35m²",
    occupancy: "2 adults",
    amenities: ["Free Wi-Fi", "Air Conditioning", "TV", "Breakfast"],
    imageUrl: "/images/hotels/Suite.jpg",
  },
  {
    name: "Superior Double Room",
    description: "Comfortable room with modern amenities",
    size: "30m²",
    occupancy: "2 adults",
    amenities: ["Free Wi-Fi", "Air Conditioning", "TV", "Breakfast", "Spa"],
    imageUrl: "/images/hotels/Superior_Double_Room.jpg",
  },
  {
    name: "Family Room",
    description: "Comfortable room with modern amenities",
    size: "50m²",
    occupancy: "2 adults, 2 children",
    amenities: ["Free Wi-Fi", "Air Conditioning", "TV", "Breakfast"],
    imageUrl: "/images/hotels/Family_Room.jpg",
  },
  {
    name: "Penthouse Suite",
    description: "Comfortable room with modern amenities",
    size: "50m²",
    occupancy: "2 adults",
    amenities: ["Free Wi-Fi", "Air Conditioning", "TV", "Breakfast", "Spa"],
    imageUrl: "/images/hotels/Penthouse_Suite.jpg",
  }
];

export const HOTEL_AMENITIES = {
  WIFI: "Free Wi-Fi",
  TV: "TV",
  BREAKFAST: "Breakfast",
  RESTAURANT: "Restaurant",
  PARKING: "Parking",
  BAR: "Bar",
  FITNESS: "Fitness Center",
  SAUNA: "Sauna",
  BIKE_RENTAL: "Bike Rental",
  ROOM_SERVICE: "Room Service",
  AIR_CONDITIONING: "Air Conditioning",
  CITY_VIEW: "City View"
} as const;

export type HotelAmenity = typeof HOTEL_AMENITIES[keyof typeof HOTEL_AMENITIES];

// Helper function to get random amenities
const getRandomAmenities = () => {
  const amenitiesArray = Object.values(HOTEL_AMENITIES);
  const numberOfAmenities = 4 + Math.floor(Math.random() * 4); // Random 4-7 amenities
  const shuffled = [...amenitiesArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfAmenities);
};

export const hotels: Hotel[] = [
  // Copenhagen Inner City (K)
  {
    id: "sp34-hotel",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: [
            "/images/hotels/hotel-1.jpg",
            "/images/hotels/hotel-13.jpg",
            "/images/hotels/hotel-14.jpg",
              "/images/hotels/hotel-15.jpg",
              "/images/hotels/hotel-16.jpg"
            ],
    name: "Hotel SP34 - By Brøchner Hotels",
    location: {
      address: "Bernstorffsgade 5",
      city: "København K",
      country: "Denmark",
      coordinates: {
        latitude: 55.6731,
        longitude: 12.5683
      }
    },
    price: {
      amount: 1750,
      currency: "DKK",
      per: "night"
    },
    rating: 4.9,
    description: "Hotel SP34 is Brøchner Hotels' exclusive 4+ star boutique hotel in Copenhagen's trendy Latin Quarter. " +
    "Located in three connecting townhouses, each with its own distinct architecture and character, the hotel offers an authentic Copenhagen experience.\n\n" +
    "The hotel features 118 unique rooms and suites, furnished with tailormade pieces and unique Danish designs. All rooms have soft, welcoming light. " +
    "Additional amenities include 3 restaurants, 4 bars, a cosy urban terrace, conference facilities, and an exclusive 24-seat private cinema.\n\n" +
    "Start your day with a delicious organic breakfast buffet, featuring freshly baked bread, cereals, yoghurt with homemade toppings, fruits, and juices. " +
    "With its unique design and custom-made interior, Hotel SP34 is the perfect choice for design enthusiasts seeking a distinctive experience.",
    amenities: [
      HOTEL_AMENITIES.RESTAURANT,
      HOTEL_AMENITIES.BAR,
      HOTEL_AMENITIES.FITNESS,
      HOTEL_AMENITIES.PARKING,
      HOTEL_AMENITIES.WIFI,
      HOTEL_AMENITIES.AIR_CONDITIONING,
      HOTEL_AMENITIES.CITY_VIEW,
      HOTEL_AMENITIES.BREAKFAST,
      HOTEL_AMENITIES.ROOM_SERVICE,
      HOTEL_AMENITIES.SAUNA,
      HOTEL_AMENITIES.BIKE_RENTAL,
    ],
    rooms: standardRooms,
    bookingUrl: "https://booking.brochner-hotels.dk/booking?siteid=1491&checkin=25-02-2025&nights=1&adults0=2&hotelsel=hotelsp34&lng=da&bsid=40687981",
    reviews: 128,
  },
  {
    id: "hotel-sanders",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: ["/images/hotels/hotel-2.jpg"],
    name: "Hotel Sanders",
    location: {
      address: "Tordenskjoldsgade 15",
      city: "København K",
      country: "Denmark",
      coordinates: {
        latitude: 55.6794,
        longitude: 12.5875
      }
    },
    price: {
      amount: 3800,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8,
    description: "Intimate luxury hotel with theatrical flair in the heart of Copenhagen.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Vesterbro
  {
    id: "andersen-boutique",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: ["/images/hotels/hotel-3.jpg"],
    name: "Andersen Boutique Hotel",
    location: {
      address: "Helgolandsgade 12",
      city: "København V",
      country: "Denmark",
      coordinates: {
        latitude: 55.6721,
        longitude: 12.5577
      }
    },
    price: {
      amount: 1650,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Colorful boutique hotel in vibrant Vesterbro district.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Nørrebro
  {
    id: "babette-guldsmeden",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: ["/images/hotels/hotel-4.jpg"],
    name: "Babette Guldsmeden",
    location: {
      address: "Bredgade 78",
      city: "København K",
      country: "Denmark",
      coordinates: {
        latitude: 55.6847,
        longitude: 12.5891
      }
    },
    price: {
      amount: 1450,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Eco-friendly hotel with Balinese-inspired decor.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Østerbro
  {
    id: "adina-apartments",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: ["/images/hotels/hotel-5.jpg"],
    name: "Adina Apartment Hotel",
    location: {
      address: "Amerika Plads 7",
      city: "København Ø",
      country: "Denmark",
      coordinates: {
        latitude: 55.6969,
        longitude: 12.5953
      }
    },
    price: {
      amount: 1750,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Modern apartment hotel near the Little Mermaid statue.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Frederiksberg
  {
    id: "scandic-falkoner",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: ["/images/hotels/hotel-6.jpg"],
    name: "Scandic Falkoner",
    location: {
      address: "Falkoner Allé 9",
      city: "Frederiksberg",
      country: "Denmark",
      coordinates: {
        latitude: 55.6789,
        longitude: 12.5340
      }
    },
    price: {
      amount: 1550,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Newly renovated hotel in the heart of Frederiksberg.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Aarhus Center
  {
    id: "hotel-royal-aarhus",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: ["/images/hotels/hotel-7.jpg"],
    name: "Hotel Royal Aarhus",
    location: {
      address: "Store Torv 4",
      city: "Aarhus C",
      country: "Denmark",
      coordinates: {
        latitude: 56.1572,
        longitude: 10.2107
      }
    },
    price: {
      amount: 2100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Historic hotel in the heart of Aarhus, close to ARoS Art Museum.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Aalborg
  {
    id: "comwell-hvide-hus",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: ["/images/hotels/hotel-8.jpg"],
    name: "Comwell Hvide Hus",
    location: {
      address: "Vesterbro 2",
      city: "Aalborg",
      country: "Denmark",
      coordinates: {
        latitude: 57.0488,
        longitude: 9.9217
      }
    },
    price: {
      amount: 1450,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Modern high-rise hotel with panoramic views of Aalborg.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Odense
  {
    id: "first-hotel-grand",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: ["/images/hotels/hotel-9.jpg"],
    name: "First Hotel Grand",
    location: {
      address: "Jernbanegade 18",
      city: "Odense C",
      country: "Denmark",
      coordinates: {
        latitude: 55.4038,
        longitude: 10.3886
      }
    },
    price: {
      amount: 1350,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Classic hotel near Hans Christian Andersen Museum.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Helsingør
  {
    id: "marienlyst-beach",
    imageUrl: "/images/hotels/hotel-10.jpg",
    images: ["/images/hotels/hotel-10.jpg"],
    name: "Marienlyst Beach Resort",
    location: {
      address: "Ndr Strandvej 2",
      city: "Helsingør",
      country: "Denmark",
      coordinates: {
        latitude: 56.0394,
        longitude: 12.6163
      }
    },
    price: {
      amount: 2300,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8,
    description: "Luxury beach resort with views of Sweden and Kronborg Castle.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Roskilde
  {
    id: "zleep-hotel-roskilde",
    imageUrl: "/images/hotels/hotel-11.jpg",
    images: ["/images/hotels/hotel-11.jpg"],
    name: "Zleep Hotel Roskilde",
    location: {
      address: "Københavnsvej 65",
      city: "Roskilde",
      country: "Denmark",
      coordinates: {
        latitude: 55.6417,
        longitude: 12.0803
      }
    },
    price: {
      amount: 1250,
      currency: "DKK",
      per: "night"
    },
    rating: 4.1,
    description: "Modern hotel near Roskilde Cathedral and Viking Ship Museum.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Esbjerg
  {
    id: "hotel-britannia",
    imageUrl: "/images/hotels/hotel-12.jpg",
    images: ["/images/hotels/hotel-12.jpg"],
    name: "Hotel Britannia",
    location: {
      address: "Torvegade 24",
      city: "Esbjerg",
      country: "Denmark",
      coordinates: {
        latitude: 55.4668,
        longitude: 8.4519
      }
    },
    price: {
      amount: 1450,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Historic hotel in the heart of Esbjerg's maritime district.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Kolding
  {
    id: "hotel-koldingfjord",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: ["/images/hotels/hotel-1.jpg"],
    name: "Hotel Koldingfjord",
    location: {
      address: "Fjordvej 154",
      city: "Kolding",
      country: "Denmark",
      coordinates: {
        latitude: 55.5043,
        longitude: 9.4797
      }
    },
    price: {
      amount: 1850,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Scenic hotel overlooking Kolding Fjord, set in historic surroundings.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Vejle
  {
    id: "munkebjerg-hotel",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: ["/images/hotels/hotel-2.jpg"],
    name: "Munkebjerg Hotel",
    location: {
      address: "Munkebjergvej 125",
      city: "Vejle",
      country: "Denmark",
      coordinates: {
        latitude: 55.6867,
        longitude: 9.5793
      }
    },
    price: {
      amount: 1650,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Forest hotel with panoramic views of Vejle Fjord.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Silkeborg
  {
    id: "radisson-blu-papirfabrikken",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: ["/images/hotels/hotel-3.jpg"],
    name: "Radisson Blu Papirfabrikken",
    location: {
      address: "Papirfabrikken 12",
      city: "Silkeborg",
      country: "Denmark",
      coordinates: {
        latitude: 56.1697,
        longitude: 9.5469
      }
    },
    price: {
      amount: 1550,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Contemporary hotel in historic paper mill by Silkeborg's lakes.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Horsens
  {
    id: "scandic-bygholm-park",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: ["/images/hotels/hotel-4.jpg"],
    name: "Scandic Bygholm Park",
    location: {
      address: "Schüttesvej 6",
      city: "Horsens",
      country: "Denmark",
      coordinates: {
        latitude: 55.8581,
        longitude: 9.8480
      }
    },
    price: {
      amount: 1350,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Elegant hotel set in beautiful Bygholm Park.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Nyhavn
  {
    id: "copenhagen-strand",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: ["/images/hotels/hotel-5.jpg"],
    name: "Copenhagen Strand",
    location: {
      address: "Havnegade 37",
      city: "København K",
      country: "Denmark",
      coordinates: {
        latitude: 55.6778,
        longitude: 12.5953
      }
    },
    price: {
      amount: 1950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Maritime-themed hotel in historic warehouse along Copenhagen's waterfront.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Islands Brygge
  {
    id: "stay-copenhagen",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: ["/images/hotels/hotel-6.jpg"],
    name: "STAY Copenhagen",
    location: {
      address: "Islands Brygge 79A",
      city: "København S",
      country: "Denmark",
      coordinates: {
        latitude: 55.6561,
        longitude: 12.5789
      }
    },
    price: {
      amount: 1850,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Modern apartment hotel with harbor views and minimalist Nordic design.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Christianshavn
  {
    id: "canal-house",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: ["/images/hotels/hotel-7.jpg"],
    name: "Copenhagen Canal House",
    location: {
      address: "Overgaden Oven Vandet 48",
      city: "København K",
      country: "Denmark",
      coordinates: {
        latitude: 55.6725,
        longitude: 12.5883
      }
    },
    price: {
      amount: 2200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Boutique hotel in historic canal house with authentic Danish charm.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Frederiksstaden
  {
    id: "phoenix-copenhagen",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: ["/images/hotels/hotel-8.jpg"],
    name: "Phoenix Copenhagen",
    location: {
      address: "Bredgade 37",
      city: "København K",
      country: "Denmark",
      coordinates: {
        latitude: 55.6841,
        longitude: 12.5872
      }
    },
    price: {
      amount: 2400,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Elegant hotel in historic building near Amalienborg Palace.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Sydhavnen
  {
    id: "scandic-sydhavnen",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: ["/images/hotels/hotel-9.jpg"],
    name: "Scandic Sydhavnen",
    location: {
      address: "Sydhavns Plads 15",
      city: "København SV",
      country: "Denmark",
      coordinates: {
        latitude: 55.6498,
        longitude: 12.5397
      }
    },
    price: {
      amount: 1350,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Modern business hotel with easy access to city center and airport.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Amager Øst
  {
    id: "copenhagen-go",
    imageUrl: "/images/hotels/hotel-10.jpg",
    images: ["/images/hotels/hotel-10.jpg"],
    name: "Copenhagen GO Hotel",
    location: {
      address: "Gemmas Allé 203",
      city: "København S",
      country: "Denmark",
      coordinates: {
        latitude: 55.6508,
        longitude: 12.6205
      }
    },
    price: {
      amount: 995,
      currency: "DKK",
      per: "night"
    },
    rating: 4.0,
    description: "Budget-friendly hotel near metro with modern amenities.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Østerbro
  {
    id: "charlottehaven",
    imageUrl: "/images/hotels/hotel-11.jpg",
    images: ["/images/hotels/hotel-11.jpg"],
    name: "Charlottehaven",
    location: {
      address: "Hjørringgade 12C",
      city: "København Ø",
      country: "Denmark",
      coordinates: {
        latitude: 55.7089,
        longitude: 12.5847
      }
    },
    price: {
      amount: 2100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Modern apartment hotel with extensive wellness facilities.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Refshaleøen
  {
    id: "copenhagen-house",
    imageUrl: "/images/hotels/hotel-12.jpg",
    images: ["/images/hotels/hotel-12.jpg"],
    name: "Copenhagen House",
    location: {
      address: "Refshalevej 163A",
      city: "København K",
      country: "Denmark",
      coordinates: {
        latitude: 55.6897,
        longitude: 12.6136
      }
    },
    price: {
      amount: 1890,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Industrial-chic hotel in Copenhagen's creative district.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Nørrebro
  {
    id: "manon-les-suites",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: ["/images/hotels/hotel-1.jpg"],
    name: "Manon Les Suites",
    location: {
      address: "Gyldenløvesgade 19",
      city: "København N",
      country: "Denmark",
      coordinates: {
        latitude: 55.6827,
        longitude: 12.5617
      }
    },
    price: {
      amount: 2400,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Tropical-inspired suite hotel with stunning rooftop pool.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Vesterbro
  {
    id: "axel-guldsmeden",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: ["/images/hotels/hotel-2.jpg"],
    name: "Axel Guldsmeden",
    location: {
      address: "Helgolandsgade 11",
      city: "København V",
      country: "Denmark",
      coordinates: {
        latitude: 55.6719,
        longitude: 12.5576
      }
    },
    price: {
      amount: 1650,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Eco-conscious boutique hotel with Balinese-inspired design.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Frederiksberg
  {
    id: "frederiksberg-palace",
    imageUrl: "/images/hotels/hotel-3.jpg",
    images: ["/images/hotels/hotel-3.jpg"],
    name: "Frederiksberg Palace Hotel",
    location: {
      address: "Smallegade 4",
      city: "Frederiksberg",
      country: "Denmark",
      coordinates: {
        latitude: 55.6789,
        longitude: 12.5340
      }
    },
    price: {
      amount: 2800,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Elegant hotel in a restored palace building with garden views.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Amager Strand
  {
    id: "nordic-park",
    imageUrl: "/images/hotels/hotel-4.jpg",
    images: ["/images/hotels/hotel-4.jpg"],
    name: "Nordic Park Hotel",
    location: {
      address: "Amager Strandvej 401",
      city: "København S",
      country: "Denmark",
      coordinates: {
        latitude: 55.6503,
        longitude: 12.6462
      }
    },
    price: {
      amount: 1450,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Beachfront hotel with views of Øresund strait.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Ørestad
  {
    id: "ac-bella-sky",
    imageUrl: "/images/hotels/hotel-5.jpg",
    images: ["/images/hotels/hotel-5.jpg"],
    name: "AC Bella Sky",
    location: {
      address: "Center Boulevard 5",
      city: "København S",
      country: "Denmark",
      coordinates: {
        latitude: 55.6372,
        longitude: 12.5716
      }
    },
    price: {
      amount: 1950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Modern architectural landmark with stunning city views.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Valby
  {
    id: "valby-park",
    imageUrl: "/images/hotels/hotel-6.jpg",
    images: ["/images/hotels/hotel-6.jpg"],
    name: "Valby Park Hotel",
    location: {
      address: "Valby Langgade 70",
      city: "København V",
      country: "Denmark",
      coordinates: {
        latitude: 55.6665,
        longitude: 12.5142
      }
    },
    price: {
      amount: 1350,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Charming hotel in quiet residential area near Valby Park.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Kastrup
  {
    id: "quality-airport",
    imageUrl: "/images/hotels/hotel-7.jpg",
    images: ["/images/hotels/hotel-7.jpg"],
    name: "Quality Airport Hotel",
    location: {
      address: "Lufthavnsboulevarden 2",
      city: "Kastrup",
      country: "Denmark",
      coordinates: {
        latitude: 55.6276,
        longitude: 12.6498
      }
    },
    price: {
      amount: 1250,
      currency: "DKK",
      per: "night"
    },
    rating: 4.1,
    description: "Convenient airport hotel with 24-hour shuttle service.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Brønshøj
  {
    id: "bella-vista",
    imageUrl: "/images/hotels/hotel-8.jpg",
    images: ["/images/hotels/hotel-8.jpg"],
    name: "Bella Vista Hotel",
    location: {
      address: "Frederikssundsvej 184",
      city: "København NV",
      country: "Denmark",
      coordinates: {
        latitude: 55.7052,
        longitude: 12.4989
      }
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.0,
    description: "Comfortable hotel in peaceful suburban setting.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Nordhavn
  {
    id: "the-silo",
    imageUrl: "/images/hotels/hotel-9.jpg",
    images: ["/images/hotels/hotel-9.jpg"],
    name: "The Silo",
    location: {
      address: "Helsinkigade 29",
      city: "København Ø",
      country: "Denmark",
      coordinates: {
        latitude: 55.7057,
        longitude: 12.5983
      }
    },
    price: {
      amount: 3200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8,
    description: "Luxury hotel in converted grain silo with stunning harbor views.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  },

  // Copenhagen - Carlsberg City
  {
    id: "hotel-ottilia",
    imageUrl: "/images/hotels/hotel-10.jpg",
    images: ["/images/hotels/hotel-10.jpg"],
    name: "Hotel Ottilia",
    location: {
      address: "Bryggernes Plads 7",
      city: "København V",
      country: "Denmark",
      coordinates: {
        latitude: 55.6673,
        longitude: 12.5305
      }
    },
    price: {
      amount: 1750,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Boutique hotel in historic Carlsberg Brewery buildings.",
    amenities: getRandomAmenities(),
    rooms: standardRooms,
    bookingUrl: "https://example.com/book",
    reviews: Math.floor(Math.random() * 200) + 50,
  }
].map(hotel => ({
  ...hotel,
  rooms: hotel.rooms || standardRooms,
  reviews: hotel.reviews || Math.floor(Math.random() * 200) + 50
})); 