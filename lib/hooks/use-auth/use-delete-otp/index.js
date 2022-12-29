import { useEffect, useMemo, useState } from "react";
import useForm from "../../use-form";
import { selectors } from "../../../redux/slices/auth";

const useDeleteOtp = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  useSelector,
  inputPropsType = "object",
}) => {
  const accountId = useSelector(selectors.selectAccountId); //?
  const [deleteOtp, { isSuccess, error, data, isLoading }] =
    profilesApi.useDeleteOtpMutation();

  const submitFunc = ({ inputs, files }) => {
    deleteOtp({
      id: accountId,
      data: inputs,
      files,
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
    inputPropsType,
  });

  return {
    data,
    isLoading,
    setInputsValues,
    inputsValues,
    error,
    inputs,
    onSubmit,
    isSuccess,
    inputsErrors,
    setInputsErrors,
  };
};

export default useDeleteOtp;

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
