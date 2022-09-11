import Header from './Header.js'
import Footer from './Footer.js'
import { Button, Card } from 'react-bootstrap'
import '../styles/Homepage.css'
import {getProducts, getImagesByProductId, getImages} from '../DAL/api.js'
import ProductCard from './ProductCard.js'
import { useState, useEffect} from 'react'


function Homepage () {
  let [products, setProducts] = useState([])
  
  async function getData () {
    products = await getProducts()
    setProducts([...products])
  }
  useEffect(() => {
      getData()
    },[])

    return (
    <div>
        <main id='homepage'>
            <h1>Best Sellers</h1>
            {products.map(product => 
            <ProductCard key={product.product_id} product={product}>
            </ProductCard>)}
        </main>
        <Footer></Footer>
    </div>
    )
  }
  
  export default Homepage
  
  