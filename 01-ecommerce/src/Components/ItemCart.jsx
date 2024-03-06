import '../Css/itemCart.scss'
import { RiDeleteBin6Line } from "react-icons/ri";

const ItemCart = () => {
  return (
    <>
    <div className="containerItemCart">
        <img src="" alt="miniatura" />
        <section className='detallCart'>
            <h3>nombre</h3>
            <span>categoria</span>
        </section>
        <section className='detallPriceCart'>
            <span>precio unitario</span>
            <section>
                <span>{'( x '}</span>
            <span>cantidad</span>
            <span>{' )'}</span> 
            </section>
           
            <span>{'SubTotal:'}</span>
            <span>precio final</span>
        </section>
        <section>
        <RiDeleteBin6Line className='icon'/>
        </section>
    </div>
    </>
  )
}

export default ItemCart