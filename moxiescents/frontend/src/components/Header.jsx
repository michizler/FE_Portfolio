import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // ✅ Import Cart Context
import logo from "../assets/moxie_logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useContext(CartContext); // ✅ Access cart data

  const getLinkClasses = (path) => {
    return `p-4 text-center md:text-zinc-600 md:hover:text-driftwood ${
      location.pathname === path
        ? "text-driftwood font-bold"
        : "text-gray-600 hover:text-driftwood"
    }`;
  };

  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <div className="flex items-center justify-between px-10 py-4 text-zinc-600 bg-bush">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-12 w-12 object-contain"
            src={logo}
            alt="Moxie Logo"
          />
          <h1 className="text-xl md:text-3xl text-punga font-semibold font-mono tracking-widest ml-4">
            MoxieScents
          </h1>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="block md:hidden p-2 text-zinc-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute top-16 left-0 w-full bg-bush z-50 md:relative md:top-0 md:left-0 md:flex md:w-auto md:bg-transparent transition-transform duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <a
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/");
              }}
              className={getLinkClasses("/")}
            >
              Home
            </a>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/shop");
              }}
              className={getLinkClasses("/shop")}
            >
              Shop
            </a>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/blog");
              }}
              className={getLinkClasses("/blog")}
            >
              Blog
            </a>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/about");
              }}
              className={getLinkClasses("/about")}
            >
              About Us
            </a>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/contact");
              }}
              className={getLinkClasses("/contact")}
            >
              Contact Us
            </a>

            {/* Cart Icon with Item Count - FIXED FOR SMALL SCREENS */}
            <div
              className="relative flex items-center justify-center mt-2 md:mt-0"
              onClick={() => navigate("/cart")}
            >
              <span className="text-2xl">🛒</span>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
