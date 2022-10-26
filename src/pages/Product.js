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
        <div className="close-button">X</div>
        <img src={require(`../assets/${product.imgLink}`)} alt={product.name} />
        <div>{product.name}</div>
        <div>${product.price}</div>
        <div className="buy-container">
          <input type="number" id="quantity"></input>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export { loader, Product };
