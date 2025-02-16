import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartSummary = () => {
  const { cart, setCart } = useContext(CartContext);

  if (!cart || cart.length === 0) return <p className="text-gray-500">Cart is empty</p>;

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sendOrderViaWhatsApp = () => {
    if (cart.length === 0) return alert("Your cart is empty!");

    const phoneNumber = "+2348130717028";
    let message = "🛒 *New Order*%0A%0A";

    cart.forEach((item) => {
      message += `📌 *${item.name}* x ${item.quantity} - $${item.price * item.quantity}%0A`;
    });

    message += `%0A💰 *Total: $${totalPrice}*%0A%0A🚀 *Please confirm my order!*`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");

    setCart([]); // Clear cart after order
    localStorage.removeItem("cart");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <p className="text-gray-700">Total: <span className="text-lg font-bold">${totalPrice}</span></p>

      <button
        onClick={sendOrderViaWhatsApp}
        className="mt-4 w-full bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
      >
        📲 Order via WhatsApp
      </button>
    </div>
  );
};

export default CartSummary;
