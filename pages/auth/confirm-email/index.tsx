import React, { useEffect } from "react";
import utils from "~next-utils";
const { useConfirmEmail } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import {
  blackButtonProps,
  grayButtonProps,
  textInputProps,
} from "~utils/vanilla";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ConfirmEmail = () => {
  const router = useRouter();

  const {
    inputs,
    onSubmit,
    data,
    isLoading,
    resendEmailConfirmation,
    counter,
    inputsValues,
  }: {
    inputs: any;
    onSubmit: any;
    data: any;
    isLoading: boolean;
    inputsValues: any;
    counter: number;
    resendEmailConfirmation: any;
  } = useConfirmEmail({
    profilesApi,
    useSelector,
    ping: 5,
  });

  useEffect(() => {
    console.log(`🚀 ~ ConfirmEmail ~ data`, data);

    if (!data) {
      return;
    }
    if (data.nextAuthFactor) {
      router.push("/auth/otp");
    }
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Confirm email</h1>
      {data ? <h4>Email was confirmed</h4> : null}
      <Input {...inputs.email} {...textInputProps} />
      <Input {...inputs.code} {...textInputProps} />
      {counter === 0 ? (
        <button
          onClick={() => {
            resendEmailConfirmation();
          }}
          {...grayButtonProps}
        >
          Resend code
        </button>
      ) : (
        <p>Resend code in {counter} seconds</p>
      )}
      <button onClick={onSubmit} {...blackButtonProps}>
        Confirm email
      </button>
    </div>
  );
};

export default ConfirmEmail;
