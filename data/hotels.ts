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
  // Copenhagen Inner City (K)
  {
    id: "nimb-hotel",
    imageUrl: "/images/hotels/hotel-1.jpg",
    images: ["/images/hotels/hotel-1.jpg"],
    name: "Nimb Hotel",
    location: {
      address: "Bernstorffsgade 5",
      city: "København K",
      country: "Denmark"
    },
    price: {
      amount: 4200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.9,
    description: "Luxury boutique hotel in Tivoli Gardens with unique Moorish architecture.",
    amenities: ["Michelin Restaurant", "Bar", "Spa", "Fitness Center", "Concierge", "Free Wi-Fi"]
  },
  {
    id: "hotel-sanders",
    imageUrl: "/images/hotels/hotel-2.jpg",
    images: ["/images/hotels/hotel-2.jpg"],
    name: "Hotel Sanders",
    location: {
      address: "Tordenskjoldsgade 15",
      city: "København K",
      country: "Denmark"
    },
    price: {
      amount: 3800,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8,
    description: "Intimate luxury hotel with theatrical flair in the heart of Copenhagen.",
    amenities: ["Rooftop Terrace", "Restaurant", "Cocktail Bar", "Concierge", "Bike Rental"]
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
      country: "Denmark"
    },
    price: {
      amount: 1650,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Colorful boutique hotel in vibrant Vesterbro district.",
    amenities: ["Organic Breakfast", "Free Wi-Fi", "Bike Rental", "24/7 Reception"]
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
      country: "Denmark"
    },
    price: {
      amount: 1450,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Eco-friendly hotel with Balinese-inspired decor.",
    amenities: ["Organic Breakfast", "Garden", "Bike Rental", "Sustainable Practices"]
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
      country: "Denmark"
    },
    price: {
      amount: 1750,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Modern apartment hotel near the Little Mermaid statue.",
    amenities: ["Fully Equipped Kitchen", "Indoor Pool", "Gym", "Business Center", "Laundry"]
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
      country: "Denmark"
    },
    price: {
      amount: 1550,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Newly renovated hotel in the heart of Frederiksberg.",
    amenities: ["Conference Center", "Restaurant", "Bar", "Fitness Room", "Bike Rental"]
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
      country: "Denmark"
    },
    price: {
      amount: 2100,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Historic hotel in the heart of Aarhus, close to ARoS Art Museum.",
    amenities: ["Fine Dining", "Wine Cellar", "Meeting Rooms", "Room Service", "Valet Parking"]
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
      country: "Denmark"
    },
    price: {
      amount: 1450,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Modern high-rise hotel with panoramic views of Aalborg.",
    amenities: ["Skybar", "Conference Facilities", "Restaurant", "Fitness Center"]
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
      country: "Denmark"
    },
    price: {
      amount: 1350,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Classic hotel near Hans Christian Andersen Museum.",
    amenities: ["Restaurant", "Bar", "Meeting Rooms", "Free Wi-Fi", "Parking"]
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
      country: "Denmark"
    },
    price: {
      amount: 2300,
      currency: "DKK",
      per: "night"
    },
    rating: 4.8,
    description: "Luxury beach resort with views of Sweden and Kronborg Castle.",
    amenities: ["Private Beach", "Casino", "Spa", "Indoor Pool", "Tennis Courts"]
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
      country: "Denmark"
    },
    price: {
      amount: 1250,
      currency: "DKK",
      per: "night"
    },
    rating: 4.1,
    description: "Modern hotel near Roskilde Cathedral and Viking Ship Museum.",
    amenities: ["Free Parking", "Breakfast Buffet", "Free Wi-Fi", "Business Center"]
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
      country: "Denmark"
    },
    price: {
      amount: 1450,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Historic hotel in the heart of Esbjerg's maritime district.",
    amenities: ["Restaurant", "Bar", "Meeting Rooms", "Free Wi-Fi", "Fitness Room"]
  },

  // Kolding
  {
    id: "hotel-koldingfjord",
    imageUrl: "/images/hotels/hotel-13.jpg",
    images: ["/images/hotels/hotel-13.jpg"],
    name: "Hotel Koldingfjord",
    location: {
      address: "Fjordvej 154",
      city: "Kolding",
      country: "Denmark"
    },
    price: {
      amount: 1850,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Scenic hotel overlooking Kolding Fjord, set in historic surroundings.",
    amenities: ["Private Beach", "Spa", "Restaurant", "Conference Facilities", "Tennis Court"]
  },

  // Vejle
  {
    id: "munkebjerg-hotel",
    imageUrl: "/images/hotels/hotel-14.jpg",
    images: ["/images/hotels/hotel-14.jpg"],
    name: "Munkebjerg Hotel",
    location: {
      address: "Munkebjergvej 125",
      city: "Vejle",
      country: "Denmark"
    },
    price: {
      amount: 1650,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Forest hotel with panoramic views of Vejle Fjord.",
    amenities: ["Casino", "Golf Course", "Spa", "Indoor Pool", "Restaurant"]
  },

  // Silkeborg
  {
    id: "radisson-blu-papirfabrikken",
    imageUrl: "/images/hotels/hotel-15.jpg",
    images: ["/images/hotels/hotel-15.jpg"],
    name: "Radisson Blu Papirfabrikken",
    location: {
      address: "Papirfabrikken 12",
      city: "Silkeborg",
      country: "Denmark"
    },
    price: {
      amount: 1550,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Contemporary hotel in historic paper mill by Silkeborg's lakes.",
    amenities: ["Riverside Restaurant", "Bar", "Fitness Center", "Meeting Rooms", "Bike Rental"]
  },

  // Horsens
  {
    id: "scandic-bygholm-park",
    imageUrl: "/images/hotels/hotel-16.jpg",
    images: ["/images/hotels/hotel-16.jpg"],
    name: "Scandic Bygholm Park",
    location: {
      address: "Schüttesvej 6",
      city: "Horsens",
      country: "Denmark"
    },
    price: {
      amount: 1350,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Elegant hotel set in beautiful Bygholm Park.",
    amenities: ["Park Views", "Restaurant", "Conference Center", "Free Parking", "Bike Rental"]
  },

  // Copenhagen - Nyhavn
  {
    id: "copenhagen-strand",
    imageUrl: "/images/hotels/hotel-17.jpg",
    images: ["/images/hotels/hotel-17.jpg"],
    name: "Copenhagen Strand",
    location: {
      address: "Havnegade 37",
      city: "København K",
      country: "Denmark"
    },
    price: {
      amount: 1950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.4,
    description: "Maritime-themed hotel in historic warehouse along Copenhagen's waterfront.",
    amenities: ["Harbor Views", "Breakfast Buffet", "Business Center", "Bike Rental", "Bar"]
  },

  // Copenhagen - Islands Brygge
  {
    id: "stay-copenhagen",
    imageUrl: "/images/hotels/hotel-18.jpg",
    images: ["/images/hotels/hotel-18.jpg"],
    name: "STAY Copenhagen",
    location: {
      address: "Islands Brygge 79A",
      city: "København S",
      country: "Denmark"
    },
    price: {
      amount: 1850,
      currency: "DKK",
      per: "night"
    },
    rating: 4.5,
    description: "Modern apartment hotel with harbor views and minimalist Nordic design.",
    amenities: ["Full Kitchen", "Washer/Dryer", "Gym", "Terrace", "Parking"]
  },

  // Copenhagen - Christianshavn
  {
    id: "canal-house",
    imageUrl: "/images/hotels/hotel-19.jpg",
    images: ["/images/hotels/hotel-19.jpg"],
    name: "Copenhagen Canal House",
    location: {
      address: "Overgaden Oven Vandet 48",
      city: "København K",
      country: "Denmark"
    },
    price: {
      amount: 2200,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Boutique hotel in historic canal house with authentic Danish charm.",
    amenities: ["Canal Views", "Garden", "Free Breakfast", "Bike Rental", "Library"]
  },

  // Copenhagen - Frederiksstaden
  {
    id: "phoenix-copenhagen",
    imageUrl: "/images/hotels/hotel-20.jpg",
    images: ["/images/hotels/hotel-20.jpg"],
    name: "Phoenix Copenhagen",
    location: {
      address: "Bredgade 37",
      city: "København K",
      country: "Denmark"
    },
    price: {
      amount: 2400,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Elegant hotel in historic building near Amalienborg Palace.",
    amenities: ["English Bar", "Restaurant", "Meeting Rooms", "Concierge", "Room Service"]
  },

  // Copenhagen - Sydhavnen
  {
    id: "scandic-sydhavnen",
    imageUrl: "/images/hotels/hotel-21.jpg",
    images: ["/images/hotels/hotel-21.jpg"],
    name: "Scandic Sydhavnen",
    location: {
      address: "Sydhavns Plads 15",
      city: "København SV",
      country: "Denmark"
    },
    price: {
      amount: 1350,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Modern business hotel with easy access to city center and airport.",
    amenities: ["Restaurant", "Fitness Center", "Conference Rooms", "Parking", "Bar"]
  },

  // Copenhagen - Amager Øst
  {
    id: "copenhagen-go",
    imageUrl: "/images/hotels/hotel-22.jpg",
    images: ["/images/hotels/hotel-22.jpg"],
    name: "Copenhagen GO Hotel",
    location: {
      address: "Gemmas Allé 203",
      city: "København S",
      country: "Denmark"
    },
    price: {
      amount: 995,
      currency: "DKK",
      per: "night"
    },
    rating: 4.0,
    description: "Budget-friendly hotel near metro with modern amenities.",
    amenities: ["Free Parking", "24/7 Reception", "Shared Kitchen", "Lounge", "Free Wi-Fi"]
  },

  // Copenhagen - Frederiksberg
  {
    id: "frederiksberg-palace",
    imageUrl: "/images/hotels/hotel-29.jpg",
    images: ["/images/hotels/hotel-29.jpg"],
    name: "Frederiksberg Palace Hotel",
    location: {
      address: "Smallegade 4",
      city: "Frederiksberg",
      country: "Denmark"
    },
    price: {
      amount: 2800,
      currency: "DKK",
      per: "night"
    },
    rating: 4.7,
    description: "Elegant hotel in a restored palace building with garden views.",
    amenities: ["Garden Access", "Luxury Spa", "Fine Dining", "Afternoon Tea", "Concierge"]
  },

  // Copenhagen - Amager Strand
  {
    id: "nordic-park",
    imageUrl: "/images/hotels/hotel-30.jpg",
    images: ["/images/hotels/hotel-30.jpg"],
    name: "Nordic Park Hotel",
    location: {
      address: "Amager Strandvej 401",
      city: "København S",
      country: "Denmark"
    },
    price: {
      amount: 1450,
      currency: "DKK",
      per: "night"
    },
    rating: 4.3,
    description: "Beachfront hotel with views of Øresund strait.",
    amenities: ["Beach Access", "Water Sports", "Restaurant", "Parking", "Bike Rental"]
  },

  // Copenhagen - Ørestad
  {
    id: "ac-bella-sky",
    imageUrl: "/images/hotels/hotel-31.jpg",
    images: ["/images/hotels/hotel-31.jpg"],
    name: "AC Bella Sky",
    location: {
      address: "Center Boulevard 5",
      city: "København S",
      country: "Denmark"
    },
    price: {
      amount: 1950,
      currency: "DKK",
      per: "night"
    },
    rating: 4.6,
    description: "Modern architectural landmark with stunning city views.",
    amenities: ["Skybar", "Spa", "Fitness Center", "Multiple Restaurants", "Conference Center"]
  },

  // Copenhagen - Valby
  {
    id: "valby-park",
    imageUrl: "/images/hotels/hotel-32.jpg",
    images: ["/images/hotels/hotel-32.jpg"],
    name: "Valby Park Hotel",
    location: {
      address: "Valby Langgade 70",
      city: "København V",
      country: "Denmark"
    },
    price: {
      amount: 1350,
      currency: "DKK",
      per: "night"
    },
    rating: 4.2,
    description: "Charming hotel in quiet residential area near Valby Park.",
    amenities: ["Garden", "Breakfast Buffet", "Free Parking", "Bike Rental", "Family Rooms"]
  },

  // Copenhagen - Kastrup
  {
    id: "quality-airport",
    imageUrl: "/images/hotels/hotel-33.jpg",
    images: ["/images/hotels/hotel-33.jpg"],
    name: "Quality Airport Hotel",
    location: {
      address: "Lufthavnsboulevarden 2",
      city: "Kastrup",
      country: "Denmark"
    },
    price: {
      amount: 1250,
      currency: "DKK",
      per: "night"
    },
    rating: 4.1,
    description: "Convenient airport hotel with 24-hour shuttle service.",
    amenities: ["Airport Shuttle", "Restaurant", "Conference Rooms", "Parking", "24/7 Reception"]
  },

  // Copenhagen - Brønshøj
  {
    id: "bella-vista",
    imageUrl: "/images/hotels/hotel-34.jpg",
    images: ["/images/hotels/hotel-34.jpg"],
    name: "Bella Vista Hotel",
    location: {
      address: "Frederikssundsvej 184",
      city: "København NV",
      country: "Denmark"
    },
    price: {
      amount: 1150,
      currency: "DKK",
      per: "night"
    },
    rating: 4.0,
    description: "Comfortable hotel in peaceful suburban setting.",
    amenities: ["Free Parking", "Restaurant", "Garden", "Business Center", "Family Rooms"]
  }
]; 