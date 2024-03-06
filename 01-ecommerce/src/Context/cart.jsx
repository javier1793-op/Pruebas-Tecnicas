import { createContext, useState } from "react";

export const CartContex = createContext();


export function Contextcart({ children }) {
    const [openCart, setOpenCart] = useState(false);
  return (
    <CartContex.Provider value={{ openCart, setOpenCart }}>
      {children}
    </CartContex.Provider>
  );
}
