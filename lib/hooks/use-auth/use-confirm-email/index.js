import { useEffect, useMemo, useCallback, useState } from "react";
import useForm from "../../use-form";

const useConfirmEmail = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  ping = 30,
  initialPing = 0,
  resendOnMount = false,
  useSelector,
  inputPropsType = "object",
}) => {
  const [onMountEmailWasSent, setOnMountEmailWasSent] = useState(
    !resendOnMount
  );
  const user = useSelector((state) => state.auth?.user); //?
  const [confirmEmail, { isSuccess, error, data, isLoading }] =
    profilesApi.useConfirmEmailMutation();

  const submitFunc = ({ inputs }) => {
    let headers = {};
    if (user?.nextAuthFactorKey) {
      headers = {
        "Next-Auth-Factor-Key": user.nextAuthFactorKey,
      };
    }

    confirmEmail({
      data: inputs,
      headers,
    });
  };

  const [
    sendEmailConfirmation,
    {
      error: resendEmailConfirmationError,
      isLoading: resendEmailConfirmationIsLoading,
      isSuccess: resendEmailConfirmationIsSuccess,
      data: resendEmailConfirmationData,
    },
  ] = profilesApi.useSendEmailConfirmationMutation();

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

  const resendEmailConfirmation = useCallback(() => {
    if (!inputsValues.email) {
      console.error("Pass email for resending code");
      setInputsErrors((prev) => {
        const newErrors = { ...prev };
        newErrors.email = {
          id: "ValidationError",
          message: "Empty email address",
        };
        return newErrors;
      });
      return;
    }

    setCounter(ping);
    setOnMountEmailWasSent(true);

    sendEmailConfirmation({
      data: {
        email: inputsValues.email,
      },
    });
  }, [inputsValues]);

  useEffect(() => {
    if (resendOnMount && !onMountEmailWasSent && inputsValues?.email) {
      resendEmailConfirmation();
      setOnMountEmailWasSent(true);
    }
  }, [inputsValues, onMountEmailWasSent]);

  useEffect(() => {
    if (user) {
      if (user.email) {
        setInputsValues({ ...inputsValues, email: user.email });
        return;
      }
    }

    if (typeof window !== "undefined") {
      const code = new URLSearchParams(new URL(window?.location)?.search)?.get(
        "code"
      );
      const email = new URLSearchParams(new URL(window?.location)?.search)?.get(
        "email"
      );
      setInputsValues({ ...inputsValues, code: code, email: email });
    }
  }, [user]);

  return {
    counter,
    resendEmailConfirmation,
    resendEmailConfirmationError,
    resendEmailConfirmationIsLoading,
    resendEmailConfirmationIsSuccess,
    resendEmailConfirmationData,
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

export default useConfirmEmail;

const defaultInputsConfig = [
  {
    field: `email`,
    checkerFuncs: [`checkRequiredField`],
    type: `text`,
    placeholder: `Type your email`,
    label: "Email",
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
