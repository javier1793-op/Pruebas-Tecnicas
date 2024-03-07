
import { useState } from 'react'
import './App.css'
import  Product  from './Components/Product'
import Head from './Components/head'

import initialProduct from './mocks/products.json'
import { useFilter } from './Hooks/useFilter'
import Cart from './Components/Cart'
import { useCart } from './Hooks/useCart'

function App() {

  const { openCart } = useCart();
  const { filterProduct } = useFilter();
  const [products, setProducts] = useState(initialProduct.products);
  
  
  const productFilter = filterProduct(products);
 

  return (
    <>
    
      <main>
        {openCart && <Cart/>}
        
        <Head
          products={initialProduct}
          />
        <Product
        productFilter={productFilter}
        />
      </main>
    </>
  )
}

export default App
