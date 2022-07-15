import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import About from "./About";
import Home from "./Home";
import Shop from "./Shop";

export default function RouteSwitch() {
  const [shoppingCart, setShoppingCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
