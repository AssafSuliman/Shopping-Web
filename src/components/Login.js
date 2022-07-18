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
import './Login.css'
import {validate} from './common/validations.js'

function Login () {
  const [loginData, setLoginData] = useState({
    username:{
      id:'1',
      type:'text',
      name:'username',
      placeholder:'Enter Username',
      value:'',
      validations:{
        required:true,
        minLength: 2,
      },
      errors: []
    },
    password:{
      id:'2',
      type:'password',
      name:'password',
      placeholder:'Enter Password',
      value:'',
      validations:{
        required:true,
        minLength:8,
      },
      errors: []
  }})
  function inputsHandler({target:{name,value}}){
    loginData[name].value=value
    loginData[name].errors = validate(name, value, loginData[name].validations)
    setLoginData({...loginData})
  }

  function validateForm() {
    let notValid = false
    for(let input in loginData){
      loginData[input].errors = validate(input ,loginData[input].value, loginData[input].validations)
      if(loginData[input].errors.length) {
        notValid = true
      }
      setLoginData({...loginData})
    }
    return notValid
  }
    return (
      <div id="login">
        <Header></Header>
        <Container id="main">
          <Form className='form'>
            <h1>Login</h1>
            <div className='border'></div>
            <InputText data={loginData} inputsHandler={inputsHandler}></InputText>
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