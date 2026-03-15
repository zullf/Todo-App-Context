import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const colors =
    theme === "light"
      ? {
          background: "#F8FAFC",
          text: "#0F172A",
          card: "#FFFFFF",
        }
      : {
          background: "#0F172A",
          text: "#F8FAFC",
          card: "#1E293B",
        };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};