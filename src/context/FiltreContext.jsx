import { createContext, useContext, useState } from "react";

const FiltreContext = createContext();

export function FiltreProvider({ children }) {
  const [temporadaActiva, setTemporadaActiva] = useState("Totes");

  return (
    <FiltreContext.Provider value={{ temporadaActiva, setTemporadaActiva }}>
      {children}
    </FiltreContext.Provider>
  );
}

// Hook personalitzat per usar el context fàcilment
export function useFiltre() {
  return useContext(FiltreContext);
}