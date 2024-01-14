import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#69432B] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Admin Dashboard</div>
        <div className="flex space-x-4">
          <a href="/dashboard" className="text-white">Dashboard</a>
          <a href="{/product-management}" className="text-white">Products</a>
          <a href="{/order-ad}" className="text-white">Orders</a>
          <a href="#" className="text-white">Reports</a>
          <a href="/" className="text-white">Log out</a>
          {/* Thêm các liên kết khác tại đây */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;