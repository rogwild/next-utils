import { useMemo } from "react";
import useForm from "../../use-form";

const useSendEmailConfirmation = ({
  profilesApi,
  passedInputsConfig = defaultInputsConfig,
}) => {
  const [sendEmailConfirmation, { error, isLoading, isSuccess, data }] =
    profilesApi.useSendEmailConfirmationMutation();

  const submitFunc = ({ inputs }) => {
    sendEmailConfirmation({ data: inputs });
  };

  const inputsConfig = useMemo(() => {
    return passedInputsConfig;
  }, [passedInputsConfig]);

  const {
    inputs,
    errors: inputsErrors,
    onSubmit,
    setErrors: inputsSetErrors,
  } = useForm({
    inputsConfig,
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
