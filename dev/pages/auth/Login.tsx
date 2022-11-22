import React, { useEffect } from "react";
import FormInput from "../../../src/components/input";
import { useLogin } from "../../../src/hooks/use-auth";
import { profilesApi } from "../../redux/services/backend/profiles";
import { baseButtonProps, textInputProps } from "../../utils/vanilla";

const Login = () => {
  const { inputs, onSubmit, data }: { inputs: any; onSubmit: any; data: any } =
    useLogin({
      profilesApi,
    });

  useEffect(() => {
    console.log(`🚀 ~ Login ~ data`, data);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <FormInput {...inputs.email} {...textInputProps} />
      <FormInput {...inputs.password} {...textInputProps} />
      <button onClick={onSubmit} {...baseButtonProps}>
        Login
      </button>
    </div>
  );
};

export default Login;
