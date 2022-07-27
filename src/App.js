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
import {getProducts, getImages, getCategories} from './DAL/api.js'
import { useState, useEffect} from 'react'
import './App.css';

function App() {
  let [products, setProducts] = useState([])
  let [images, setImages] = useState([])
  let [orders, setOrders] = useState([])
  let [categories, setCategories] = useState({allCategories:[], selectedCategory:undefined})
  useEffect(() => 
    async () => {
        products = await getProducts()
        images = await getImages()
        categories.allCategories = await getCategories()
        setCategories({...categories})
        setProducts([...products])
        setImages([...images])
    }, [])
  return (
    <div>
      <Header></Header>
        {/* <ProductPage product={product} images={images}></ProductPage> */}
        {/* <Homepage products={products} images={images} 
        categories={categories} setCategories={setCategories}></Homepage> */}
        <UserArea user={{password:'123456', firstName: 'Assaf', lastName:'Suliman',
        email:'Asafaaaad2@gmail.com', address:'Moshav Ahihud Number 44',
        birthday:'01/03/1996'}}></UserArea>
      <Footer></Footer>
    </div>
    
  );
}

export default App;