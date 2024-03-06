import { useContext } from "react"
import { CartContex } from "../Context/cart"

export function useCart (){
    
    const {openCart, setOpenCart,listCart,setListCart}= useContext(CartContex)
    
    return{
        openCart,
        setOpenCart,
        listCart,
        setListCart
    }
}