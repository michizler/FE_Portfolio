import React from 'react';
import Product from './Product';
// import './ProductList.css';

const ProductList = () => {
  const products = [
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Gf0017z3e8OHkoQGWZ6DhxmolBDIRhBE_g&s', name: 'Product 1', price: 29.99 },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4pV8qMocyV5cOttM4OgGMI4n_jVZNbGarg&s', name: 'Product 2', price: 39.99 },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEO_pLSpMWYdRLzaezDMIQSfxedNxjS-9Og&s', name: 'Product 3', price: 49.99 },
    // Add more products as needed
  ];

  return (
    <section className="product-list">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

export default ProductList;
