import React, { useState } from "react";
import Header from "./components/Header";
import "./Shop.css";

export default function Shop({ shoppingCart, setShoppingCart, items }) {
  //Shop MODAL
  const [currentItem, setCurrentItem] = useState([]);

  function handleClick(e) {
    setCurrentItem(items.find((item) => item.key == e.target.id));
    setShoppingCart((prevCart) => [
      ...prevCart,
      items.find((item) => item.key == e.target.id),
    ]);
  }

  function shopModal() {}
  const shopDisplay = items.map((item) => {
    return (
      <div
        key={item.key}
        className="shop-item"
        onClick={handleClick}
        id={item.key}
      >
        <img className="shop-item-image" id={item.key} src={item.img}></img>
        <h3 className="shop-item-name" id={item.key}>
          {item.name}
        </h3>
      </div>
    );
  });

  return (
    <div className="shop">
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <div className="shop-display-container">
        <div className="title-container">
          <h1 className="shop-title">Shop</h1>
        </div>
        <div className="shop-display">{shopDisplay}</div>
      </div>
    </div>
  );
}
