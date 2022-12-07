import { useEffect, useMemo, useState } from "react";
import useForm from "../../use-form";
import { selectors } from "../../../redux/slices/authSlice";

const useCheckOtp = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  useSelector,
}) => {
  const accountId = useSelector(selectors.selectAccountId); //?
  const [checkOtp, { isSuccess, error, data, isLoading }] =
    profilesApi.useCheckOtpMutation();

  const submitFunc = ({ inputs }) => {
    checkOtp({
      id: accountId,
      data: inputs,
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
