import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './auth/login';
import Home from './pages/admin/home';
import Signup from './auth/signup'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

