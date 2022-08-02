import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import About from "./About";
import Home from "./Home";
import Shop from "./Shop";
import dresser from "./components/images/Dresser.jpg";
import dresser2 from "./components/images/Dresser2.jpg";
import sideTable from "./components/images/SideTable.jpg";
import table from "./components/images/Table.jpg";
import ShoppingCart from "./components/ShoppingCart";

export default function RouteSwitch() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [items, setItems] = useState([
    {
      key: 1,
      name: "Dresser",
      price: "$250.58",
      description: "It's a dresser",
      img: dresser,
      quantity: 0,
    },
    {
      key: 2,
      name: "Table",
      price: "$100.99",
      description: "It's a Table",
      img: table,
      quantity: 0,
    },
    {
      key: 3,
      name: "Side Table",
      price: "$49.99",
      description: "It's a Side Table",
      img: sideTable,
      quantity: 0,
    },
    {
      key: 4,
      name: "Another Dresser",
      price: "$250",
      description: "It's a dresser",
      img: dresser2,
      quantity: 0,
    },
  ]);

  //calculate Quantity
  function showQuantity() {
    const objectQuantities = items.map(obj => obj.quantity)
    const numberedObjectQuantities = objectQuantities.map(item => parseInt(item))
    const reducedObjectQuantities = numberedObjectQuantities.reduce((a,b) => a + b) 

    return reducedObjectQuantities}



  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              showQuantity = {showQuantity}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              showQuantity = {showQuantity}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              items={items}
              setItems={setItems}
              showQuantity = {showQuantity}
            />
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              items={items}
              setItems = {setItems}
              showQuantity = {showQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
