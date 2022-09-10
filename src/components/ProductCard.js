import { Button, Card } from 'react-bootstrap'
import {addToCart, getImagesByProductId} from '../DAL/api.js'
import {useState ,useEffect} from 'react'
import '../styles/ProductCard.css'
import {  Link } from "react-router-dom";
import Checkout from './Checkout.js';

function ProductCard ({product, image}) {;

    const [showCheckout, setShowCheckout] = useState(false);

    const addProductToCart = async (product) => {
        await addToCart(product.product_id)
        alert(`${product.product_name} , has been added to your cart`)
    }

    return (
      <Card className='productCard'>
        <Card.Img className='cardImg' variant="top" src={image}/>
        <Card.Body style={{padding:'20px' ,display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Card.Title>{product.product_name}</Card.Title>
          <Card.Text>
            {product.description? `${product.description.slice(0, 60)}....`: ''}
          </Card.Text>
            <h5 className='cardPrice'>{`Price: ${product.price}$`}</h5>
          <div className='cardButtons'>
            <Button onClick={() => setShowCheckout(true)}
             variant="primary">Buy now</Button>
            <Checkout show={showCheckout} close={() => setShowCheckout(false)}
              product={product}></Checkout>
            <Button onClick={() => addProductToCart(product)} className='addToCart' variant="warning">Add to cart</Button>
            <Link className='btn btn-success addToCart' variant='success' 
            to={`products/${product.product_id}`} state={product}>More Details</Link>
                    {/* <Button className='addToCart' variant="success">More Details</Button> */}
          </div>
        </Card.Body>
      </Card>
    )
}

export default ProductCard