import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header.js'
import ProductPage from './components/ProductPage.js'
import Homepage from './components/Homepage.js'
import Login from './components/Login';
import Signup from './components/Signup.js'
import UserArea from './components/UserArea'
import Orders from './components/Orders'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index  element={<Homepage />} />
        <Route path='products/:productId' element={<ProductPage/>} />
        <Route path='user' element={<UserArea/>} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
