import React from "react";
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

  const shopDisplay = items.map((item) => {
    return (
      <div className="shop-item">
        <img className="shop-item-image" src={item.img}></img>
        <h3> {item.name} </h3>
        <h4> {item.price}</h4>
      </div>
    );
  });
  return (
    <div>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <h1 className="shop-title">Shop</h1>
      <div className="shop-display">{shopDisplay}</div>
    </div>
  );
}
