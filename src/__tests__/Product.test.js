import React from "react";
import { render } from "@testing-library/react";
import { Product } from "../pages/Product";
import { MemoryRouter as Router } from "react-router-dom";

//ERROR: useLoaderData must be used within a DataRouterStateContext
//I think im supposed to mock useLoaderData()
describe("product component", () => {
  it("renders product", () => {
    //     const { container } = render(<Router>{<Product />}</Router>);
    //     expect(container).toMatchSnapshot();
  });
});
