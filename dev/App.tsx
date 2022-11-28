import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/auth/send-email-confirmation",
        element: <SendEmailConfirmation />,
      },
      {
        path: "/auth/send-phone-confirmation",
        element: <SendPhoneConfirmation />,
      },
      {
        path: "/auth/confirm-email",
        element: <ConfirmEmail />,
      },
      {
        path: "/auth/confirm-phone",
        element: <ConfirmPhone />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/profile/edit",
        element: <ProfileEdit />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
