export interface Seller {
  name: string;
  email: string;
  phone: string;
}

export interface Perks {
  freeDelivery: boolean;
  priceNegotiable: boolean;
}

export interface Listing {
  id: number;
  title: string;
  image: string[];
  date: string;
  location: string;
  description: string[];
  price: number;
  perks: Perks;
  seller: Seller;
  category: string;
  keywords: string[];
}

export const listings: Listing[] = [
  {
    id: 1,
    title: "Living Room Chair",
    image: ["https://i.imgur.com/JJy2Zcr.png"],
    date: "01-17-2024",
    location: "Newark, DE",
    description: ["Condition: Good, few scratches"],
    price: 55.0,
    perks: { freeDelivery: true, priceNegotiable: true },
    seller: {
      name: "Jeff Smith",
      email: "jeffsmith@udel.edu",
      phone: "",
    },
    category: "furniture",
    keywords: ["chair", "couch", "sofa", "living room"],
  },
  {
    id: 2,
    title: "Calculus Textbook",
    image: ["https://i.imgur.com/NZGjDGb.png"],
    date: "01-02-2024",
    location: "Dover, DE",
    description: ["Condition: Like New", "Annotations in margins"],
    price: 40.0,
    perks: { freeDelivery: false, priceNegotiable: false },
    seller: {
      name: "Alice Johnson",
      email: "alicejohnson@udel.edu",
      phone: "",
    },
    category: "education",
    keywords: ["textbook", "book", "school", "calc", "math"],
  },
  {
    id: 3,
    title: "Studio Apartment",
    image: ["https://i.imgur.com/8oUBEuS.png"],
    date: "01-03-2024",
    location: "Wilmington, DE",
    description: ["Lease Transfer", "Furnished, utilities included"],
    price: 500.0,
    perks: { freeDelivery: false, priceNegotiable: true },
    seller: {
      name: "Brian Lee",
      email: "brianlee@udel.edu",
      phone: "",
    },
    category: "housing",
    keywords: ["apartment", "rent", "studio", "lease"],
  },
  {
    id: 4,
    title: "Mountain Bike",
    image: ["https://i.imgur.com/jENX5R1.png"],
    date: "01-04-2024",
    location: "Newark, DE",
    description: [
      "Condition: Used, well-maintained",
      "Great for trails and city",
    ],
    price: 120.0,
    perks: { freeDelivery: true, priceNegotiable: true },
    seller: {
      name: "Cindy Morales",
      email: "cindymorales@udel.edu",
      phone: "",
    },
    category: "transportation",
    keywords: ["bike", "bicycle", "mountain bike", "outdoor"],
  },
  {
    id: 5,
    title: "Laptop - Dell XPS 13",
    image: ["https://i.imgur.com/FR22IdD.png"],
    date: "01-05-2024",
    location: "Middletown, DE",
    description: ["Condition: Excellent", "Latest model, barely used"],
    price: 950.0,
    perks: { freeDelivery: false, priceNegotiable: true },
    seller: {
      name: "David Kim",
      email: "davidkim@udel.edu",
      phone: "",
    },
    category: "electronics",
    keywords: ["laptop", "dell", "computer"],
  },
  {
    id: 6,
    title: "Dining Table Set",
    image: ["https://i.imgur.com/HPT4tdP.png"],
    date: "01-06-2024",
    location: "Newark, DE",
    description: ["Condition: Good", "Includes 4 chairs, solid wood"],
    price: 200.0,
    perks: { freeDelivery: true, priceNegotiable: false },
    seller: {
      name: "Emily Carter",
      email: "emilycarter@udel.edu",
      phone: "",
    },
    category: "furniture",
    keywords: ["dining", "table", "chair", "wood"],
  },
  {
    id: 7,
    title: "Classroom Clicker",
    image: ["https://i.imgur.com/FO29bCR.png"],
    date: "01-08-2024",
    location: "Newark, DE",
    description: ["Condition: Nearly New", "Used for one semester only"],
    price: 25.0,
    perks: { freeDelivery: false, priceNegotiable: false },
    seller: {
      name: "Alex Johnson",
      email: "alexjohnson@udel.edu",
      phone: "",
    },
    category: "education",
    keywords: ["clicker", "class"],
  },
  {
    id: 8,
    title: "Acoustic Guitar",
    image: ["https://i.imgur.com/ddJOqbK.jpeg"],
    date: "01-09-2024",
    location: "Wilmington, DE",
    description: [
      "Condition: Used",
      "Minor wear and tear",
      "Strings recently replaced",
    ],
    price: 150.0,
    perks: { freeDelivery: true, priceNegotiable: true },
    seller: {
      name: "Betty Smith",
      email: "bettysmith@udel.edu",
      phone: "",
    },
    category: "miscellaneous",
    keywords: ["guitar", "music", "instrument", "hobby"],
  },
  {
    id: 9,
    title: "Skateboard",
    image: ["https://i.imgur.com/uaX9Obh.png"],
    date: "01-10-2024",
    location: "Newark, DE",
    description: [
      "Condition: Good",
      "Griptape intact",
      "Wheels in excellent condition",
    ],
    price: 50.0,
    perks: { freeDelivery: false, priceNegotiable: false },
    seller: {
      name: "Charlie Brown",
      email: "charliebrown@udel.edu",
      phone: "",
    },
    category: "transportation",
    keywords: ["skateboard", "outdoor", "sport", "hobby"],
  },
];
