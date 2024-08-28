"use client";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ThemeRegistry from "../../theme-registry";
import { createTheme, CssBaseline } from "@mui/material";
import Header from "../header";
import { PlaceToVisit } from "../../place-to-visit";
import { theme } from "@/app/theme/theme";

export default function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeRegistry>
        <body>
          <CssBaseline />
          <Header />
          <PlaceToVisit />
          <br />
          {children}
        </body>
      </ThemeRegistry>
    </ThemeProvider>
  );
}
