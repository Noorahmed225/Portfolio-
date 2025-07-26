import React, { createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Removed dark mode functionality
  const isDarkMode = false;
  const toggleTheme = () => {
    // This function is kept for compatibility but does nothing now
    console.log('Dark mode functionality has been removed');
  };


  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};