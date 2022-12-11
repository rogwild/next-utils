import { useEffect, useMemo } from "react";
import useForm from "../../use-form";

const useLogin = ({ profilesApi, inputsConfig = defaultInputsConfig }) => {
  const [
    loginWithEmailAndPassword,
    { error, data, isSuccess, isLoading, isFetching },
  ] = profilesApi.useLoginWithEmailAndPasswordMutation();

  const memoInputsConfig = useMemo(() => {
    return inputsConfig;
  }, [inputsConfig]);

  const submitFunc = ({ inputs, files }) => {
    loginWithEmailAndPassword({
      data: inputs,
      files,
    });
  };

  const {
    inputs,
    setErrors,
    onSubmit,
    inputsValues,
    changeBlockedInputs,
    clearInputs,
  } = useForm({
    inputsConfig: memoInputsConfig,
    submitFunc,
    inputPropsType: `object`,
  });

  useEffect(() => {
    if (error) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (error.data?.error) {
          newErrors.email = {
            id: error.data.error.name,
            message: error.data.error.message,
          };
          newErrors.password = {
            id: error.data.error.name,
            message: error.data.error.message,
          };
        }
        return newErrors;
      });
    }
  }, [error, setErrors]);

  return {
    inputs,
    inputsValues,
    onSubmit,
    changeBlockedInputs,
    clearInputs,
    error,
    data,
    isSuccess,
    isLoading,
    isFetching,
  };
};

export default useLogin;

const defaultInputsConfig = [
  {
    field: `identifier`,
    checkerFuncs: [`checkRequiredField`],
    type: `text`,
    placeholder: `Type your email`,
    label: "Email",
  },
  {
    field: `password`,
    checkerFuncs: [`checkRequiredField`],
    config: {
      enableTypeChanging: true,
    },
    label: "Password",
    type: `password`,
    placeholder: `Type your password`,
  },
  {
    field: `rememberCheckbox`,
    checkerFuncs: [],
    type: `checkbox`,
    defaultValue: true,
    id: `rememberCheckbox`,
    label: `Remember`,
  },
];
