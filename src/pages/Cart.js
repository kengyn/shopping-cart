import React from "react";
import { items } from "../components/Items";
import "../styles/Cart.css";

const cart = [];

function addProduct(id, qty) {
  let products = items;
  let currentCart = cart;
  let product = products.find((item) => item.id === id);
  if (currentCart.some((item) => item.id.id === id)) {
    let itemIndex = currentCart.findIndex((i) => i.id.id === id);
    let updatedQty = parseInt(currentCart[itemIndex].qty) + parseInt(qty);
    let updatedItem = [{ id: product, qty: updatedQty }];

    let newCart = currentCart.map(
      (obj) => updatedItem.find((o) => o.id === obj.id) || obj
    );

    cart.splice(0, cart.length, ...newCart);
  } else {
    let bag = { id: product, qty };
    cart.push(bag);
  }
}

function totalQty() {
  let sum = cart.reduce((acc, obj) => {
    return acc + obj.qty;
  }, 0);
  return sum;
}

//function updateProduct(product, qty) {}

const Cart = () => {
  const renderCart = () => {
    if (cart.length === 0) {
      return (
        <main className="cart-main">
          <img
            src={require("../assets/angryMayreel.gif")}
            alt="angry mayreel"
          />
          <div>Cart Empty</div>
        </main>
      );
    }
    return cart.map((item) => (
      <li key={item.id.id}>
        <img src={item.id.image} alt={item.id.name} />
        <div>{item.id.name}</div>
        <div>qty: {item.qty}</div>
      </li>
    ));
  };

  return (
    <div>
      <ul>{renderCart()}</ul>
    </div>
  );
};

export { addProduct, Cart, totalQty };
