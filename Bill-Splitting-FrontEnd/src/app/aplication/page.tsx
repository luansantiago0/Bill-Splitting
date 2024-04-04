"use client";
import React, { useState } from "react";
import OrderForm from "../../components/OrderForm";
import FriendForm from "../../components/FriendForm";
import BillDisplay from "../../components/BillDisplay";

interface Order {
  name: string;
  price: number;
  friends: string[];
}

const Apps: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const handleCreateOrder = (orderName: string, price: string) => {
    const newOrder: Order = {
      name: orderName,
      price: parseFloat(price),
      friends: [],
    };
    setOrders([...orders, newOrder]);
  };

  const handleAddFriend = (orderIndex: number, friendName: string) => {
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].friends.push(friendName);
    setOrders(updatedOrders);
  };

  const handleRemoveFriend = (orderIndex: number, friendIndex: number) => {
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].friends.splice(friendIndex, 1);
    setOrders(updatedOrders);
  };

  return (
    <div className="container">
      <h1>Bill Splitting Application</h1>
      <div className="input-container">
        <OrderForm onCreateOrder={handleCreateOrder} />
      </div>
      {orders.map((order, index) => (
        <div className="order" key={index}>
          <h2>{order.name}</h2>
          <FriendForm orderIndex={index} onAddFriend={handleAddFriend} />
          {order.friends.length > 0 && (
            <BillDisplay
              order={order.name}
              price={order.price}
              friends={order.friends}
              onRemoveFriend={(friendIndex: number) =>
                handleRemoveFriend(index, friendIndex)
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Apps;
