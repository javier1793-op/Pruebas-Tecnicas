import { useContext } from "react";
import { FilterContext } from "../Context/filter";

export function useFilter() {
  const { filterCart, setFilterCart } = useContext(FilterContext);

  const filterCategory = (listProduct) => {
    const categories = listProduct.products.map((item) => item.category);
    const categoriasUnicas = [...new Set(categories)];
    return categoriasUnicas;
  };

  const filterProduct = (productosTest) => {
    return productosTest.filter((product) => {
      return (
        product.price >= filterCart.price &&
        (filterCart.category === "all" || product.category === filterCart.category)
      );
    });
  };
  return {
    filterCategory,
    setFilterCart,
    filterProduct,
    filterCart
  };
}
