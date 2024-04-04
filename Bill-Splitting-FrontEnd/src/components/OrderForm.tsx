"use client";
import React, { useState } from "react";

interface OrderFormProps {
  onCreateOrder: (orderName: string, price: string) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onCreateOrder }) => {
  const [orderName, setOrderName] = useState("");
  const [price, setPrice] = useState("");

  const handleCreateOrder = () => {
    onCreateOrder(orderName, price);
    setOrderName("");
    setPrice("");
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
        className="ml-4 friend-input"
      />
      <button onClick={handleCreateOrder} className="friend-button ml-4">
        Create Order
      </button>
    </div>
  );
};

export default OrderForm;
