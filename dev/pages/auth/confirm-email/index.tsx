import React, { useEffect } from "react";
import FormInput from "../../../../src/components/input";
import { useConfirmEmail } from "../../../../src/hooks/use-auth";
import { profilesApi } from "../../../redux/services/backend/profiles";
import { baseButtonProps, textInputProps } from "../../../utils/vanilla";

const ConfirmEmail = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
  }: { inputs: any; onSubmit: any; data: any; isLoading: boolean } =
    useConfirmEmail({
      profilesApi,
    });

  useEffect(() => {
    console.log(`🚀 ~ ConfirmEmail ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Confirm email</h1>
      {data ? <h4>Email was confirmed</h4> : null}
      <FormInput {...inputs.email} {...textInputProps} />
      <FormInput {...inputs.code} {...textInputProps} />
      <button onClick={onSubmit} {...baseButtonProps}>
        Confirm email
      </button>
    </div>
  );
};

export default ConfirmEmail;
