import Filter from "./Filter"
import '../Css/head.scss'
import { BsCart2 } from "react-icons/bs";
import { useCart } from "../Hooks/useCart";
import { useEffect, useState } from "react";

const Head = ({products}) => {

  const {setOpenCart, listCart}=useCart()
  const [total, setTotal] = useState(0)
  var newTotal = 0

  useEffect(() => {
    listCart.forEach(item => {
        newTotal += item.subTotal;
      });
   setTotal(newTotal)
  }, [listCart])

  const handleOpenModal = ()=>{
    setOpenCart(true)
  }

  return (
    
    <>
      <div className="containerHead">
        <h2>Filtrar por:</h2>
        <section className="headContent">
          <Filter
        products={products}
        />
        <div className="cartCount">
        <BsCart2 className="icon"
        onClick={handleOpenModal}
        />
          <span>{'$ '}{total}</span>
        </div>
        </section>
        
      </div>
    </>
  )
}

export default Head