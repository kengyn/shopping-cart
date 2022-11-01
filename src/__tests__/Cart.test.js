import React from "react";
import { render } from "@testing-library/react";
import { Cart, addProduct } from "../pages/Cart";
import { MemoryRouter as Router } from "react-router-dom";

describe("cart component", () => {
  it("renders empty cart", () => {
    const { container } = render(
      <Router>
        <Cart />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders item in cart correctly", () => {
    addProduct("acquaint-fate", 4);
    const { container } = render(
      <Router>
        <Cart />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
