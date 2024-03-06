import { useState } from 'react'
import '../Css/itemProduct.scss'

const ItemProduct = ({title,price,category,thumbnail}) => {
  
  const [count, setCount] = useState(1)
  
  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="containerItemProduct">
        <h2>{title}</h2>
        <img src={thumbnail} alt="imagenproduct" />
       <section className="detall">
        <span>{category}</span>
        <span>{'$'}{price}</span>
       </section>
        <section className='buttonCart'>
          <button>ADD CART</button>
          <div className="count">
            <span className='sum'
            onClick={incrementar}
            >{'+'}</span>
            <span>{count}</span>
            <span className='sum'
            onClick={decrementar}
            >{'-'}</span>
          </div>
        </section>
      </div>
    </>
  )
}

export default ItemProduct