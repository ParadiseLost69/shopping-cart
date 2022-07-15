import React from "react";
import Header from "./components/Header";

export default function Shop({ shoppingCart, setShoppingCart }) {
  const clicker = () => {
    setShoppingCart((prevCart) => prevCart + 1);
  };
  return (
    <div>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <h1 onClick={clicker}>SHOP {shoppingCart.length}</h1>
    </div>
  );
}
