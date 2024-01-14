export interface Seller {
  name: string;
  email: string;
}

export interface Details {
  freeDelivery: boolean;
}

export interface Listing {
  title: string; 
  image: string; 
  date: string; 
  location: string; 
  description: string[]; 
  price: number; 
  details: Details; 
  seller: Seller;
  category: string;
  keywords: string[]; 
}

export const listings: Listing[] = [
  {
    title: "Living Room Chair",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    date: "01-07-2024",
    location: "Newark, DE",
    description: ["Condition: Good, few scratches", "Price negotiable"],
    price: 55.0,
    details: { freeDelivery: true },
    seller: {
      name: "Jeff Smith",
      email: "jeffsmith@udel.edu",
    },
    category: "furniture",
    keywords: ["chair", "couch", "sofa", "living room"],
  },
  {
    title: "Calculus Textbook",
    image: "https://i.imgur.com/NZGjDGb.png",
    date: "01-02-2024",
    location: "Dover, DE",
    description: ["Condition: Like New", "Annotations in margins"],
    price: 40.0,
    details: { freeDelivery: false },
    seller: {
      name: "Alice Johnson",
      email: "alicejohnson@udel.edu",
    },
    category: "education",
    keywords: ["textbook", "book", "school", "calc", "math"],
  },
  {
    title: "Studio Apartment",
    image: "https://i.imgur.com/8oUBEuS.png",
    date: "01-03-2024",
    location: "Wilmington, DE",
    description: ["Lease Transfer", "Furnished, utilities included"],
    price: 500.0,
    details: { freeDelivery: false },
    seller: {
      name: "Brian Lee",
      email: "brianlee@udel.edu",
    },
    category: "housing",
    keywords: ["apartment", "rent", "studio"],
  },
  {
    title: "Mountain Bike",
    image: "https://i.imgur.com/jENX5R1.png",
    date: "01-04-2024",
    location: "Newark, DE",
    description: [
      "Condition: Used, well-maintained",
      "Great for trails and city",
    ],
    price: 120.0,
    details: { freeDelivery: true },
    seller: {
      name: "Cindy Morales",
      email: "cindymorales@udel.edu",
    },
    category: "transportation",
    keywords: ["bike", "bicycle", "mountain bike", "outdoor"],
  },
  {
    title: "Laptop - Dell XPS 13",
    image: "https://i.imgur.com/FR22IdD.png",
    date: "01-05-2024",
    location: "Middletown, DE",
    description: ["Condition: Excellent", "Latest model, barely used"],
    price: 950.0,
    details: { freeDelivery: false },
    seller: {
      name: "David Kim",
      email: "davidkim@udel.edu",
    },
    category: "electronics",
    keywords: ["laptop", "dell", "computer"],
  },
  {
    title: "Dining Table Set",
    image: "https://i.imgur.com/HPT4tdP.png",
    date: "01-06-2024",
    location: "Newark, DE",
    description: ["Condition: Good", "Includes 4 chairs, solid wood"],
    price: 200.0,
    details: { freeDelivery: true },
    seller: {
      name: "Emily Carter",
      email: "emilycarter@udel.edu",
    },
    category: "furniture",
    keywords: ["dining", "table", "chair", "wood"],
  },
];
