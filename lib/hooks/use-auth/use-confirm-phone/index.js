import { useEffect, useMemo, useState } from "react";
import useForm from "../../use-form";

const useConfirmPhone = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  ping = 30,
}) => {
  const [confirmEmail, { isSuccess, error, data, isLoading }] =
    profilesApi.useConfirmPhoneMutation();

  const [
    sendPhoneConfirmation,
    {
      error: resendPhoneConfirmationError,
      isLoading: resendPhoneConfirmationIsLoading,
      isSuccess: resendPhoneConfirmationIsSuccess,
      data: resendPhoneConfirmationData,
    },
  ] = profilesApi.useSendPhoneConfirmationMutation();

  const [counter, setCounter] = useState(ping);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
  }, [counter]);

  const submitFunc = ({ inputs }) => {
    confirmEmail({
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

  const resendPhoneConfirmation = () => {
    if (!inputsValues.phone) {
      console.error("Pass phone for resending code");
      setInputsErrors((prev) => {
        const newErrors = { ...prev };
        newErrors.phone = {
          id: "ValidationError",
          message: "Empty phone address",
        };
        return newErrors;
      });
      return;
    }

    sendPhoneConfirmation({
      data: {
        phone: inputsValues.phone,
      },
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const code = new URLSearchParams(new URL(window?.location)?.search)?.get(
        "code"
      );
      const phone = new URLSearchParams(new URL(window?.location)?.search)?.get(
        "phone"
      );
      console.log(`🚀 ~ useEffect ~ phone`, phone);
      setInputsValues({ ...inputsValues, code: code, phone: phone });
    }
  }, []);

  return {
    counter,
    resendPhoneConfirmation,
    resendPhoneConfirmationError,
    resendPhoneConfirmationIsLoading,
    resendPhoneConfirmationIsSuccess,
    resendPhoneConfirmationData,
    data,
    isLoading,
    error,
    inputs,
    onSubmit,
    isSuccess,
    inputsErrors,
    setInputsErrors,
  };
};

export default useConfirmPhone;

const defaultInputsConfig = [
  {
    field: `phone`,
    checkerFuncs: [`checkRequiredField`],
    type: `text`,
    placeholder: `Type your phone`,
    label: "Phone",
  },
  {
    title: `Code`,
    field: `code`,
    checkerFuncs: [`checkRequiredField`],
    label: "Code",
    placeholder: "Type code here",
    type: "text",
  },
];
