import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./ShoppingCart.css";

export default function ShoppingCart({ setShoppingCart, shoppingCart, items }) {
  function addToCart(e) {
    setShoppingCart((prevCart) => [...prevCart, e.target.id]);
  }

  const showCart = shoppingCart.map((product) => {
    return (
      <div className="cart-item-container" key={product.key}>
        <h1 className="cart-item-name"> {product.name}</h1>
        <img className="cart-item-image" src={product.img}></img>
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
