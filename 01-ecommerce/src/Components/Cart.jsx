import { createPortal } from "react-dom";
import "../Css/cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useCart } from "../Hooks/useCart";

const Cart = () => {

    const {setOpenCart}=useCart()

    const handleCloseModal=()=>{
        setOpenCart(false)
    }
  return createPortal(
    <>
      <div className="containerCart">
        <section className="headCart">
          <h1>Carrito</h1>
          <AiOutlineClose className="icon"
          onClick={handleCloseModal}
          />
        </section>
        {"El carrito se encuentra vacio"}
      </div>
    </>,
    document.getElementById("cart")
  );
};

export default Cart;
