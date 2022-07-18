import React from "react";
import Header from "./components/Header";

export default function About({ shoppingCart, setShoppingCart }) {
  return (
    <div>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <div className="title-container">
        <h1 className="title">About</h1>
      </div>
    </div>
  );
}
