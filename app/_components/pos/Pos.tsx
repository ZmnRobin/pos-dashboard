'use client'
// Pos.tsx
import React, { useState } from 'react';
import Card from './Card';
import Cart from './Cart';

interface FoodItem {
  _id: number;
  title: string;
  quantity: number;
  image: string;
}

const data: FoodItem[] = [
  {
    _id: 1,
    title: "Set Menu 1",
    quantity: 10,
    image: '/images/download.jpeg',
  },
  {
    _id: 2,
    title: "Set Menu 2",
    quantity: 10,
    image: '/images/download.jpeg',
  },
  {
    _id: 3,
    title: "Khacchi Half",
    quantity: 10,
    image: '/images/download.jpeg',
  },
  {
    _id: 4,
    title: "Khacchi Full",
    quantity: 10,
    image: '/images/download.jpeg',
  },
  {
    _id: 5,
    title: "Morog Polao",
    quantity: 10,
    image: '/images/download.jpeg',
  },
];

const Pos: React.FC = () => {
    const [cartItems, setCartItems] = useState<FoodItem[]>([]);
  
    const addToCart = (foodItem: FoodItem) => {
      const existingItemIndex = cartItems.findIndex((item) => item._id === foodItem._id);
  
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, { ...foodItem, quantity: 1 }]);
      }
    };
  
    const increaseQuantity = (itemId: number) => {
      const updatedCartItems = cartItems.map((item) =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    };
  
    const decreaseQuantity = (itemId: number) => {
      const updatedCartItems = cartItems.map((item) =>
        item._id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCartItems);
    };
  
    const removeFromCart = (itemId: number) => {
      const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
      setCartItems(updatedCartItems);
    };
  
    return (
      <div className="flex">
        <div className="flex-1">
          <div className="flex flex-wrap">
            {data.map((food) => (
              <Card key={food._id} {...food} onAddToCart={() => addToCart(food)} />
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <Cart
            cartItems={cartItems}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onDelete={removeFromCart}
          />
        </div>
      </div>
    );
  };
  
  export default Pos;