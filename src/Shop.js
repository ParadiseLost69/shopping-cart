import React, { useState } from "react";
import Header from "./components/Header";
import "./Shop.css";

export default function Shop({
  shoppingCart,
  setShoppingCart,
  items,
  setItems,
}) {
  //Shop MODAL
  const [currentItem, setCurrentItem] = useState({});

  function openModal(e) {
    setCurrentItem(items.find((object) => object.key == e.target.id));

    return (
      <div>
        <h1>{currentItem.name} </h1>
        <h2>{currentItem.price}</h2>
      </div>
    );
  }

  //Select the Current Item
  function handleClick(e) {
    const selectedItem = items.find((object) => object.key == e.target.id);
    setCurrentItem(selectedItem);
  }

  //Adding an item to the shoppingCart
  function addItem(e) {
    setShoppingCart((prevCart) => [
      ...prevCart,
      items.find((item) => item.key == e.target.id),
    ]);
    const selectedItem = items.find((object) => object.key == e.target.id);
    setItems((prevItems) => {
      const newItems = prevItems.map((obj) => {
        if (obj.key == e.target.id) {
          return { ...obj, quantity: obj.quantity + 1 };
        }
        return obj;
      });
      return newItems;
    });

    setCurrentItem((prevItem) => {
      return { ...prevItem, quantity: prevItem.quantity + 1 };
    });
  }

  //REMOVE AN ITEM
  function removeItem(e) {
    setShoppingCart((prevCart) => [
      ...prevCart,
      items.find((item) => item.key == e.target.id),
    ]);
    const selectedItem = items.find((object) => object.key == e.target.id);
    setItems((prevItems) => {
      const newItems = prevItems.map((obj) => {
        if (obj.key == e.target.id && obj.quantity > 0) {
          return { ...obj, quantity: obj.quantity - 1 };
        }
        return { ...obj, quantity: 0 };
      });
      return newItems;
    });

    setCurrentItem((prevItem) => {
      if (prevItem.quantity > 0) {
        return { ...prevItem, quantity: prevItem.quantity - 1 };
      } else {
        return { ...prevItem, quantity: 0 };
      }
    });
  }

  const shopDisplay = items.map((item) => {
    return (
      <div
        key={item.key}
        className="shop-item"
        onClick={handleClick}
        id={item.key}
      >
        <img
          className="shop-item-image"
          id={item.key}
          src={item.img}
          alt={item.description}
        ></img>
        <div className="shop-name-price-container" id={item.key}>
          <h3 className="shop-item-name" id={item.key}>
            {item.name}
          </h3>
          <h3 id={item.key} className="shop-item-price">
            {item.price}
          </h3>
        </div>
      </div>
    );
  });

  // function showQuantity() {
  //   const objectQuantities = items.map((obj) => obj.quantity);
  //   const numberedObjectQuantities = objectQuantities.map((item) =>
  //     parseInt(item)
  //   );
  //   const reducedObjectQuantities = numberedObjectQuantities.reduce(
  //     (a, b) => a + b
  //   );

  //   return reducedObjectQuantities;
  // }

  return (
    <div className="shop">
      <Header
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        items={items}
        setItems={setItems}
      />
      <div className="shop-display-container">
        <div className="title-container">
          <h1 className="shop-title">Shop</h1>
        </div>
        <div className="shop-display">{shopDisplay}</div>
      </div>
      <div className="shop-modal-container">
        <div className="shop-modal">
          <div className="modal-name-price-description">
            <h2 className="modal-name"> {currentItem.name}</h2>
            <h2 className="modal-price">Price: {currentItem.price}</h2>
            <h2 className="modal-description">
              Description: {currentItem.description}
            </h2>
          </div>
          <img
            className="modal-image"
            src={currentItem.img}
            alt={currentItem.description}
          ></img>
          <button id={currentItem.key} onClick={removeItem}>
            Less
          </button>
          <h1 className="modal-quantity">Current: {currentItem.quantity}</h1>
          <button id={currentItem.key} onClick={addItem}>
            MORE
          </button>
        </div>
      </div>
    </div>
  );
}
