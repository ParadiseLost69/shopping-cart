import React, { useState } from "react";
import Header from "./components/Header";
import "./Shop.css";
import dresser from "./components/images/Dresser.jpg";
import dresser2 from "./components/images/Dresser2.jpg";
import sideTable from "./components/images/SideTable.jpg";
import table from "./components/images/Table.jpg";

export default function Shop({ shoppingCart, setShoppingCart }) {
  const items = [
    {
      key: 1,
      name: "Dresser",
      price: "$250.58",
      description: "It's a dresser",
      img: dresser,
    },
    {
      key: 2,
      name: "Table",
      price: "$100.99",
      description: "It's a Table",
      img: table,
    },
    {
      key: 3,
      name: "Side Table",
      price: "$49.99",
      description: "It's a Side Table",
      img: sideTable,
    },
    {
      key: 4,
      name: "Another Dresser",
      price: "$250",
      description: "It's a dresser",
      img: dresser2,
    },
  ];
  //Shop MODAL
  const [currentItem, setCurrentItem] = useState([]);

  function handleClick(e) {
    setCurrentItem(items.find((item) => item.key == e.target.id));
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
