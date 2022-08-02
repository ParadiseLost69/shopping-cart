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
 

  //Adding an item to the cart
  function handleClick(e) {
    // setShoppingCart((prevCart) => [
    //   ...prevCart,
    //   items.find((item) => item.key == e.target.id),
    // ]);

    const selectedItem = items.find(object => object.key == e.target.id)
    setItems(prevItems => {
      const newItems = prevItems.map( obj => {
        if (obj.key == e.target.id) {
          return {...obj, quantity: obj.quantity + 1}
        }
        return obj;

      })
      return newItems
    })
    console.log(items)


    
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
        <img className="shop-item-image" id={item.key} src={item.img} alt = {item.description}></img>
        <div className="shop-name-price-container">
          <h3 className="shop-item-name" id={item.key}>
            {item.name}
          </h3>
          <h3 className="shop-item-price">{item.price}</h3>
        </div>
      </div>
    );
  });


  function showQuantity() {
   const objectQuantities = items.map(obj => obj.quantity)
   const numberedObjectQuantities = objectQuantities.map(item => parseInt(item))
   const reducedObjectQuantities = numberedObjectQuantities.reduce((a,b) => a + b)

   return reducedObjectQuantities
  }

  return (
    <div className="shop">
      <Header               shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              items={items}
              setItems = {setItems} />
      <div className="shop-display-container">
        <div className="title-container">
          <h1 className="shop-title">Shop</h1>
        </div>
        <div className="shop-display">{shopDisplay}</div>
      </div>
    </div>
  );
}
