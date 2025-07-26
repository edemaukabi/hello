import React, { useState } from "react";
import "./App.css";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyStore</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
      <button className="menu-button">☰</button>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="hero">
      <h2>Welcome to MyStore</h2>
      <p>Explore our exclusive collection of amazing products</p>
      <Button text="Shop Now" onClick={() => alert("Let's go shopping!")} />
    </section>
  );
};

// Button Component
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="custom-button">
      {text}
    </button>
  );
};

// ProductCard Component
const ProductCard = ({ title, image, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <Button text="Buy Now" onClick={() => alert(`Buying ${title}`)} />
    </div>
  );
};

// Products Section
const Products = () => {
  const [products] = useState([
    {
      title: "Wireless Headphones",
      image: "https://source.unsplash.com/featured/?headphones",
      price: 99,
    },
    {
      title: "Smartwatch",
      image: "https://source.unsplash.com/featured/?smartwatch",
      price: 149,
    },
    {
      title: "Sneakers",
      image: "https://source.unsplash.com/featured/?sneakers",
      price: 89,
    },
  ]);

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

// App Component
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
};

export default App;
