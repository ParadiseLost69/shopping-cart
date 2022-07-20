import React, { useState } from "react";
import Header from "./components/Header";
import "./Shop.css";

export default function Shop({ shoppingCart, setShoppingCart, items }) {
  //Shop MODAL
  const [currentItem, setCurrentItem] = useState([]);
  const [isShown, setIsShown] = useState(false);

  //setting whether text is shown or not
  function handleMouseEnter() {
    setIsShown(true);
  }
  function handleMouseLeave() {
    setIsShown(false);
  }

  //Adding an item to the cart
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="shop-item-image" id={item.key} src={item.img}></img>
        <div className="shop-name-price-container">
          <h3 className="shop-item-name" id={item.key}>
            {item.name}
          </h3>
          <h3 className="shop-item-price">{item.price}</h3>
        </div>
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
