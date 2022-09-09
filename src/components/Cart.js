import {Container, Button, Card, ListGroup, Form, Row, Col} from 'react-bootstrap'
import '../styles/Cart.css'
import Footer from './Footer'
import { useState, useEffect} from 'react'
import { getCart, products, removeFromCart } from '../DAL/api'

function Cart () {
  //const product = products[0]
  let totalPrice = 0
  let [cart, setCart] = useState([])
  let [images, setImages] = useState([])

  async function gettingCart () {
    cart = await getCart()
    setCart([...cart])
  }

  useEffect(() => {
    gettingCart()
  },[])

  const removeProduct = async (product) => {
    await removeFromCart(product.product_id)
    cart = await getCart()
    setCart([...cart])
  }

  const decrease = () => {

  }

  const increase = () => {

  }

  const createProduct = (product) => {
    totalPrice += product.price
    console.log(totalPrice);
    return (
      <Card className='cartCard'>
        <Card.Body>
          <Row>
            <Col lg={3}>
              <Card.Img className='cardImg img-fluid rounded-start' variant="top" src={product.image_src} alr={product.image_alt}/>
            </Col>
            <Col lg={9} className='cartProducts'>
              <Card.Title>{product.product_name}</Card.Title>
              <Card.Text>
                {product.description.slice(0, 100)}...
              </Card.Text>
              {/* <button className='btn btn-danger btn-sm' style={{ width: "1.5rem", borderRadius: "5px", marginRight: "1%" }} onClick={() => decrease()} >-</button>
              <input type="number" value={currentOrderDetails.quantity || ''}style={{ width: "1.5rem", borderRadius: "10px" }} onChange={(e) => console.log(e.target.value)}></input>
              <button className='btn btn-danger btn-sm' style={{ width: "1.5rem", borderRadius: "5px", marginLeft: "1%" }} onClick={() => increase()}>+</button> */}
              <Card.Text className='cartProductPrice'>
                Price: {product.price}$
              </Card.Text>
              <Button onClick={() => removeProduct(product)} variant="warning">Remove from Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
      
  }

  return (
    <>
      <Container id='cartPage'>
        <h1 id='cartTitle'>Your Cart</h1>
        {cart.map(product => createProduct(product))}
      {cart.length > 0 ?<div id='totalPrice'>
        <h3 >Total Price: {totalPrice}$</h3>
        <Button id='checkOut' variant="dark" >Checkout</Button>
      </div>
      :<h2 id='emptyMessage'> You cart is empty. </h2>}
      </Container>
    <Footer></Footer>
    </>
  )
}

export default Cart