import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function ShoppingCart({ setShoppingCart, shoppingCart, items }) {
  function addToCart(e) {
    setShoppingCart((prevCart) => [...prevCart, e.target.id]);
  }
  const showCart = shoppingCart.map((product) => {
    return (
      <div key={product.key}>
        <h1> {product.name}</h1>
        <img src={product.img}></img>
      </div>
    );
  });

  return (
    <div>
      <div>
        <Link to="/shop">
          <button>Return</button>
        </Link>
      </div>
      {showCart}
    </div>
  );
}
