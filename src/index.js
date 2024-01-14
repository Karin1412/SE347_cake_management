import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './auth/login';
import Signup from './auth/signup';
import ProductDetail from './views/productDetail';
import AboutUs from './views/aboutUs'
import Home from './views/home'
import Cart from './views/cartview'
import NavBar from './components/productDetails/navbar';
import HomeAd from './pages/admin/home';
import ProductManagement from './pages/admin/productManagement/productManagement';
import OrderManagementPage from './pages/admin/order/orderManagement';
import CategoryManagementPage from './pages/admin/productManagement/categoryPage';
import ProductInputPage from './pages/admin/productManagement/productInputPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/product-detail" element={<ProductDetail/>}></Route>
        <Route path='/nav-bar' element={<NavBar/>}></Route>
        <Route path="/home-ad" element={<HomeAd/>}></Route>
        <Route path="/product-management" element={<ProductManagement/>}></Route>
        <Route path='/order-ad' element={<OrderManagementPage/>}></Route>
        <Route path='/category-management' element={<CategoryManagementPage/>}></Route>
        <Route path='/product-input' element={<ProductInputPage/>}></Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

