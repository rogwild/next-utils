import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux";

export const renderApp = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    ...render(ui, {
      wrapper: ({ children }) => {
        return (
          <BrowserRouter>
            <Provider store={store}>{children}</Provider>
          </BrowserRouter>
        );
      },
    }),
  };
};
