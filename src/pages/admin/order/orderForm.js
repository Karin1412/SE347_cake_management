// src/components/OrderForm.js
import React, { useState } from 'react';

const OrderForm = ({ onAddOrder }) => {
  const [order, setOrder] = useState({
    id: 0,
    customerName: '',
    productName: '',
    quantity: 0,
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddOrder(order);
    setOrder({
      id: 0,
      customerName: '',
      productName: '',
      quantity: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 border rounded-lg shadow-md bg-white">
      <label className="block mb-4">
        Customer Name:
        <input
          type="text"
          name="customerName"
          value={order.customerName}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <label className="block mb-4">
        Product Name:
        <input
          type="text"
          name="productName"
          value={order.productName}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <label className="block mb-4">
        Quantity:
        <input
          type="number"
          name="quantity"
          value={order.quantity}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Order
      </button>
    </form>
  );
};

export default OrderForm;
