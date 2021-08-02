import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("App", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/©2019 Market/i)).toBeInTheDocument();
  expect(getByText(/Cart is empty/i)).toBeInTheDocument();
  expect(getByText(/Sorting/i)).toBeInTheDocument();
  expect(getByText(/Brands/i)).toBeInTheDocument();
  expect(getByText(/Tags/i)).toBeInTheDocument();
  expect(getByText(/Products/i)).toBeInTheDocument();
});
