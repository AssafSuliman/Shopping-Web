import { useEffect, useState } from 'react'
import {Container, Button, Card, ListGroup, Form, Row, Col} from 'react-bootstrap'
import { getOrders } from '../DAL/api'
import '../styles/Orders.css'
import Footer from './Footer'

function Orders () {

  let [orders, setOrders] = useState([])

  const allOrders = async () => {
    orders = await getOrders()
    setOrders([...orders])
  }
  useEffect(() => {
    allOrders()
  },[])

  console.log(orders);

    return (
    <>
      <Container id='ordersPage'>
        <h1>Your Orders</h1>
        {orders.length> 0? orders.map(order => 
          <Card className='order' key={order.id}>
          <Card.Header className='orderHeader'>
            <div>
              <span className='orderHeaderDetails'>Order # {order.order_id}</span>
            </div>
            <div style={{marginLeft:'100px'}}>
              <span>Order placed:</span><br></br>
              <span className='orderHeaderDetails'>{order.order_date.slice(0,10)}</span>
            </div>
            <div style={{marginLeft:'100px'}}>
              <span>Total cost:</span><br></br>
              <span className='orderHeaderDetails'>{order.order_cost}$</span>
            </div>
          </Card.Header>
          <Card.Body>
          {order.orderProducts.map(product => 
          <>
          <Row key={product.product_id}>
            <Col lg={3}>
              <Card.Img className='orderImg cardImg img-fluid rounded-start' variant="top" src={product.product_img} alt={product.product_alt}/>
            </Col>
            <Col lg={9}>
              <br></br><br></br>
              <span style={{fontWeight:'bold'}}>{product.product_name}</span><br></br>
              <span>Amount : {product.amount}</span><br></br>
              <span> Unit price : {product.unit_price}$</span><br></br><br></br>
            </Col>
          <span className="border"></span>
          </Row>
          </>)}
          </Card.Body>
        </Card>)
        :<h2 id='emptyOrdersMessage'>You dont have any recent orders</h2>}
      </Container>
    <Footer></Footer>
    </>
    )
}

export default Orders