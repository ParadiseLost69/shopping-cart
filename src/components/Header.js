import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <h1 className="header-title">Noname Shop</h1>
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
      </div>
    </div>
  );
}
