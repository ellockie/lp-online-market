import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import { store } from "./store/store";
import App from "./App";

describe("<App />", () => {
  afterEach(cleanup);

  test("Should mount and dispplay Log-in screen", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    expect(getByText(/Log-in to your account/i)).toBeInTheDocument();
  });
});
