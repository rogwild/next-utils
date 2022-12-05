import React, { useEffect } from "react";
import utils from "~next-utils";
const { useSetOtp } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import { blackButtonProps, otpInputProps } from "~utils/vanilla";
import useMyProfile from "~redux/services/backend/models/profiles/useMyProfile";
import { useSelector } from "react-redux";

const MultiFactorAuthentification = () => {
  const { me: user } = useMyProfile();

  const {
    generateOtpSecretData,
    inputs,
    data: setOtpData,
    onSubmit,
    isLoading: setOptIsLoading,
    setInputs,
  } = useSetOtp({
    profilesApi,
    useSelector,
  });

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">
        Multi Factor Authentification
      </h1>
      {user.otpEnabled ? null : generateOtpSecretData ? (
        <div className="w-1/2 mx-auto text-center">
          <p>Scan QR-code by Google Authentificator</p>
          <img className="w-full" src={generateOtpSecretData.secretQrCode} />
          <p>{generateOtpSecretData.secretHashCode}</p>
        </div>
      ) : null}
      {/* {data ? <h4>Profile was successfully updated</h4> : null} */}
      <Input {...inputs.code} {...otpInputProps} />
      <button onClick={onSubmit} {...blackButtonProps}>
        Set OTP
      </button>
    </div>
  );
};

export default MultiFactorAuthentification;
