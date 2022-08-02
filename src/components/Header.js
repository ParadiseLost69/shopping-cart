import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header({ shoppingCart, setShoppingCart, items, setItems, showQuantity }) {

  return (
    <div className="header-container">
      <Link to="/">
        <h1 className="header-title">Sunday Archives</h1>
      </Link>
      <div className="header-navbox">
        <Link to="/">
          <h2 className="header-navbox-home-button"> Home</h2>
        </Link>
        <Link to="/shop">
          <h2 className="header-navbox-shop-button">Shop</h2>
        </Link>
        <Link to="/about">
          <h2 className="header-navbox-about-button">About</h2>
        </Link>
        <Link to="/shopping-cart">
          <div className="header-navbox-shopping-cart">
            {showQuantity}
            <AiOutlineShoppingCart />
          </div>
        </Link>
      </div>
    </div>
  );
}
