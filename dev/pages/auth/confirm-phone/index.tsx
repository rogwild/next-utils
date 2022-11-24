import React, { useEffect } from "react";
import FormInput from "../../../../src/components/input";
import { useConfirmPhone } from "../../../../src/hooks/use-auth";
import { profilesApi } from "../../../redux/services/backend/profiles";
import { blackButtonProps, textInputProps } from "../../../utils/vanilla";

const ConfirmPhone = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
  }: { inputs: any; onSubmit: any; data: any; isLoading: boolean } =
    useConfirmPhone({
      profilesApi,
    });

  useEffect(() => {
    console.log(`🚀 ~ ConfirmPhone ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Confirm phone</h1>
      {data ? <h4>Phone was confirmed</h4> : null}
      <FormInput {...inputs.phone} {...textInputProps} />
      <FormInput {...inputs.code} {...textInputProps} />
      <button onClick={onSubmit} {...blackButtonProps}>
        Confirm phone
      </button>
    </div>
  );
};

export default ConfirmPhone;
