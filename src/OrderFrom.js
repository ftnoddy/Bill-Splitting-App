// OrderForm.js
import React, { useState } from 'react';

function OrderFrom({ onCreateOrder }) {
  const [orderName, setOrderName] = useState('');
  const [price, setPrice] = useState('');

  const handleCreateOrder = () => {
    onCreateOrder(orderName, price);
    setOrderName('');
    setPrice('');
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Order Name"
        value={orderName}
        onChange={(e) => setOrderName(e.target.value)}
        className="friend-input"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="friend-input"
      />
      <button onClick={handleCreateOrder} className="friend-button">Create Order</button>
    </div>
  );
}
export default OrderFrom;
