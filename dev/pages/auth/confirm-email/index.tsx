import React, { useEffect } from "react";
import utils from "~utils";
const { useConfirmEmail } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "../../../redux/services/backend/profiles";
import {
  blackButtonProps,
  grayButtonProps,
  textInputProps,
} from "../../../utils/vanilla";

const ConfirmEmail = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
    resendEmailConfirmation,
    counter,
  }: {
    inputs: any;
    onSubmit: any;
    data: any;
    isLoading: boolean;
    counter: number;
    resendEmailConfirmation: any;
  } = useConfirmEmail({
    profilesApi,
    ping: 5,
  });

  console.log(`🚀 ~ useEffect ~ counter`, counter);

  useEffect(() => {
    console.log(`🚀 ~ ConfirmEmail ~ data`, data, isLoading);
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
