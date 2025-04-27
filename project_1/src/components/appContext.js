"use client";
import { createContext, useState, useContext } from "react";
import useBodySize from "./useBodySize";

const AppContext = createContext();

export function AppProvider({ children }) {
  const { width } = useBodySize();  // custom Hook
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <AppContext.Provider value={
      {
        width,
        isMenuOpen,
        setIsMenuOpen,
        isSearchOpen,
        setIsSearchOpen
      }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}