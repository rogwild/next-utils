import React, { useEffect } from "react";
import utils from "../../../src";
const { useMyProfile } = utils.hooks;
import { authSlice } from "../../redux/authSlice";
import { profilesApi } from "../../redux/services/backend/profiles";
import { blackButtonProps, redButtonProps } from "../../utils/vanilla";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { me }: { me: any } = useMyProfile({
    profilesApi,
    authSlice,
    useSelector,
  });

  useEffect(() => {
    console.log(`🚀 ~ useEffect ~ data`, me);
  }, [me]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">My profile</h1>
      <h4 className="font-bold">You're logged as {me?.username}</h4>

      <div className="flex items-center gap-2">
        <Link to="/auth/login" {...blackButtonProps}>
          Login
        </Link>
        <button
          onClick={() => {
            dispatch(authSlice.actions.logout());
          }}
          {...redButtonProps}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
