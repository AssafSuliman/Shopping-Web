import Header from "./Header"
import Footer from "./Footer"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import {useState} from 'react'
import InputText from './InputText.js'

function Login () {
  const [loginData, setLoginData] = useState({
    username:{
      id:'1',
      type:'text',
      name:'Username',
      placeholder:'Enter Username',
      value:'',
      validations:{
        required:true,
        minLength: 2,
      },
      error:'',
      possibleErrors:{emptyError:'Please enter username', lengthError: 'must contain atleast 2 characters'}
    },
    password:{
      id:'2',
      type:'password',
      name:'Password',
      placeholder:'Enter Password',
      value:'',
      validations:{
        required:true,
        minLength:8,
      },
      error:'',
      possibleErrors:{emptyError:'Please enter password', lengthError: 'must contain atleast 8 characters'}

    }})
    return (
      <div id="login">
        <Header></Header>
        <Container id="main">
          <Form className='form'>
            <h1>Login</h1>
            <div className='border'></div>
            <InputText data={loginData}></InputText>
            <Button className='submit' variant="primary" type="submit">
              Login
            </Button>
            <a href=''>forgot password</a>
          </Form>
          </Container>
        <Footer></Footer>
      </div>
    )
  }
  
  export default Login
  
  
  /*   <Col>
      <Form.Label htmlFor={key}>
        {loginData[key].name}
      </Form.Label>
      <InputGroup>
        <InputGroup.Text></InputGroup.Text>
        <Form.Control id={key} name={key} placeholder={loginData[key].placeholder}
        type='text' onBlur={inputsHandler} isInvalid={loginData[key].error}/>
        <Form.Control.Feedback type='invalid'>
          {loginData[key].error}
        </Form.Control.Feedback>
      </InputGroup>
    < */