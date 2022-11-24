import React, { useEffect } from "react";
import FormInput from "../../../../src/components/input";
import { useRegister } from "../../../../src/hooks/use-auth";
import { profilesApi } from "../../../redux/services/backend/profiles";
import { blackButtonProps, textInputProps } from "../../../utils/vanilla";

const Register = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
  }: { inputs: any; onSubmit: any; data: any; isLoading: boolean } =
    useRegister({
      profilesApi,
    });

  useEffect(() => {
    console.log(`🚀 ~ Register ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Register</h1>
      {data ? <h4>You are successfully registered</h4> : null}
      <FormInput {...inputs.username} {...textInputProps} />
      <FormInput {...inputs.email} {...textInputProps} />
      <FormInput {...inputs.password} {...textInputProps} />
      <FormInput {...inputs.confirm_password} {...textInputProps} />
      <button onClick={onSubmit} {...blackButtonProps}>
        Register
      </button>
    </div>
  );
};

export default Register;
