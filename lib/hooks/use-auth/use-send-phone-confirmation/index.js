import { useMemo } from "react";
import useForm from "../../use-form";

const useSendPhoneConfirmation = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
}) => {
  const [sendPhoneConfirmation, { error, isLoading, isSuccess, data }] =
    profilesApi.useSendPhoneConfirmationMutation();

  const submitFunc = ({ inputs, files }) => {
    sendPhoneConfirmation({ data: inputs, files });
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
    inputPropsType: `object`,
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

export default useSendPhoneConfirmation;

const defaultInputsConfig = [
  {
    label: `Phone`,
    field: `phone_number`,
    checkerFuncs: [`checkRequiredField`],
    type: `text`,
    id: `phone`,
    placeholder: `Type your phone`,
  },
];
