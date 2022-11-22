import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/index";

const App = () => {
  return (
    <Provider store={store}>
      <div className="">App</div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
