import React, { useEffect } from "react";
import utils from "~next-utils";
const { useDeleteOtp } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import { blackButtonProps, otpInputProps } from "~utils/vanilla";
import useMyProfile from "~redux/services/backend/models/profiles/useMyProfile";
import { useSelector } from "react-redux";
import Link from "next/link";

const DeleteOtp = () => {
  const { me: user } = useMyProfile();

  useEffect(() => {
    console.log(`🚀 ~ DeleteOtp ~ user`, user);
  }, [user]);

  const {
    inputs,
    data: deleteOtpData,
    onSubmit,
    isLoading: deleteOptIsLoading,
    setInputs,
    error,
  } = useDeleteOtp({
    profilesApi,
    useSelector,
  });

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">
        Delete Multi Factor Authentification
      </h1>
      {user.isOtpEnabled ? (
        <div className="w-1/2 mx-auto text-center flex flex-col gap-4">
          <Input {...inputs.code} {...otpInputProps} />
          {error ? (
            <p className="text-red-500">{error.data.error.message}</p>
          ) : null}
          <button onClick={onSubmit} {...blackButtonProps}>
            Delete OTP
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="text-center">You OTP isn't set</p>
          <Link href="/profile/mfa/set-otp" {...blackButtonProps}>
            Set OTP
          </Link>
        </div>
      )}
      {/* {data ? <h4>Profile was successfully updated</h4> : null} */}
    </div>
  );
};

export default DeleteOtp;
