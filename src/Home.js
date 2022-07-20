import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import "./Home.css";
export default function Home({ shoppingCart, setShoppingCart }) {
  return (
    <div className="home-page">
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <div className="home-page-content">
        <div className="home-page-title-container">
          <h1 className="home-page-title">
            <a style={{ color: "white" }}> Welcome to</a> Sunday Archives
          </h1>
          <h2 className="home-page-description">
            We refurbish antique furniture and give it a modern look
          </h2>
        </div>
        <div className="home-page-content-container">
          <h2 className="home-page-catch">See what we have to offer</h2>
          <Link to="./shop">
            <button className="home-page-shop-button">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
