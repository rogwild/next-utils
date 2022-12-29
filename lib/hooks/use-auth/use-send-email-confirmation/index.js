import { useMemo } from "react";
import useForm from "../../use-form";

const useSendEmailConfirmation = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  inputPropsType = "object",
}) => {
  const [sendEmailConfirmation, { error, isLoading, isSuccess, data }] =
    profilesApi.useSendEmailConfirmationMutation();

  const submitFunc = ({ inputs, files }) => {
    sendEmailConfirmation({ data: inputs, files });
  };

  const memoInputsConfig = useMemo(() => {
    return inputsConfig;
  }, [inputsConfig]);

  const {
    inputs,
    errors: inputsErrors,
    inputsValues,
    onSubmit,
    setErrors: inputsSetErrors,
  } = useForm({
    inputsConfig: memoInputsConfig,
    submitFunc,
    inputPropsType,
  });

  return {
    inputs,
    inputsErrors,
    inputsSetErrors,
    error,
    inputsValues,
    onSubmit,
    isLoading,
    isSuccess,
    data,
  };
};

export default useSendEmailConfirmation;

const defaultInputsConfig = [
  {
    label: `Email`,
    field: `email`,
    checkerFuncs: [`checkRequiredField`, `checkEmailMask`],
    type: `email`,
    id: `email`,
    placeholder: `Type your email`,
  },
];
