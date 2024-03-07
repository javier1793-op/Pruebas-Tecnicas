import { useContext, useEffect } from "react"
import { CartContex } from "../Context/cart"

export function useCart (){
    
    const {openCart, setOpenCart,listCart,setListCart}= useContext(CartContex)
    
       

    const addCart = (product)=>{


        const existingProductIndex = listCart.findIndex(item => item.title === product.title);

        if (existingProductIndex !== -1) {
            
           
            const updatedListCart = listCart.map((item, index) => {
                if (index === existingProductIndex) {
                    return {
                        ...item,
                        count: item.count + product.count, // Actualizar la cantidad
                        subTotal: (item.count + product.count) * product.priceUnit // Calcular el nuevo subtotal
                    };
                }
                return item;
            });
            setListCart(updatedListCart);
        }else{
        const newCart = [...listCart, product]
        setListCart(newCart) 
        }
        

        localStorage.setItem('cart',JSON.stringify(listCart))
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