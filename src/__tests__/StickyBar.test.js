import React from "react";
import { render } from "@testing-library/react";
import { StickyBar } from "../components/StickyBar";
import { MemoryRouter as Router, useLoaderData } from "react-router-dom";

jest.mock("react-router-dom", () => {
  const ogModule = jest.requireActual("react-router-dom");

  return {
    ...ogModule,
    useLoaderData: () => 34,
  };
});

describe("navbar component", () => {
  it("renders 34", () => {
    const result = useLoaderData();
    expect(result).toBe(34);
  });

  it("renders nav bar", () => {
    const { container } = render(
      <Router>
        <StickyBar />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
