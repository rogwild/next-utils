import React, { useEffect } from "react";
import utils from "~next-utils";
const { useResetPassword } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import { blackButtonProps, textInputProps } from "~utils/vanilla";
import { authSlice } from "~redux/authSlice";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
  }: { inputs: any; onSubmit: any; data: any; isLoading: boolean } =
    useResetPassword({
      profilesApi,
      authSlice,
      useDispatch,
    });

  useEffect(() => {
    console.log(`🚀 ~ ResetPassword ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Reset your password</h1>
      {data ? <h4>Password was reset</h4> : null}
      <Input {...inputs.password} {...textInputProps} />
      <Input {...inputs.passwordConfirmation} {...textInputProps} />
      <button onClick={onSubmit} {...blackButtonProps}>
        Reset password
      </button>
    </div>
  );
};

export default ResetPassword;
