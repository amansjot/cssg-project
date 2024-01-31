export interface Category {
  name: string;
  value: string;
  emoji: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: "",
    value: "",
    emoji: "",
    description: "in one place",
  },
  {
    name: "Education",
    value: "education",
    emoji: "📚",
    description: "textbooks, lab books, clickers",
  },
  {
    name: "Electronics",
    value: "electronics",
    emoji: "🎮",
    description: "laptops, iPads, consoles",
  },
  {
    name: "Furniture",
    value: "furniture",
    emoji: "🛌",
    description: "beds, chairs, tables",
  },
  {
    name: "Housing",
    value: "housing",
    emoji: "🏠",
    description: "apartments, leases, houses",
  },
  {
    name: "Miscellaneous",
    value: "miscellaneous",
    emoji: "🎸",
    description: "instruments, posters, random objects",
  },
  {
    name: "Transportation",
    value: "transportation",
    emoji: "🚲",
    description: "bikes, skateboards, cars",
  },
];
