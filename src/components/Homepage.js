import Header from './Header.js'
import Footer from './Footer.js'
import { Button, Card } from 'react-bootstrap'
import '../styles/Homepage.css'
import {getProducts, getImagesByProductId, getImages} from '../DAL/api.js'
import ProductCard from './ProductCard.js'
import { useState, useEffect} from 'react'


function Homepage () {
  let [products, setProducts] = useState([])
  let [images, setImages] = useState([])
  products.sort((a, b) => b.unitsSold - a.unitsSold)
  
  async function getData () {
    products = await getProducts()
    images = await getImages()
    setProducts([...products])
    setImages([...images])
  }
  useEffect(() => {
      getData()
    },[])

    return (
    <div>
        <main id='homepage'>
            <h1>Best Sellers</h1>
            {products.map(product => 
            <ProductCard key={product.id} product={product} 
              image={images.find(image => image.productId === product.id).imageSrc}>
            </ProductCard>)}
        </main>
        <Footer></Footer>
    </div>
    )
  }
  
  export default Homepage
  
  {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="ProductPageImgs/impact-driver.jpg" />
      <Card.Body>
          <Card.Title>Dewalt Impact Driver</Card.Title>
          <Card.Text>
          DeWalt Impact driver and drill set comes with a charger and a case
          </Card.Text>
          <h3 className='cardPrice'>530₪</h3>
          <div className='cardButtons'>
              <Button variant="primary">Buy now</Button>
              <Button className='addToCart' variant="warning">Add to cart</Button>
          </div>
      </Card.Body>
  </Card> */}
{/* <div class="item">
    <img src="ProductPageImgs/impact-driver.jpg" alt=""></img>
    <p>DeWalt Impact driver and drill set comes with a charger and a case</p>
    <p class="price">530₪ </p>
</div> */}