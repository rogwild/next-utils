import React from "react";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages";
import ConfirmEmail from "./pages/auth/confirm-email";
import ConfirmPhone from "./pages/auth/confirm-phone";
import ForgotPassword from "./pages/auth/forgot-password";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ResetPassword from "./pages/auth/reset-password";
import SendEmailConfirmation from "./pages/auth/send-email-confirmation";
import SendPhoneConfirmation from "./pages/auth/send-phone-confirmation";
import ProfilePage from "./pages/profile";
import ProfileEdit from "./pages/profile/edit";
import store from "./redux";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Main />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route
          path="/auth/send-email-confirmation"
          element={<SendEmailConfirmation />}
        />
        <Route
          path="/auth/send-phone-confirmation"
          element={<SendPhoneConfirmation />}
        />
        <Route path="/auth/confirm-email" element={<ConfirmEmail />} />
        <Route path="/auth/confirm-phone" element={<ConfirmPhone />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
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
