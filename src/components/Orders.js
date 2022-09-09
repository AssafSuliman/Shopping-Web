import {Container, Button, Card, ListGroup, Form} from 'react-bootstrap'
import '../styles/Orders.css'
import Footer from './Footer'

function Orders (orders) {
    return (
    <>
      <Container id='ordersPage'>
        <h1>Your Orders</h1>
      </Container>
    <Footer></Footer>
    </>
    )
}

export default Orders