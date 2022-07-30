import Header from './Header.js'
import Footer from './Footer.js'
import '../styles/UserArea.css'
import {Container, Button, Card, ListGroup, Form} from 'react-bootstrap'
import { useState, useEffect} from 'react'
import InputText from './InputText.js'
import {formData, inputsHandler, validateForm} from './common/FormData.js'
import {getCustomer} from '../DAL/api.js'
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers.js'

function UserArea () {
  
  let [user, setUser] = useState({})
  const [editData, setEditData] = useState(formData)
  const [editInput, setEditInput] = useState(undefined)
  const accountOptions = [
    {img:'ProductPageImgs/orders.png' ,name:'Your Orders', description:'Review all your previous orders'},
    {img:'ProductPageImgs/cart.png', name:'Your Cart', description:'Go to your cart in order to make an order'},
    {img:'ProductPageImgs/wishlist.png', name:'Your Wishlist', description:'Check if your desired products are available!'}]
  
  async function getUser () {
    console.log('heyyyyyy')
    user = await getCustomer()
    setUser({...user})
  }

  useEffect(() => {
    getUser()
  }, [])

  const createDetails = () => {
    return (
    Object.keys(user).map((detail, index) => detail != 'username'?
    <ListGroup.Item key={index} className='details'>{`${editData[detail].name}: `}
      <span>{detail != 'password'? user[detail]: '********'}</span>
      <Button onClick={() => editDetails(detail)}>Update</Button>
    </ListGroup.Item>:undefined))
  }

  const updateValue = (e) => {
    setEditInput({...editInput, value:e.target.value})
  }

  const editDetails = (key) => {
    if(!editInput){
    setEditInput({name:key, input:editData[key].name,
    value: user[key], type: editData[key].type})
    }
  }
  
  const saveDetails = () => {
    let valid = inputsHandler({target:{name:editInput.name, value:editInput.value}}, setEditData, editData)
      if(valid) setEditInput(undefined)
  }

    return (
        <div>
          {/* <Header></Header> */}
            <Container id='userArea'>
                <h1 id='accountTitle'>Your Account</h1>
              <div id='accountContent'>
                <Card className='accountElements' style={{width:'500px', height:'fit-content'}}>
                  <Card.Body>
                    <Card.Title>Your Details</Card.Title>
                  </Card.Body>
                  
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item id='usernameDetail'>Username:<span style={{marginLeft:'95px'}}>{user.username}</span></ListGroup.Item>
                    {createDetails()}
                  </ListGroup>
                
                  {editInput? <Card id='editInput'><Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{`New ${editInput.input}`}</Form.Label>
                    <Form.Control onBlur={updateValue} defaultValue={editInput.value} type={editInput.type}/>
                    <span style={{display:'block'}}>{editData[editInput.name].errors[0]}</span>
                    <Button onClick={saveDetails} style={{marginTop:'10px'}}>Save</Button>
                    </Form.Group>
                  </Card>: undefined}
                </Card>
              
              <div className='accountOptions'>
                {accountOptions.map((option, index) => 
                  <div key={index} className="card mb-3 accountElements orders">
                  <div className="row g-0">
                    <div id='ordersImgDiv' className="col-md-2">
                      <img src={option.img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{option.name}</h5>
                        <p className="card-text">{option.description}</p>
                        <p className="card-text"><small className="text-muted"></small></p>
                      </div>
                    </div>
                  </div>
                </div>)}
        
              </div>
            </div>
          </Container>
          <Footer></Footer>
        </div>
    )
}

export default UserArea