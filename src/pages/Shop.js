import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { items } from "../components/Items";
import "../styles/Shop.css";

const Shop = () => {
  const renderItems = () => {
    return items.map((item) => (
      <li key={item.id} className={item.id}>
        <NavLink to={`product/${item.id}`}>
          <img src={item.image} alt={item.name} />
          <div className="shop-item-name">{item.name}</div>
          <div className="shop-item-price">${item.price}</div>
        </NavLink>
      </li>
    ));
  };

  return (
    <div className="shop-main">
      <h1>Shop</h1>
      <div className="items-container">
        <ul>{renderItems()}</ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Shop;
