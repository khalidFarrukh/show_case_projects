"use client";
import { useRef, createContext, useState, useContext } from "react";
import useBodySize from "./useBodySize";
import useOnClickOutside from "./useOnClickOutside";

const AppContext = createContext();

export function AppProvider({ children }) {
  const { width } = useBodySize();  // custom Hook
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuRef = useRef(null);
  const searchRef = useRef(null);

  // Close Menu when clicking outside
  useOnClickOutside(menuRef, () => setIsMenuOpen(false), isMenuOpen);
  // Close Search when clicking outside
  useOnClickOutside(searchRef, () => setIsSearchOpen(false), isSearchOpen);
  return (
    <AppContext.Provider value={
      {
        width,
        isMenuOpen,
        setIsMenuOpen,
        isSearchOpen,
        setIsSearchOpen,
        menuRef,
        searchRef
      }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}