export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "classic-cheeseburger",
    title: "Classic Cheeseburger",
    emoji: "🍔",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "spicy-ramen-bowl",
    title: "Spicy Ramen Bowl",
    emoji: "🍜",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Japanese",
  },
  {
    id: "fresh-garden-tacos",
    title: "Fresh Garden Tacos",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
  },
  {
    id: "creamy-pasta-alfredo",
    title: "Creamy Pasta Alfredo",
    emoji: "🍝",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Italian",
  },
  {
    id: "sushi-roll-platter",
    title: "Sushi Roll Platter",
    emoji: "🍣",
    minutes: 45,
    difficulty: "Hard",
    cuisine: "Japanese",
  },
  {
    id: "berry-pancake-stack",
    title: "Berry Pancake Stack",
    emoji: "🥞",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "aromatic-chicken-curry",
    title: "Aromatic Chicken Curry",
    emoji: "🍛",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
  },
];
