import { useMemo } from "react";
import useForm from "../../use-form";

const useSendPhoneConfirmation = ({
  profilesApi,
  passedInputsConfig = defaultInputsConfig,
}) => {
  const [sendPhoneConfirmation, { error, isLoading, isSuccess, data }] =
    profilesApi.useSendPhoneConfirmationMutation();

  const submitFunc = ({ inputs }) => {
    sendPhoneConfirmation({ data: inputs });
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

export default useSendPhoneConfirmation;

const defaultInputsConfig = [
  {
    label: `Phone`,
    field: `phone`,
    checkerFuncs: [`checkRequiredField`],
    type: `text`,
    placeholder: `Type your phone`,
  },
];
