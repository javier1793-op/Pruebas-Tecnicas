import { createPortal } from "react-dom";
import "../Css/cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useCart } from "../Hooks/useCart";
import ItemCart from "./itemCart";

const Cart = () => {
  const { setOpenCart, listCart } = useCart();

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
        <ItemCart/><br/>
             </>
          ))
        }{'Total a Pagar: '}
        </section>
        }
        
      </div>
    </>,
    document.getElementById("cart")
  );
};

export default Cart;
