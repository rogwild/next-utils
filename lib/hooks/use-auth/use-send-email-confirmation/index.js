import { useMemo } from "react";
import useForm from "../../use-form";

const useSendEmailConfirmation = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
}) => {
  const [sendEmailConfirmation, { error, isLoading, isSuccess, data }] =
    profilesApi.useSendEmailConfirmationMutation();

  const submitFunc = ({ inputs }) => {
    sendEmailConfirmation({ data: inputs });
  };

  const memoInputsConfig = useMemo(() => {
    return inputsConfig;
  }, [inputsConfig]);

  const {
    inputs,
    errors: inputsErrors,
    onSubmit,
    setErrors: inputsSetErrors,
  } = useForm({
    inputsConfig: memoInputsConfig,
    submitFunc,
    inputPropsType: `object`,
  });

  return {
    inputs,
    inputsErrors,
    inputsSetErrors,
    error,
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