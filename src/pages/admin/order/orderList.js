// src/components/OrderList.js
import React from 'react';

const OrderList = ({ orders, onDeleteOrder }) => {
  return (
    <ul className="mt-4">
      {orders.map((order) => (
        <li key={order.id} className="bg-white p-4 mb-2 shadow-md rounded-md">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg">
                {order.customerName} - {order.productName} ({order.quantity} items)
              </span>
            </div>
            <div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onDeleteOrder(order.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrderList;
