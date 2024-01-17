'use client'
// Cart.tsx
import React from 'react';

interface FoodItem {
  _id: number;
  title: string;
  quantity: number;
  originalQuantity: number;
  image: string;
}

interface CartProps {
  cartItems: FoodItem[];
  onIncrease: (itemId: number) => void;
  onDecrease: (itemId: number) => void;
  onDelete: (itemId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item._id} className="mb-4">
          <div className="flex items-center justify-between">
            <p>{item.title}</p>
            <div className="flex items-center">
              <button onClick={() => onDecrease(item._id)} className="bg-yellow-500 text-white px-2 py-1">
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => onIncrease(item._id)} className="bg-green-500 text-white px-2 py-1">
                +
              </button>
              <button onClick={() => onDelete(item._id)} className="bg-red-500 text-white px-2 py-1 ml-2">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
