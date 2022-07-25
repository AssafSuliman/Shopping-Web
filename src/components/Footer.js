import { Container } from "react-bootstrap"
import '../styles/Footer.css'

function Footer () {
    return (
    <footer className='bg-secondary'>
      <Container fluid className='container'>
        <div id="aboutus">
          <p>All rights preserved</p>
        </div> 
      </Container>
    </footer>
    )
}

export default Footer