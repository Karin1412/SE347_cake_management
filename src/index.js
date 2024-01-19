import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './auth/login';
import Signup from './auth/signup';
import ProductDetail from './views/productDetail';
import AboutUs from './views/aboutUs'
import Home from './views/home'
import Cart from './views/cartview'
import Payment from './views/payment'
import Category from './views/categories';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/product-detail" element={<ProductDetail/>}></Route>
      
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen = {false}/>
    </QueryClientProvider>
    
  </React.StrictMode>
  </Provider>
  
);