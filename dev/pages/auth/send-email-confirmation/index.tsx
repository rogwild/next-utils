import React, { useEffect } from "react";
import utils from "~utils";
const { useSendEmailConfirmation } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "../../../redux/services/backend/profiles";
import { blackButtonProps, textInputProps } from "../../../utils/vanilla";

const SendEmailConfirmation = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
  }: { inputs: any; onSubmit: any; data: any; isLoading: boolean } =
    useSendEmailConfirmation({
      profilesApi,
    });

  useEffect(() => {
    console.log(`🚀 ~ SendEmailConfirmation ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Login by email and code</h1>
      {data ? <h4>Code was send to your email</h4> : null}
      <Input {...inputs.email} {...textInputProps} />
      <button onClick={onSubmit} {...blackButtonProps}>
        Send code
      </button>
    </div>
  );
};

export default SendEmailConfirmation;
