"use client";
import React, { useState } from "react";

interface FriendFormProps {
  orderIndex: number;
  onAddFriend: (orderIndex: number, friendName: string) => void;
}

const FriendForm: React.FC<FriendFormProps> = ({ orderIndex, onAddFriend }) => {
  const [friendName, setFriendName] = useState("");

  const handleAddFriend = () => {
    onAddFriend(orderIndex, friendName);
    setFriendName("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Friend Name"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        className="friend-input"
      />
      <button onClick={handleAddFriend} className="friend-button ml-4">
        Add Friend
      </button>
    </div>
  );
};

export default FriendForm;
