import { useMemo } from "react";
import useForm from "../../use-form";

const useUpdateMe = ({ profilesApi, inputsConfig = defaultInputsConfig }) => {
  const [updateMe, { isSuccess, error, data, isLoading }] =
    profilesApi.useUpdateMeMutation();

  const submitFunc = ({ inputs }) => {
    updateMe({
      data: inputs,
    });
  };

  const memoInputsConfig = useMemo(() => {
    return inputsConfig;
  }, [inputsConfig]);

  const {
    inputs,
    onSubmit,
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
    error,
    inputs,
    onSubmit,
    isSuccess,
    inputsErrors,
    setInputsErrors,
  };
};

export default useUpdateMe;

const defaultInputsConfig = [
  {
    field: `username`,
    checkerFuncs: [`checkRequiredField`],
    type: `text`,
    placeholder: `Type your username`,
    label: "Username",
  },
];
