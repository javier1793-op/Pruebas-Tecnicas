
import { useState } from 'react'
import './App.css'
import  Product  from './Components/Product'
import Head from './Components/head'

import initialProduct from './mocks/products.json'
import { useFilter } from './Hooks/useFilter'

function App() {

  const [products, setProducts] = useState(initialProduct.products)

  const {filterProduct}=useFilter()
  const productFilter= filterProduct(products)
 

  return (
    <>
    
      <main>
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
