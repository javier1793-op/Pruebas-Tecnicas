import { useContext } from "react"
import { CartContex } from "../Context/cart"

export function useCart (){
    
    const {openCart, setOpenCart,listCart,setListCart}= useContext(CartContex)

    const addCart = (product)=>{
        const newCart = [...listCart, product]
        setListCart(newCart)
    }

    const deleteItemCart = (title)=>{
        let newList = listCart.filter(item => item.title !== title)
        
        setListCart(newList)
    }
    
    return{
        openCart,
        setOpenCart,
        listCart,
        setListCart,
        addCart,
        deleteItemCart
    }
}