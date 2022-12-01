import React, { useCallback, useMemo, Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import {
  Link,
  Outlet,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import utils from "~utils";
const { AuthWrapper } = utils.components;
import store from "../redux";
import useMyProfile from "../redux/services/backend/profiles/useMyProfile";

const routes = {
  "/": {
    isPublic: true,
    Layout: Fragment,
  },
  "/profile": {
    isPublic: false,
    Layout: Fragment,
  },
  "/auth/login": {
    isAuth: true,
    Layout: Fragment,
  },
  "/auth/register": {
    isAuth: true,
    Layout: Fragment,
  },
  "/profile/edit": {
    isPublic: false,
    Layout: Fragment,
  },
};

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const useRouter = useCallback(() => {
    return {
      push: navigate,
      query: {
        initPath: "/",
      },
      pathname: location.pathname,
      asPath: location.pathname,
    };
  }, [navigate, location.pathname]);

  const router = useRouter();
  const { pathname } = router;

  const { isAuth, isPublic, Layout } = routes[pathname] || routes[`/404`];

  return (
    <Provider store={store}>
      <AuthWrapper
        isPublic={isPublic}
        isAuthRoute={isAuth}
        useRouter={useRouter}
        useMyProfile={useMyProfile}
      >
        <div className="w-full">
          <div className="w-full fixed top-0 left-0 right-0 p-5 flex items-center justify-between bg-white drop-shadow-lg">
            <div>
              <Link to="/" className="font-bold text-gray-400">
                DevApp
              </Link>
            </div>
            <div className="uppercase text-gray-500 hover:text-gray-900 flex items-center justify-end gap-5">
              <Link to="/profile">Profile</Link>
              <Link to="/profile/edit">Edit Profile</Link>
              <Link to="/auth/login">Login</Link>
              <Link to="/auth/register">Register</Link>
            </div>
          </div>
          <div className="pt-20">
            <Outlet />
          </div>
        </div>
      </AuthWrapper>
    </Provider>
  );
};

export default Main;
