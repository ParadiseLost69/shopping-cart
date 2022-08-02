import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

export default function ShoppingCart({ setShoppingCart, shoppingCart, items, setItems }) {


  const showCart = items.map((product) => {
    if (product.quantity > 0) {
    return (
      <div className="cart-item-container" key={product.key}>
        <h1 className="cart-item-name">
          {product.name} {product.quantity}
        </h1>
        <img className="cart-item-image" src={product.img} alt={product.description}></img>
      </div>
    )}
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
