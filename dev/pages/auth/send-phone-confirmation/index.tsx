import React, { useEffect } from "react";
import FormInput from "../../../../src/components/input";
import useAuth from "../../../../src/hooks/use-auth";
import { profilesApi } from "../../../redux/services/backend/profiles";
import { blackButtonProps, textInputProps } from "../../../utils/vanilla";

const SendPhoneConfirmation = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
  }: { inputs: any; onSubmit: any; data: any; isLoading: boolean } =
    useAuth.useSendPhoneConfirmation({
      profilesApi,
    });

  useEffect(() => {
    console.log(`🚀 ~ SendPhoneConfirmation ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Login by phone and code</h1>
      {data ? <h4>Code was send to your phone</h4> : null}
      <FormInput {...inputs.phone} {...textInputProps} />
      <button onClick={onSubmit} {...blackButtonProps}>
        Send code
      </button>
    </div>
  );
};

export default SendPhoneConfirmation;
