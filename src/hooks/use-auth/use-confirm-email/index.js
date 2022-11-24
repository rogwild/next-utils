import { useEffect, useMemo } from "react";
import useForm from "../../use-form";

const useConfirmEmail = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
}) => {
  const [confirmEmail, { isSuccess, error, data, isLoading }] =
    profilesApi.useConfirmEmailMutation();

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const code = new URLSearchParams(new URL(window?.location)?.search)?.get(
        "code"
      );
      const email = new URLSearchParams(new URL(window?.location)?.search)?.get(
        "email"
      );
      setInputsValues({ ...inputsValues, code: code, email: email });
    }
  }, [window]);

  return {
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
