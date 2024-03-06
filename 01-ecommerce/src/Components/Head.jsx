import Filter from "./Filter"
import '../Css/head.scss'
import { BsCart2 } from "react-icons/bs";

const Head = ({products}) => {
  return (
    
    <>
      <div className="containerHead">
        <h2>Filtrar por:</h2>
        <section className="headContent">
          <Filter
        products={products}
        />
        <div className="cartCount">
        <BsCart2 className="icon"/>
          <span>{'0'}</span>
        </div>
        </section>
        
      </div>
    </>
  )
}

export default Head