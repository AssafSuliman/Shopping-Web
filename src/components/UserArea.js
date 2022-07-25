import Header from './Header.js'
import Footer from './Footer.js'
import '../styles/UserArea.css'
import {Container} from 'react-bootstrap'

function UserArea () {
    return (
        <div>
            <Container id='userArea'>
                <h1 id='accountTitle'>Your Account</h1>
                
            </Container>
        </div>
    )
}

export default UserArea