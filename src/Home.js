import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
export default function Home({ shoppingCart, setShoppingCart }) {
  return (
    <div>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <h1>Home Page</h1>
    </div>
  );
}
