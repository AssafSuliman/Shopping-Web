import { Button, Card } from 'react-bootstrap'
import {getImagesByProductId} from '../DAL/api.js'
import {useState ,useEffect} from 'react'
import '../styles/ProductCard.css'
import {  Link } from "react-router-dom";


function ProductCard ({product, image}) {
    return (
        <Card className='productCard'>
            <Card.Img className='cardImg' variant="top" src={image}/>
            <Card.Body style={{padding:'20px' ,display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>
                    {product.description? `${product.description.slice(0, 60)}....`: ''}
                </Card.Text>
                    <h5 className='cardPrice'>{`Price: ${product.price}$`}</h5>
                <div className='cardButtons'>
                    <Button variant="primary">Buy now</Button>
                    <Button className='addToCart' variant="warning">Add to cart</Button>
                    <Link className='btn btn-success addToCart' variant='success' 
                    to={`products/${product.id}`} state={product}>More Details</Link>
                    {/* <Button className='addToCart' variant="success">More Details</Button> */}
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProductCard