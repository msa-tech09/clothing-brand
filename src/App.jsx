import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Product from "./components/Product";
import "./App.css";

const App = () => {
  const products = [
    {
      name: "T-Shirt",
      image: "t-shirt.jpg",
      price: 20,
      description: "A comfortable and stylish t-shirt.",
    },

    {
      name: "Shoes",
      image: "shoes.jpg",
      price: 40,
      description: "A pair of high-quality shoes.",
    },

    {
      name: "Hoodie",
      image: "hoodie.jpg",
      price: 50,
      description: "A warm and stylish hoodie.",
    },
  ];

  return (
    <div>
      <Header isLoggedIn={false} />

      <LandingPage />

      <h2>Our Products</h2>

      {products.map((product, index) => (
        <Product
          key={index} // Unique key for each product
          name={product.name} // Product name
          image={product.image} // Product image
          price={product.price} // Product price
          description={product.description} // Product description
        />
      ))}
    </div>
  );
};

export default App;
