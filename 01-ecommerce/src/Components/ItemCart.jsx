
import '../Css/itemCart.scss'
import { RiDeleteBin6Line } from "react-icons/ri";

const ItemCart = ({img,title,category,price,count,subtotal}) => {


  return (
    <>
    <div className="containerItemCart">
        <img src={img} alt="miniatura" />
        <section className='detallCart'>
            <h3>{title}</h3>
            <span>{category}</span>
        </section>
        <section className='detallPriceCart'>
            <span>{price}</span>
            <section>
                <span>{'( x '}</span>
            <span>{count}</span>
            <span>{' )'}</span> 
            </section>
           
            <span>{'SubTotal:'}</span>
            <span>{subtotal}</span>
        </section>
        <section>
        <RiDeleteBin6Line className='icon'/>
        </section>
    </div>
    </>
  )
}

export default ItemCart