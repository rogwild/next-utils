import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages";
import Login from "./pages/auth/login";
import store from "./redux";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Main />} />
        <Route path="/auth/login" element={<Login />} />
      </>
    )
  );

  return (
    <div className="max-w-[1200px] mx-auto">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
