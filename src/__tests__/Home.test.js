import React from "react";
import { act, render, screen } from "@testing-library/react";
import Home from "../components/Home";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";

describe("Home", () => {
  it("should render Home heading", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const text = screen.getByText(/Home/i);
    expect(text).toBeInTheDocument();
  });
});
