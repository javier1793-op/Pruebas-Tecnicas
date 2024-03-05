import ItemProduct from "./ItemProduct"
import '../Css/product.scss'

const Product = ({productFilter}) => {

  const  listProduct= productFilter


  return (
    <>
      <div className="containerProduct">
        {listProduct.slice(0,12).map((item)=>(
          <ItemProduct
            key={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            thumbnail={item.thumbnail}
          />

        ))}
        </div>    
    </>
  )
}

export default Product