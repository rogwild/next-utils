import { useEffect, useMemo } from "react";
import useForm from "../../use-form";

const useChangePassword = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  inputPropsType = "object",
}) => {
  const [changePassword, { isSuccess, error, data, isLoading }] =
    profilesApi.useChangePasswordMutation();

  const submitFunc = ({ inputs, files }) => {
    changePassword({
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
    error,
    inputsValues,
    inputs,
    onSubmit,
    isSuccess,
    inputsErrors,
    setInputsErrors,
  };
};

export default useChangePassword;

const defaultInputsConfig = [
  {
    label: `Current Password`,
    field: `password`,
    checkerFuncs: [`checkRequiredField`],
    config: {
      enableTypeChanging: true,
    },
    type: `password`,
    placeholder: `Type your current password`,
  },
  {
    label: `New Password`,
    field: `passwordConfirmation`,
    checkerFuncs: [`checkRequiredField`],
    config: {
      equalTo: `password`,
      enableTypeChanging: true,
    },
    type: `password`,
    placeholder: `Type new password`,
  },
];
