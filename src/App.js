import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import ProductPage from './components/ProductPage.js'
import Homepage from './components/Homepage.js'
import Login from './components/Login';
import FormData from './components/common/FormData.js';
import Signup from './components/Signup.js'
import UserArea from './components/UserArea'
import {getProducts, getImagesByProductId, getImages, getProductByID} from './DAL/api.js'
import { useState, useEffect} from 'react'
import './App.css';

function App() {
  let [product, setProduct] = useState({})
  let [images, setImages] = useState([])
  useEffect(() => async () => {
    product = await getProductByID(2)
    images = await getImagesByProductId(2)
    setProduct(product)
    setImages([...images])
  }, [])
  return (
    <div>
      <Header></Header>
        <ProductPage product={product} images={images}></ProductPage>
      <Footer></Footer>
    </div>
    
  );
}

export default App;