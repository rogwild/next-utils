import { useEffect, useMemo } from "react";
import useForm from "../../use-form";

const useConfirmPhone = ({
  profilesApi,
  passedInputsConfig = defaultInputsConfig,
}) => {
  const [confirmEmail, { isSuccess, error, data, isLoading }] =
    profilesApi.useConfirmPhoneMutation();

  const submitFunc = ({ inputs }) => {
    confirmEmail({
      data: inputs,
    });
  };

  const inputsConfig = useMemo(() => {
    return passedInputsConfig;
  }, [passedInputsConfig]);

  const {
    inputs,
    onSubmit,
    setInputsValues,
    inputsValues,
    errors: inputsErrors,
    setErrors: setInputsErrors,
  } = useForm({
    inputsConfig,
    submitFunc,
    inputPropsType: `object`,
  });

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
