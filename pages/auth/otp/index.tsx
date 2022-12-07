import React, { useEffect } from "react";
import utils from "~next-utils";
const { useCheckOtp } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import {
  blackButtonProps,
  grayButtonProps,
  otpInputProps,
  textInputProps,
} from "~utils/vanilla";
import { useSelector } from "react-redux";

const OtpPage = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
    inputsValues,
  }: {
    inputs: any;
    onSubmit: any;
    data: any;
    isLoading: boolean;
    inputsValues: any;
  } = useCheckOtp({
    profilesApi,
    useSelector,
  });

  useEffect(() => {
    console.log(`🚀 ~ useEffect ~ data`, data);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Check OTP</h1>
      <Input {...inputs.code} {...otpInputProps} />
      <button onClick={onSubmit} {...blackButtonProps}>
        Confirm
      </button>
    </div>
  );
};

export default OtpPage;
