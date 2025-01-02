import { useState } from "react";
import logo from "../src/assets/moxie_logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Hamburger Button */}
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
          className={`absolute top-16 left-0 w-full bg-bush md:relative md:top-0 md:left-0 md:flex md:w-auto md:bg-transparent ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row">
            <a
              href="#"
              className="p-4 text-center text-white hover:bg-zinc-700 md:text-zinc-600 md:hover:bg-transparent"
            >
              Home
            </a>
            <a
              href="#"
              className="p-4 text-center text-white hover:bg-zinc-700 md:text-zinc-600 md:hover:bg-transparent"
            >
              Shop
            </a>
            <a
              href="#"
              className="p-4 text-center text-white hover:bg-zinc-700 md:text-zinc-600 md:hover:bg-transparent"
            >
              Blog
            </a>
            <a
              href="#"
              className="p-4 text-center text-white hover:bg-zinc-700 md:text-zinc-600 md:hover:bg-transparent"
            >
              About Us
            </a>
            <a
              href="#"
              className="p-4 text-center text-white hover:bg-zinc-700 md:text-zinc-600 md:hover:bg-transparent"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
