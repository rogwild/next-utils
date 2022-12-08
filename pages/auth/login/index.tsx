import React, { useEffect } from "react";
import Link from "next/link";
import utils from "~next-utils";
const { useLogin } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import { blackButtonProps, textInputProps } from "~utils/vanilla";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

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
  } = useLogin({
    profilesApi,
  });

  useEffect(() => {
    console.log(`🚀 ~ Login ~ data`, data);
    if (!data) {
      return;
    }

    if (data.nextAuthFactor) {
      router.push(`/auth/confirm-email`);
    }
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Login</h1>
      {data ? <h4>You are logged in</h4> : null}
      <Input {...inputs.identifier} {...textInputProps} />
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
