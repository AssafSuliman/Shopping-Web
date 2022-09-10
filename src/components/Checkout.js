import React, { useState } from 'react';
import { Table, Form , InputGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate} from 'react-router-dom'
import { newOrder } from '../DAL/api';

function Checkout({show, close, cart, total, product, gettingCart}) {
  /* console.log('hey');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); */

  const navigate = useNavigate()
  const [orderDetails, setOrderDetails] = useState({city:'', address:'', phone: ''})
  const [errorMessage, setErrorMessage] = useState(false)

  const editShippingDetails = ({target:{name,value}}) => {
    orderDetails[name] = value
    setOrderDetails({...orderDetails})
    console.log(orderDetails);
  }

  const clearFields = () => {
    setErrorMessage(false)
    setOrderDetails({city:'', address:'', phone: ''})
  }

  const makeOrder = async () => {
    if(orderDetails.city.length === 0  || orderDetails.address.length === 0 || orderDetails.phone.length === 0){
      setErrorMessage(true)
    }
    else {
      setErrorMessage(false)
      close()
      const order = {
        products:cart,
        cost:total,
        city:orderDetails.city,
        address:orderDetails.address,
        phone:orderDetails.phone
      }
      if(!cart) {
        order.products = product
        order.cost = product.price
      }
      const response = await newOrder(order)
      if(response) {
        alert('Your order has been made')
        if(cart) gettingCart()
      }
      else {
        alert('The order couldnt be made')
      }
    }
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        size="xl"
        show={show}
        onHide={close}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {cart? cart.map((product, index) => 
            <tr key={product.product_id}>
              <td>{index+1}</td>
              <td>{product.product_name}</td>
              <td>{product.amount}</td>
              <td>{product.price * product.amount}$</td>
            </tr>)
          : <tr>
              <td>{1}</td>
              <td>{product.product_name}</td>
              <td>{1}</td>
              <td>{product.price}$</td>
            </tr>}
          </tbody>
        </Table>
        
        <InputGroup className="mb-3" style={{margin:0}}>
          <InputGroup.Text id="city">City</InputGroup.Text>
          <Form.Control
            placeholder="city"
            aria-label="city"
            aria-describedby="city"
            name="city"
            onChange={editShippingDetails}
          />
        </InputGroup>
        <InputGroup className="mb-3" style={{margin:0}}>
          <InputGroup.Text id="shippingAddress">Shipping address</InputGroup.Text>
          <Form.Control
            placeholder="address"
            aria-label="address"
            aria-describedby="shippingAddress"
            name="address"
            onChange={editShippingDetails}
          />
        </InputGroup>
        <InputGroup className="mb-3" style={{margin:0}}>
          <InputGroup.Text id="phoneNumber">Phone</InputGroup.Text>
          <Form.Control
            placeholder="phone"
            aria-label="phone"
            aria-describedby="phoneNumber"
            name="phone"
            onChange={editShippingDetails}
          />
        </InputGroup>
        {errorMessage? <span style={{fontSize:'20px'}}>Please fill up all the fields</span>
        : ''}
        
        <p style={{fontSize:'20px', marginTop:'20px'}}>
          *Delivery time up to 3 days<br></br>
        </p>
        <h2 style={{textAlign:'end'}}>Summary : {total? total:product.price }$</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            close()
            clearFields()
            }}>
            Cancel
          </Button>
          <Button onClick={makeOrder}
          variant="primary">Proceed to payment</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Checkout