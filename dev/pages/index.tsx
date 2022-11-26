import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
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
  );
};

export default Main;
