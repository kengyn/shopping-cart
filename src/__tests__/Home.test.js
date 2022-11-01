import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/Home";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";

describe("Home component", () => {
  it("renders shop button", () => {
    const { getByRole } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByRole("button").textContent).toMatch(/sHop NoW/i);
  });

  it("renders image", () => {
    const { container } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
