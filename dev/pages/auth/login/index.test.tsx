import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./index";
import { Provider } from "react-redux";
import store from "../../../redux";

describe("Login hook and inputs", () => {
  it.only("should get data and send to backend", async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Login");
  });
});
