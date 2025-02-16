/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md p-4 transition-all duration-300">
      <img
        className="h-48 w-full object-cover rounded-md mb-4"
        src={product.image}
        alt={product.name}
      />
      <h2 className="text-lg font-semibold text-brown">{product.name}</h2>
      <p className="text-yellow-500">
        {"⭐".repeat(Math.floor(product.rating))}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold text-green-600">
          ${product.price}
        </span>

        <button
          className={`text-white px-4 py-2 rounded transition-all duration-300 ${
            added ? "bg-green-600" : "bg-driftwood hover:bg-brown"
          }`}
          onClick={handleAddToCart}
        >
          {added ? "✔ Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
