import '../Css/itemProduct.scss'

const ItemProduct = ({title,price,category,thumbnail}) => {
  return (
    <>
      <div className="containerItemProduct">
        <h2>{title}</h2>
        <img src={thumbnail} alt="imagenproduct" />
        <span>{category}</span>
        <span>{'$'}{price}</span>
      </div>
    </>
  )
}

export default ItemProduct