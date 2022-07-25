import Header from "./Header"
import Footer from "./Footer"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container'
import {useState} from 'react'
import InputText from './InputText.js'
import '../styles/Login.css'
import {validate} from './common/validations.js'
import {formData, inputsHandler, validateForm} from './common/FormData.js'

function Login () {
  const [loginData, setLoginData] = 
  useState({'username': formData.username, 'password': formData.password})
    return (
      <div id="login">
        <Header></Header>
        <Container id="main">
          <Form className='loginForm'>
            <h1>Login</h1>
            <div className='border'></div>
            <InputText setData={setLoginData} data={loginData}
            inputsHandler={inputsHandler}></InputText>
            <Button className='loginSubmit' variant="primary" type="submit">
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