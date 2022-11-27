import React, { useEffect } from "react";
import FormInput from "../../../../src/components/input";
import useAuth from "../../../../src/hooks/use-auth";
import { profilesApi } from "../../../redux/services/backend/profiles";
import { blackButtonProps, textInputProps } from "../../../utils/vanilla";
import { authSlice } from "../../../redux/authSlice";

const ResetPassword = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
  }: { inputs: any; onSubmit: any; data: any; isLoading: boolean } =
    useAuth.useResetPassword({
      profilesApi,
      authSlice,
    });

  useEffect(() => {
    console.log(`🚀 ~ ResetPassword ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Reset your password</h1>
      {data ? <h4>Password was reset</h4> : null}
      <FormInput {...inputs.password} {...textInputProps} />
      <FormInput {...inputs.confirm_password} {...textInputProps} />
      <button onClick={onSubmit} {...blackButtonProps}>
        Reset password
      </button>
    </div>
  );
};

export default ResetPassword;
