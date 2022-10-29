import React, { useEffect } from "react";
import { useLoaderData, useNavigate, Form } from "react-router-dom";
import { getProduct } from "../components/Items";
import { addProduct } from "./Cart";
import "../styles/Product.css";

async function action({ request, params }) {
  const formData = await request.formData();
  const quantity = Object.fromEntries(formData);
  addProduct(params.id, parseInt(quantity.quantity));
}

function loader({ params }) {
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
        src={require(`../assets/standingMayreel.gif`)}
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
      navigate("/shopping-cart/shop");
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
        <Form className="buy-container" method="post">
          <label htmlFor="quantity">QTY</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            defaultValue={1}
            min="1"
          ></input>
          <button type="submit">Add To Cart</button>
        </Form>
      </div>
    </div>
  );
};

export { loader, Product, action };
