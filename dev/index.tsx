import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Login from "./pages/auth/Login";
import store from "./redux/index";

const App = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
