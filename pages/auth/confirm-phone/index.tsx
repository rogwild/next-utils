import React, { useEffect } from "react";
import utils from "~next-utils";
const { useConfirmPhone } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import {
  blackButtonProps,
  grayButtonProps,
  textInputProps,
} from "~utils/vanilla";

const ConfirmPhone = () => {
  const {
    resendPhoneConfirmation,
    resendPhoneConfirmationError,
    counter,
    inputs,
    onSubmit,
    data,
    isLoading,
  }: {
    inputs: any;
    resendPhoneConfirmationError: any;
    resendPhoneConfirmation: any;
    counter: number;
    onSubmit: any;
    data: any;
    isLoading: boolean;
  } = useConfirmPhone({
    profilesApi,
    ping: 5,
  });

  console.log(`🚀 ~ useEffect ~ counter`, counter);

  useEffect(() => {
    console.error(
      `🚀 ~ useEffect ~ resendPhoneConfirmationError`,
      resendPhoneConfirmationError
    );
  }, [resendPhoneConfirmationError]);

  useEffect(() => {
    console.log(`🚀 ~ ConfirmPhone ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Confirm phone</h1>
      {data ? <h4>Phone was confirmed</h4> : null}
      <Input {...inputs.phone} {...textInputProps} />
      <Input {...inputs.code} {...textInputProps} />
      {counter === 0 ? (
        <button
          onClick={() => {
            resendPhoneConfirmation();
          }}
          {...grayButtonProps}
        >
          Resend code
        </button>
      ) : (
        <p>Resend code in {counter} seconds</p>
      )}
      <button onClick={onSubmit} {...blackButtonProps}>
        Confirm phone
      </button>
    </div>
  );
};

export default ConfirmPhone;
