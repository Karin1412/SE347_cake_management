// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#69432B] pl-28 pr-28 pt-4 pb-4 text-white">
      <ul className="flex justify-between">
        <li>
          <Link to="/product-management" className="hover:text-gray-300">Product Management</Link>
        </li>
        <li>
          <Link to="/category-management" className="hover:text-gray-300">Category Management</Link>
        </li>
        <li>
          <Link to="/product-input" className="hover:text-gray-300">Product Input</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
