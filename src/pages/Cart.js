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
        <main>
          <img
            src={require("../assets/angryMayreel.gif")}
            alt="angry mayreel"
          />
          <div className="mayreel-cart-text">Cart Empty</div>
        </main>
      );
    }
    return (
      <>
        <h1>Cart</h1>
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id.id}>
              <img src={item.id.image} alt={item.id.name} />
              <div className="cart-product-name">{item.id.name}</div>
              <div className="cart-price-container">
                <div className="cart-price-info">
                  <div>Item Price</div>
                  <div>${item.id.price}.00</div>
                </div>
                <div className="cart-price-info">
                  <div>Quantity</div>
                  <div>{item.qty}</div>
                </div>

                <div className="cart-price-info">
                  <div>Total Price</div>
                  <div>${item.qty}.00</div>
                </div>
              </div>
              <div className="cart-buttons-container">
                <button className="cart-remove-button">Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="checkout-container">
          <div className="checkout-title">Order Summary</div>
          <div className="sub-check-container">
            <div>Subtotal</div>
            <div>all ur money</div>
          </div>
          <div className="sub-check-container">
            <div>Tax</div>
            <div>gimme ur wallet</div>
          </div>
          <div className="sub-check-container estimate-container">
            <div>Estimated Total</div>
            <div>USD $fart</div>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </>
    );
  };

  return <main className="cart-main">{renderCart()}</main>;
};

export { addProduct, Cart, totalQty };
