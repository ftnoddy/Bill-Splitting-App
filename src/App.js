import React, { useState } from "react";
import OrderFrom from "./OrderFrom";
import FriendFrom from "./FirendFrom";
import BillDisplay from "./BillDisplay";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);

  const handleCreateOrder = (orderName, price) => {
    const newOrder = { name: orderName, price: parseFloat(price), friends: [] };
    setOrders([...orders, newOrder]);
  };

  const handleAddFriend = (orderIndex, friendName) => {
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].friends.push(friendName);
    setOrders(updatedOrders);
  };

  return (
    <div className="container">
      <h1>Bill Splitting Application</h1>
      <div className="input-container">
        <OrderFrom onCreateOrder={handleCreateOrder} />
      </div>
      {orders.map((order, index) => (
        <div className="order" key={index}>
          <h2>{order.name}</h2>
          <FriendFrom orderIndex={index} onAddFriend={handleAddFriend} />
          {order.friends.length > 0 && (
            <BillDisplay order={order.name} price={order.price} friends={order.friends} />
          )}
        </div>
      ))}
    </div>
  );
}

export default App;