
import './App.css'
import  Product  from './Components/Product'
import Head from './Components/head'

import initialProduct from './mocks/products.json'

function App() {

  return (
    <>
    
      <main>
        <Head/>
        <Product
        productFilter={initialProduct}
        />
      </main>
    </>
  )
}

export default App
