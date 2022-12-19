import React, { useEffect } from "react";
import utils from "~next-utils";
const { useForgotPassword } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import { blackButtonProps, textInputProps } from "~utils/vanilla";
import { authSlice } from "~redux/authSlice";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
  }: { inputs: any; onSubmit: any; data: any; isLoading: boolean } =
    useForgotPassword({
      profilesApi,
      authSlice,
      useDispatch,
    });

  useEffect(() => {
    console.log(`🚀 ~ ForgotPassword ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Forgot password</h1>
      {data ? <h4>Email was sent</h4> : null}
      <Input {...inputs.email} {...textInputProps} />
      <button onClick={onSubmit} {...blackButtonProps}>
        Send reset password link
      </button>
    </div>
  );
};

export default ForgotPassword;
