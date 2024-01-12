import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Login from './auth/login';
// import Signup from './auth/signup';
// import ProductDetail from './views/productDetail';
// import AboutUs from './views/aboutUs'
// import Home from './views/home'
// import Cart from './views/cartview'
// import NavBar from './components/productDetails/navbar';
import Support from './views/support'
// import ContactUs from './views/contact_us'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login/>}></Route> */}
        <Route path="/" element={<Support />} ></Route>
        {/* <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/product-detail" element={<ProductDetail/>}></Route>
        <Route path='/nav-bar' element={<NavBar/>}></Route>
        <Route path="/contact_us" element={<ContactUs />} ></Route> */}
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

