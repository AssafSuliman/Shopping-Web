import Header from './Header.js'
import Footer from './Footer.js'
import '../styles/ProductPage.css'
import { useLocation, useParams } from 'react-router-dom'
import {getImagesByProductId, getProductByID} from '../DAL/api.js'
import { useState, useEffect} from 'react'
import { UseParams } from 'react-router-dom'

function ProductPage () {
  /* const location = useLocation()
  const product = location.state */
  let {productId} = useParams()
  productId = Number(productId)
  let [product, setProduct] = useState({})
  let [images, setImages] = useState([])
  
  async function getProductImages () {
    product = await getProductByID(productId)
    images = await getImagesByProductId(productId)
    setProduct({...product})
    setImages([...images])
  }

  useEffect(() => {
    getProductImages()
  },[])

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
                  <img src={images[0]} className="d-block w-100" alt="impact driver and drill"></img>
                </div>
                {images.slice(1,images.length).map((image, index) => <div key={index} className="carousel-item">
                  <img src={image} className="d-block w-100" alt="drill"></img></div>)}
                {/* <div className="carousel-item">
                  <img src={images[2]} className="d-block w-100" alt="impact-driver"></img>
                </div> */}
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
              <h5 className="card-title">{product.productName}</h5>
              <div className="line"></div>
              <h6>Description:</h6>
              <p className="card-text">{product.description}</p>
              <p className="card-text"><small className="text-muted">cannot be shipped</small></p>
              <div className="line"></div>
              <h5>{`Price: ${product.price}$`}</h5>
              <button type="button" className="btn btn-primary">Buy now!</button>
              <button type="button" className="btn btn-info">Add to cart</button>
            </div>
          </div>
      </div>
    </main>
    <Footer></Footer>
    </div>
    )}

export default ProductPage