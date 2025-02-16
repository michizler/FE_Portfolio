/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; // Import Cart Context

const CartItem = ({ item }) => {
  const { cart, setCart } = useContext(CartContext); // Use context to access cart state

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem._id === id ? { ...cartItem, quantity: Math.max(1, cartItem.quantity + change) } : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem._id !== id));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border-b py-4 gap-4">
      {/* Product Image & Name */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow" />
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-500">${item.price}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item._id, -1)}
          className="px-3 py-1 bg-gray-300 text-black rounded-lg sm:w-auto w-10"
        >
          ➖
        </button>
        <span className="text-lg">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item._id, 1)}
          className="px-3 py-1 bg-gray-300 text-black rounded-lg sm:w-auto w-10"
        >
          ➕
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item._id)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 w-full sm:w-auto"
      >
        ❌ Remove
      </button>
    </div>
  );
};

export default CartItem;
