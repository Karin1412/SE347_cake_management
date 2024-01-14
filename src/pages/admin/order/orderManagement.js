// src/components/OrderManagementPage.js
import React, { useState } from 'react';
import OrderForm from './orderForm';
import OrderList from './orderList';
import Navbar from '../../../components/admin/navbar';
const OrderManagementPage = () => {
  const [orders, setOrders] = useState([]);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, { ...newOrder, id: Date.now() }]);
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div>
    <Navbar></Navbar>
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>

      <OrderForm onAddOrder={handleAddOrder} />

      <OrderList orders={orders} onDeleteOrder={handleDeleteOrder} />
    </div>
  );
};

export default OrderManagementPage;
