import React, { useEffect } from "react";
import FormInput from "../../../../src/components/input";
import { useForgotPassword } from "../../../../src/hooks/use-auth";
import { profilesApi } from "../../../redux/services/backend/profiles";
import { baseButtonProps, textInputProps } from "../../../utils/vanilla";
import authSlice from "../../../redux/authSlice";

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
    });

  useEffect(() => {
    console.log(`🚀 ~ ForgotPassword ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Forgot password</h1>
      {data ? <h4>Email was sent</h4> : null}
      <FormInput {...inputs.email} {...textInputProps} />
      <button onClick={onSubmit} {...baseButtonProps}>
        Send reset password link
      </button>
    </div>
  );
};

export default ForgotPassword;
