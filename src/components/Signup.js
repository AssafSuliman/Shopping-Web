import Header from "./Header"
import Footer from "./Footer"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container'
import {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import InputText from './InputText.js'
import {validate} from './common/validations.js'
import {formData, inputsHandler, validateForm} from './common/FormData.js'
import '../styles/Signup.css'
import { signup } from "../DAL/api"

function Signup () {
	const navigate = useNavigate()
	const [signupData, setSignupData] = 
	useState({'user_name':{...formData.user_name}, 'password':{...formData.password},
	 'confirmPassword':{...formData.confirmPassword},'first_name':{...formData.first_name},
	 'last_name':{...formData.last_name},'email':{...formData.email},'confirmEmail':{...formData.confirmEmail},
	 'city':{...formData.city},'address':{ ...formData.address},'birthday':{...formData.birthday}})

	const sendDetails = async (e) => {
		e.preventDefault()
		if(!validateForm(setSignupData, signupData)){
			const customer = {
				'user_name':signupData.user_name.value,
				'password':signupData.password.value,
				'first_name':signupData.first_name.value,
				'last_name':signupData.last_name.value,
				'email':signupData.email.value,
				'city':signupData.city.value,
				'address':signupData.address.value,
				'birthday':signupData.birthday.value
			}
			await signup(customer)
			alert('You have registered successfully')
			navigate('/login')
		}
	} 

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
					<Button onClick={sendDetails} className='submit' variant="primary" type="submit">
						Signup
					</Button>
				</Form>
				</Container>
			</Container>
			<Footer></Footer>	
		</div>
		)
}

export default Signup