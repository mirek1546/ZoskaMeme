// src/components/ThemeSwitcher.tsx

"use client";

import React, { createContext, useState, useContext } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Typ pre kontext
type ThemeContextType = {
  toggleTheme: () => void;
  darkMode: boolean;
};

// Vytvárame kontext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Poskytovateľ témy
export const ThemeSwitcherProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Funkcia na prepínanie témy
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // Dynamická téma
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Hook na použitie témy
export const useThemeSwitcher = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeSwitcher musí byť použitý v rámci ThemeSwitcherProvider");
  }
  return context;
};

// Komponent na prepínanie témy
export const ThemeToggleButton = () => {
  const { toggleTheme, darkMode } = useThemeSwitcher();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};