import React from "react";
import Header from "./components/Header";

export default function About({ shoppingCart, setShoppingCart }) {
  return (
    <div>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <h1>About</h1>
    </div>
  );
}
