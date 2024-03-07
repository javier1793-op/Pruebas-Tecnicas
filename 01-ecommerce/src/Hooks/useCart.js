import { useContext, useEffect } from "react"
import { CartContex } from "../Context/cart"

export function useCart (){
    
    const {openCart, setOpenCart,listCart,setListCart}= useContext(CartContex)
    
       

    const addCart = (product)=>{
        const newCart = [...listCart, product]
        setListCart(newCart)

        localStorage.setItem('cart',JSON.stringify(newCart))
    }

    const deleteItemCart = (title)=>{
        let newList = listCart.filter(item => item.title !== title)
        
        setListCart(newList)

        localStorage.setItem('cart',JSON.stringify(newList))
    }

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setListCart(JSON.parse(storedCart));
        }
    }, [setListCart]);
    
    
    return{
        openCart,
        setOpenCart,
        listCart,
        setListCart,
        addCart,
        deleteItemCart
    }
}