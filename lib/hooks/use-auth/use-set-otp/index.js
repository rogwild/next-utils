import { useEffect, useMemo, useState } from "react";
import useForm from "../../use-form";
import { selectors } from "../../../redux/slices/authSlice";

const useSetOtp = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  useSelector,
}) => {
  const accountId = useSelector(selectors.selectAccountId); //?
  const {
    data: generateOtpSecretData,
    isSuccess: generateOtpSecretIsSuccess,
    isLoading: generateOtpSecretIsLoading,
  } = profilesApi.useGenerateOtpSecretQuery(
    {
      id: accountId,
    },
    { skip: !accountId }
  );
  const [setOtp, { isSuccess, error, data, isLoading }] =
    profilesApi.useSetOtpMutation();

  const submitFunc = ({ inputs }) => {
    setOtp({
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

  useEffect(() => {
    setInputsValues((prev) => {
      return { ...prev, otp_secret: generateOtpSecretData?.secretHashCode };
    });
  }, [setInputsValues, generateOtpSecretData]);

  useEffect(() => {
    console.log(
      `🚀 ~ useEffect ~ generateOtpSecretData`,
      generateOtpSecretData
    );
  }, [generateOtpSecretData]);

  return {
    generateOtpSecretData,
    data,
    isLoading,
    setInputsValues,
    error,
    inputs,
    onSubmit,
    isSuccess,
    inputsErrors,
    setInputsErrors,
  };
};

export default useSetOtp;

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
