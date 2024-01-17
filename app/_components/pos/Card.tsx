// Card.tsx
'use client'
// Card.tsx
import React from 'react';

interface FoodItem {
  _id: number;
  title: string;
  quantity: number;
  image: string;
}

interface CardProps extends FoodItem {
  onAddToCart: () => void;
}

const Card: React.FC<CardProps> = ({ title, quantity, image, onAddToCart }) => {
  return (
    <div className="bg-white p-4 shadow-md mb-4">
      <img src={image} alt={title} className="w-full mb-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>Quantity: {quantity}</p>
      <button onClick={onAddToCart} className="bg-blue-500 text-white px-2 py-1 mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;

