import { createContext, useState } from "react";

export const CartContex = createContext();


export function Contextcart({ children }) {
    const [openCart, setOpenCart] = useState(false);
    const [listCart, setListCart] = useState([])
  return (
    <CartContex.Provider value={{ openCart, setOpenCart,listCart,setListCart }}>
      {children}
    </CartContex.Provider>
  );
}
