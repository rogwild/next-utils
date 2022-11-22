import { useEffect, useMemo } from "react";
import useForm from "../../use-form";

const useLogin = ({
  profilesApi,
  passedInputsConfig = defaultInputsConfig,
}) => {
  const [
    loginWithEmailAndPassword,
    { error, data, isSuccess, isLoading, isFetching },
  ] = profilesApi.useLoginWithEmailAndPasswordMutation();

  const inputsConfig = useMemo(() => {
    return passedInputsConfig;
  }, [passedInputsConfig]);

  const submitFunc = ({ inputs }) => {
    loginWithEmailAndPassword({
      identifier: inputs.email,
      password: inputs.password,
    });
  };

  const { inputs, setErrors, onSubmit, changeBlockedInputs, clearInputs } =
    useForm({
      inputsConfig,
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
    field: `email`,
    checkerFuncs: [`checkRequiredField`],
    type: `text`,
    placeholder: `Email`,
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
