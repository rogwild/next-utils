import { useEffect, useMemo, useState } from "react";
import useForm from "../../use-form";

const useCheckOtp = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  useSelector,
}) => {
  const user = useSelector((state) => state.auth?.user); //?
  const [checkOtp, { isSuccess, error, data, isLoading }] =
    profilesApi.useCheckOtpMutation();

  const submitFunc = ({ inputs }) => {
    let headers = {};
    if (user?.nextAuthFactorKey) {
      headers = {
        "Next-Auth-Factor-Key": user.nextAuthFactorKey,
      };
    }

    const userId = user?.id ? user.id : inputs.user;

    checkOtp({
      id: userId,
      data: inputs,
      headers,
    });
  };

  const memoInputsConfig = useMemo(() => {
    return inputsConfig;
  }, [inputsConfig]);

  const {
    inputs,
    onSubmit,
    setInputsValues,
    inputsValues,
    errors: inputsErrors,
    setErrors: setInputsErrors,
  } = useForm({
    inputsConfig: memoInputsConfig,
    submitFunc,
    inputPropsType: `object`,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = new URLSearchParams(new URL(window?.location)?.search)?.get(
        "user"
      );
      setInputsValues({ ...inputsValues, user: user });
    }
  }, []);

  return {
    data,
    isLoading,
    inputsValues,
    setInputsValues,
    error,
    inputs,
    onSubmit,
    isSuccess,
    inputsErrors,
    setInputsErrors,
  };
};

export default useCheckOtp;

const defaultInputsConfig = [
  {
    title: `Code`,
    field: `code`,
    checkerFuncs: [`checkRequiredField`],
    label: "Code",
    placeholder: "Type code here",
    type: "otp",
  },
];
