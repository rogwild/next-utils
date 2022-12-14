import { useEffect, useMemo, useState } from "react";
import useForm from "../../use-form";

const useConfirmPhone = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  ping = 30,
  initialPing = 0,
  resendOnMount = false,
  useSelector,
  inputPropsType = "object",
}) => {
  const [onMountCodeWasSent, setOnMountCodeWasSent] = useState(!resendOnMount);
  const user = useSelector((state) => state.auth?.user); //?
  const [confirmPhone, { isSuccess, error, data, isLoading }] =
    profilesApi.useConfirmPhoneMutation();

  const submitFunc = ({ inputs }) => {
    let headers = {};
    if (user?.nextAuthFactorKey) {
      headers = {
        "Next-Auth-Factor-Key": user.nextAuthFactorKey,
      };
    }

    confirmPhone({
      data: inputs,
      headers,
    });
  };

  const [
    sendPhoneConfirmation,
    {
      error: resendPhoneConfirmationError,
      isLoading: resendPhoneConfirmationIsLoading,
      isSuccess: resendPhoneConfirmationIsSuccess,
      data: resendPhoneConfirmationData,
    },
  ] = profilesApi.useSendPhoneConfirmationMutation();

  const [counter, setCounter] = useState(initialPing);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
  }, [counter]);

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

    setCounter(ping);

    sendPhoneConfirmation({
      data: {
        phone: inputsValues.phone,
      },
    });
  };

  useEffect(() => {
    if (!onMountCodeWasSent && inputsValues?.phone) {
      resendPhoneConfirmation();
      setOnMountCodeWasSent(true);
    }
  }, [inputsValues]);

  useEffect(() => {
    if (user) {
      if (user.phone) {
        setInputsValues({ ...inputsValues, phone: user.phone });
        return;
      }
    }

    if (typeof window !== "undefined") {
      const code = new URLSearchParams(new URL(window?.location)?.search)?.get(
        "code"
      );
      const phone = new URLSearchParams(new URL(window?.location)?.search)?.get(
        "phone"
      );

      setInputsValues({ ...inputsValues, code, phone });
    }
  }, [user]);

  return {
    counter,
    resendPhoneConfirmation,
    resendPhoneConfirmationError,
    resendPhoneConfirmationIsLoading,
    resendPhoneConfirmationIsSuccess,
    resendPhoneConfirmationData,
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

export default useConfirmPhone;

const defaultInputsConfig = [
  {
    field: `phone_number`,
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
