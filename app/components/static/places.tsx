import { Place } from "@mui/icons-material";

const places: Place[] = [
  {
    title: "Green",
    description:
      "The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.",
    imageUrl: "/assets/bg.jpeg",
    time: 1500,
  },
  {
    title: "Bora Bora",
    description:
      "Shaped like a giant sombrero, this lush volcanic island stars in countless South Pacific fantasies. The focal point and best asset of this tropical beauty is its ravishing lagoon in technicolor turquoise. Fish, turtles, sharks, and rays swim in the clear waters.",
    imageUrl: "/assets/bg.jpeg",
    time: 1500,
  },
];

export interface Place {
  title: string;
  description: string;
  imageUrl: string;
  time: number;
}

export default places;
