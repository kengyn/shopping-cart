import React from "react";
import { render } from "@testing-library/react";
import Shop from "../pages/Shop";
import { BrowserRouter as Router } from "react-router-dom";

describe("shop component", () => {
  it("renders shop items", () => {
    const { container } = render(
      <Router>
        <Shop />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
