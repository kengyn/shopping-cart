import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getProduct } from "../components/Items";
import "../styles/Product.css";

async function loader({ params }) {
  return getProduct(params.id);
}

const Product = () => {
  let navigate = useNavigate();
  const product = useLoaderData();
  let desc;

  if (product.id === "gem") {
    desc = (
      <img
        className="mayreel"
        src={require(`../assets/Mayreel.png`)}
        alt="mayreel"
      />
    );
  } else {
    desc = product.description;
  }

  useEffect(() => {
    const closeButton = document.querySelector(".close-button");
    const closeDisplay = document.querySelector(".display-product");

    function close() {
      navigate("/shop");
    }

    closeDisplay.addEventListener("click", (e) => {
      if (!e.target.classList.contains("display-product")) {
        return;
      } else {
        close();
      }
    });
    closeButton.addEventListener("click", () => close());

    return () => {
      closeDisplay.removeEventListener("click", () => close());
      closeButton.removeEventListener("click", () => close());
    };
  }, [navigate]);

  return (
    <div className="display-product">
      <div className="product-container">
        <img src={require(`../assets/${product.imgLink}`)} alt={product.name} />
        <div className="product-info">
          <div className="product-header">
            <div className="close-button">x</div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price}</div>
          </div>
          <div className="product-description">
            <div>
              <div className="product-description-header">Game</div>
              <div>{product.game}</div>
            </div>
            <div>
              <div className="product-description-header">Banner</div>
              <div>{product.banner}</div>
            </div>
            <div>
              <div className="product-description-header">Description</div>
              <div>{desc}</div>
            </div>
          </div>
        </div>
        <div className="buy-container">
          <label htmlFor="quantity">QTY</label>
          <input type="number" id="quantity" defaultValue={1}></input>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export { loader, Product };
