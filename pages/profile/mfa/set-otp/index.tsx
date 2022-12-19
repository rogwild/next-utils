import React, { useEffect } from "react";
import utils from "~next-utils";
const { useSetOtp } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import { blackButtonProps, otpInputProps } from "~utils/vanilla";
import useMyProfile from "~redux/services/backend/models/profiles/useMyProfile";
import { useSelector } from "react-redux";
import Link from "next/link";

const SetOtp = () => {
  const { me: user } = useMyProfile();

  const {
    generateOtpSecretData,
    inputs,
    data: setOtpData,
    onSubmit,
    isLoading: setOptIsLoading,
    setInputs,
    error,
  } = useSetOtp({
    profilesApi,
    useSelector,
  });

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">
        Set Multi Factor Authentification
      </h1>
      {user.isOtpConfirmationEnabled ? (
        <div className="flex flex-col gap-3">
          <p className="text-center">You set OTP</p>
          <Link href="/profile/mfa/delete-otp" {...blackButtonProps}>
            Delete OTP
          </Link>
        </div>
      ) : generateOtpSecretData ? (
        <div className="w-1/2 mx-auto text-center flex flex-col gap-3">
          <p>Scan QR-code by Google Authentificator</p>
          <img className="w-full" src={generateOtpSecretData.secretQrCode} />
          <p>{generateOtpSecretData.secretHashCode}</p>
          <Input {...inputs.code} {...otpInputProps} />
          {error ? (
            <p className="text-red-500">{error.data.error.message}</p>
          ) : null}
          <button onClick={onSubmit} {...blackButtonProps}>
            Set OTP
          </button>
        </div>
      ) : null}
      {/* {data ? <h4>Profile was successfully updated</h4> : null} */}
    </div>
  );
};

export default SetOtp;
