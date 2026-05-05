// src/hooks/useFavorits.js
import { useState, useEffect } from "react";

export function useFavorits(key = "favorits") {
  const [favorits, setFavorits] = useState(() => {
    const guardats = localStorage.getItem(key);
    return guardats ? JSON.parse(guardats) : [];
  });

  const toggleFavorit = (id) => {
    setFavorits(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const esFavorit = (id) => favorits.includes(id);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(favorits));
  }, [favorits, key]);

  return { favorits, toggleFavorit, esFavorit };
}