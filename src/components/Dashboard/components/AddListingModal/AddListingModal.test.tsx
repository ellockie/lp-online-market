import React from "react";
import {
  cleanup,
  render,
  fireEvent,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";

import AddListingModal from "./AddListingModal";
import { store } from "../../../../store/store";

describe("<AddListingModal />", () => {
  afterEach(cleanup);

  test("it should mount", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <AddListingModal />
      </Provider>
    );
    const modalOpenButton = getByTestId("ModalOpenButton");

    expect(modalOpenButton).toBeInTheDocument();
  });

  test("it should open on click", async () => {
    render(
      <Provider store={store}>
        <AddListingModal />
      </Provider>
    );
    fireEvent.click(screen.getByText("Add New Listing"));

    expect(screen.getByTestId("AddListingModal")).toBeInTheDocument();
  });
});
