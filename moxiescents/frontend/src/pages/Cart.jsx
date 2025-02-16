import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">🛒 Your Shopping Cart</h1>

        {cart?.length > 0 ? (  // ✅ Ensure cart exists
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
              {cart.map((item) => (
                <CartItem key={item._id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
              ))}
            </div>
            <CartSummary />  {/* ✅ Ensure CartSummary is correctly used */}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty. Start shopping!</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
