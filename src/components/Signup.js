import Header from "./Header"
import Footer from "./Footer"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container'
import {useState} from 'react'
import InputText from './InputText.js'
import {validate} from './common/validations.js'
import {formData, inputsHandler, validateForm} from './common/FormData.js'
import '../styles/Signup.css'

function Signup () {
	const [signupData, setSignupData] = 
	useState(formData)
    return (
			<div>
				
					<Container id='signupPage'>
						<h3 id='title'>Signup today and start shopping online now!</h3>
						<Container id='signupContainer'>
						<Form className='signupForm'>
							<h1>Signup</h1>
							<div className='border'></div>
							<InputText setData={setSignupData} data={signupData}
							inputsHandler={inputsHandler}></InputText>
							<Button className='submit' variant="primary" type="submit">
								Signup
							</Button>
						</Form>
						</Container>
					</Container>
				
			</div>
		)
}

export default Signup