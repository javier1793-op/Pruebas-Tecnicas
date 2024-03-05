import "../Css/filter.scss";
import { useFilter } from "../Hooks/useFilter";

const Filter = ({ products }) => {
  const { filterCategory,setFilterCart,filterCart } = useFilter();

  const listCategory = filterCategory(products);

  const handleSelect=(e)=>{
    setFilterCart(
      preveSate=>({
        ...preveSate,
        category: e.target.value
      })
    )
  }
  const handlePrice=(e)=>{
    setFilterCart(
      preveSate=>({
        ...preveSate,
        price: e.target.value
      })
    )
  }

  return (
    <>
      <div className="containerFilter">
        <div className="box">
          <label htmlFor="">Categoria</label>
          <select id="opciones" name="opciones"
          
            onChange={handleSelect}
          >
            <option
            value="all">All</option>
            {listCategory.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="box">
          <label htmlFor="">Precio</label>
          <input type="range" 
            onChange={handlePrice}
          />
          <span>{'$'}</span>
          <span>{filterCart.price}</span>
        </div>
      </div>
    </>
  );
};

export default Filter;
