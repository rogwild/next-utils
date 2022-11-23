import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Login from "./pages/auth/login";
import store from "./redux/index";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

const Main = () => {
  return <div>Main</div>;
};

const App = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
