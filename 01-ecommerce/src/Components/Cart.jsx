import { createPortal } from "react-dom";
import "../Css/cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useCart } from "../Hooks/useCart";
import ItemCart from "./itemCart";
import { useEffect, useState } from "react";

const Cart = () => {
  const { setOpenCart, listCart } = useCart();
  const [total, setTotal] = useState(0)
  var newTotal = 0

  useEffect(() => {
    listCart.forEach(item => {
        newTotal += item.subTotal;
      });
   setTotal(newTotal)
  }, [listCart])
  

  const handleCloseModal = () => {
    setOpenCart(false);
  };
  return createPortal(
    <>
      <div className="containerCart">
        <section className="headCart">
          <h1>Carrito</h1>
          <button>limpiarCarrito</button>
          <AiOutlineClose className="icon" onClick={handleCloseModal} />
        </section>
        {listCart.length === 0 ? "El carrito se encuentra vacio":
        <section className="listCartModal">
          {listCart.map(item=>(
             <>
        <ItemCart
        img={item.img}
        title={item.title}
        category={item.caategory}
        price={item.price}
        count={item.count}
        subtotal={item.subTotal}
        /><br/>
             </>
          ))
        }{'Total a Pagar: $ '}
        {total}
        </section>
        }
        
      </div>
    </>,
    document.getElementById("cart")
  );
};

export default Cart;
