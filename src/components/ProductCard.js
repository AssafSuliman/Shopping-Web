import { Button, Card } from 'react-bootstrap'
import {getImagesByProductId} from '../DAL/api.js'
import {useState ,useEffect} from 'react'
import '../styles/ProductCard.css'


function ProductCard ({product, image}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImg' variant="top" src={image}/>
            <Card.Body style={{padding:'20px' ,display:'flex', flexDirection: 'column'}}>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>
                    {`${product.description.slice(0, 60)}. . . . .`}
                </Card.Text>
                <h3 className='cardPrice'>{product.price}</h3>
                <div className='cardButtons'>
                    <Button variant="primary">Buy now</Button>
                    <Button className='addToCart' variant="warning">Add to cart</Button>
                    <Button className='addToCart' variant="success">More Details</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProductCard