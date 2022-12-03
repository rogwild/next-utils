import React, { useEffect } from "react";
import Link from "next/link";
import utils from "~next-utils";
const { useLogin } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import { blackButtonProps, textInputProps } from "~utils/vanilla";

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
      <Input {...inputs.email} {...textInputProps} />
      <Input {...inputs.password} {...textInputProps} />
      <button onClick={onSubmit} {...blackButtonProps}>
        Login
      </button>
      {data ? (
        <Link href="/profile" {...blackButtonProps}>
          Profile
        </Link>
      ) : null}
    </div>
  );
};

export default Login;
