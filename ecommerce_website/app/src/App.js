import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
