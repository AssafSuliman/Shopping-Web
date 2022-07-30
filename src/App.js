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
import Orders from './components/Orders'
import {getProducts, getImages, getCategories, getCustomer, getOrdersById} from './DAL/api.js'
import { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  let [products, setProducts] = useState([])
  let [images, setImages] = useState([])
  let [orders, setOrders] = useState([])
  let [categories, setCategories] = useState({allCategories:[], selectedCategory:undefined})
  let [customer, setCustomer] = useState({})
  useEffect(() => 
    async () => {
        products = await getProducts()
        images = await getImages()
        categories.allCategories = await getCategories()
        customer = await getCustomer()
        orders = await getOrdersById(1)
        setCategories({...categories})
        setProducts([...products])
        setImages([...images])
        setCustomer({...customer})
        setOrders([...orders])
    }, [])
  return (
    <div>
      {/* <Header></Header>
        <ProductPage product={product} images={images}></ProductPage>
        <Homepage products={products} images={images} ></Homepage>
        <UserArea user={customer}></UserArea>
        <Orders orders={orders}></Orders>
      <Footer></Footer> */}
    </div>
    
  );
}

export default App;