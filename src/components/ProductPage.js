import Header from './Header.js'
import Footer from './Footer.js'
import '../styles/ProductPage.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {addToCart, checkCustomer, getImagesByProductId, getProductByID, products} from '../DAL/api.js'
import { useState, useEffect} from 'react'
import Checkout from './Checkout.js'


function ProductPage () {
  let {productId} = useParams()
  productId = Number(productId)
  let [product, setProduct] = useState()
  const navigate = useNavigate()
  const [showCheckout, setShowCheckout] = useState(false);
  
  async function getProductImages () {
    product = await getProductByID(productId)
    console.log(product);
    setProduct({...product})
  }

  useEffect(() => {
    getProductImages()
  },[])


  const checkIfLoggedIn = async (product) => {
    if(!await checkCustomer()){
      navigate('/login')
    }
    else if(product){
        await addToCart(product.product_id)
        alert(`${product.product_name} , has been added to your cart`)
      }
    else {
        setShowCheckout(true)
      }

  }

    return (
    <div>
    <main id='productPage'>
      <div className="container productContainer">
        <div className="row">
          <div className="col1 col-lg-6 col-sm-12">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="false">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="false" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={product?.images[0].image_src} className="d-block w-100" alt={product?.images[0].image_alt}></img>
                </div>
                {product?.images.slice(1,product.images.length).map(image => <div key={image.image_id} className="carousel-item">
                  <img src={image.image_src} className="d-block w-100" alt={image.image_alt}></img></div>)}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
            <div className="col2 col-lg-6 col-sm-12">
              <h5 className="card-title">{product?.product_name}</h5>
              <div className="line"></div>
              <h6>Description:</h6>
              <p className="card-text">{product?.description}</p>
              <p className="card-text"><small className="text-muted">Estimated ship time up to 3 days</small></p>
              <div className="line"></div>
              <h5>{`Price: ${product?.price}$`}</h5>
              {product?.units_in_stock > 0 ? 
              <>
              <button onClick={() => checkIfLoggedIn()} type="button" className="btn btn-primary">Buy now!</button>
              <button onClick={() => checkIfLoggedIn(product)} type="button" className="btn btn-info">Add to cart</button>
              </>
              : <span>Out of stock</span>}
              <Checkout show={showCheckout} close={() => setShowCheckout(false)}
              product={product}></Checkout>
            </div>
          </div>
      </div>
    </main>
    <Footer></Footer>
    </div>
    )}

export default ProductPage