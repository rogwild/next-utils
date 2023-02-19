import { useMemo, useEffect } from "react";
import useForm from "../../use-form";

const useSendPhoneConfirmation = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  inputPropsType = "object",
  createNotification = () => ({}),
  notificationDuration = 10000,
  translate = (string) => string,
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
    inputPropsType,
  });

  useEffect(() => {
    if (isSuccess) {
      createNotification({
        title: `Code was sent to your phone`,
        duration: notificationDuration,
      });
    }
  }, [isSuccess]);

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
