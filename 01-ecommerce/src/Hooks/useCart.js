import { useContext, useEffect } from "react"
import { CartContex } from "../Context/cart"

export function useCart (){
    
    const {openCart, setOpenCart,listCart,setListCart}= useContext(CartContex)
    
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setListCart(JSON.parse(storedCart));
        }
    }, []);
    
    const addCart = (product) => {
        const existingProductIndex = listCart.findIndex(item => item.title === product.title);
    
        if (existingProductIndex !== -1) {
            const updatedListCart = listCart.map((item, index) => {
                if (index === existingProductIndex) {
                    return {
                        ...item,
                        count: item.count + product.count, 
                        subTotal: (item.count + product.count) * product.priceUnit 
                    };
                }
                return item;
            });
            setListCart(updatedListCart);
            localStorage.setItem('cart', JSON.stringify(updatedListCart)); 
        } else {
            const newCart = [...listCart, product];
            setListCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart)); 
        }
    }

    const deleteItemCart = (title)=>{
        let newList = listCart.filter(item => item.title !== title)
        
        setListCart(newList)

        localStorage.setItem('cart',JSON.stringify(newList))
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