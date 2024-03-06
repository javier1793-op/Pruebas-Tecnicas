import { useContext } from "react"
import { CartContex } from "../Context/cart"

export function useCart (){
    
    const {openCart, setOpenCart}= useContext(CartContex)
    
    return{
        openCart,
        setOpenCart
    }
}