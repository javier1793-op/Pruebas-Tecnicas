import { createContext, useState } from "react";

export const FilterContext = createContext();

export function ContextFilter({ children }) {
  const [filterCart, setFilterCart] = useState({
    price: 0,
    category: "all",
  });

  return (
    <FilterContext.Provider value={{ filterCart, setFilterCart }}>
      {children}
    </FilterContext.Provider>
  );
}
