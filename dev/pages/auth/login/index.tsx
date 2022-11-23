import React, { useEffect } from "react";
import FormInput from "../../../../src/components/input";
import { useLogin } from "../../../../src/hooks/use-auth";
import { profilesApi } from "../../../redux/services/backend/profiles";
import { baseButtonProps, textInputProps } from "../../../utils/vanilla";

const Login = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
  }: { inputs: any; onSubmit: any; data: any; isLoading: boolean } = useLogin({
    profilesApi,
  });

  useEffect(() => {
    console.log(`🚀 ~ Login ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Login</h1>
      {data ? <h4>You are logged in</h4> : null}
      <FormInput {...inputs.email} {...textInputProps} />
      <FormInput {...inputs.password} {...textInputProps} />
      <button onClick={onSubmit} {...baseButtonProps}>
        Login
      </button>
    </div>
  );
};

export default Login;
