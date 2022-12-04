import React, { useEffect } from "react";
import { authSlice } from "~redux/authSlice";
import { blackButtonProps, redButtonProps } from "~utils/vanilla";
import { useDispatch } from "react-redux";
import useMyProfile from "~backend/models/profiles/useMyProfile";
import Link from "next/link";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { me }: { me: any } = useMyProfile();

  useEffect(() => {
    console.log(`🚀 ~ useEffect ~ data`, me);
  }, [me]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">My profile</h1>
      <h4 className="font-bold">You're logged as {me?.username}</h4>

      <div className="flex items-center gap-2">
        <Link href="/auth/login" {...blackButtonProps}>
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
