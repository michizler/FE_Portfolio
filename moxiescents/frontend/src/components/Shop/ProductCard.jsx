/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md p-4">
      <img
        className="h-48 w-full object-cover rounded-md mb-4"
        src={product.image}
        alt={product.name}
      />
      <h2 className="text-lg font-semibold text-brown">{product.name}</h2>
      <p className="text-yellow-500">{"⭐".repeat(Math.floor(product.rating))}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold text-green-600">${product.price}</span>
        {product.discount && (
          <span className="line-through text-red-500">${product.discount}</span>
        )}
        <button className="text-white bg-driftwood px-4 py-2 rounded hover:bg-brown">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
