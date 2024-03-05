import Filter from "./Filter"
import '../Css/head.scss'

const Head = ({products}) => {
  return (
    
    <>
      <div className="containerHead">
        <h2>Filtrar por:</h2>
        <Filter
        products={products}
        />
      </div>
    </>
  )
}

export default Head