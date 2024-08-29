'use client'
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Colors } from "./colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    h1: {
      color: Colors.color,
    },
    h2: {
      color: Colors.color
    },
    h3: {
      color: Colors.color
    },
    h4: {
      color: Colors.color
    },
    h5: {
      color: Colors.color
    },
    h6: {
      color: Colors.color
    },
    body1: {
      color: Colors.color
    },
  }
});
