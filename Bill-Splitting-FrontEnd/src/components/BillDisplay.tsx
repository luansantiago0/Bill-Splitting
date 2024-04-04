import React from "react";

interface BillDisplayProps {
  order: string;
  price: number;
  friends: string[];
  onRemoveFriend: (friendIndex: number) => void; // Adiciona a propriedade onRemoveFriend
}

const BillDisplay: React.FC<BillDisplayProps> = ({
  order,
  price,
  friends,
  onRemoveFriend,
}) => {
  const handleRemoveFriend = (index: number) => {
    // Chama a função onRemoveFriend para remover o amigo
    onRemoveFriend(index);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <p className="text-lg font-semibold">Bill for {order}:</p>
      <p className="text-gray-700">Total Price: ${price}</p>
      {friends.length > 0 && (
        <div className="mt-4">
          <p className="text-gray-700">
            Each person will pay: ${(price / (friends.length + 1)).toFixed(2)}
          </p>
          <p className="text-gray-700 mt-4 font-bold">Participants:</p>
          <ul className="list-disc ml-6">
            <li className="text-gray-700">{order}</li>
            {/* Include the owner of the bill */}
            {friends.map((friend, index) => (
              <li key={index} className="text-gray-700 flex items-center">
                <span>{friend}</span>
                <button
                  onClick={() => handleRemoveFriend(index)} // Chama handleRemoveFriend com o índice do amigo
                  className="ml-2 text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BillDisplay;
