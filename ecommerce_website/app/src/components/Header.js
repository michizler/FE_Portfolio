import React from 'react';
// import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ShopLogo</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cart-icon">🛒</div>
    </header>
  );
};

export default Header;
