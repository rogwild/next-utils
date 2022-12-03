import { render } from "@testing-library/react";

export const renderApp = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    ...render(ui),
  };
};
