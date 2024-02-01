import ItemProduct from "./ItemProduct"

const Product = ({productFilter}) => {

  const  listProduct= productFilter.products

  return (
    <>
      <div className="containerProduct">
        {listProduct.slice(0,10).map((item)=>(
          <ItemProduct
            key={item.id}
          />

        ))}
        </div>    
    </>
  )
}

export default Product