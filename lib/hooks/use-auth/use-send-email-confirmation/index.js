import { useMemo, useEffect } from "react";
import useForm from "../../use-form";

const useSendEmailConfirmation = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  createNotification = () => ({}),
  inputPropsType = "object",
  notificationDuration = 10000,
  translate = (string) => string,
}) => {
  const [sendEmailConfirmation, result] =
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

  useEffect(() => {
    if (result?.isSuccess) {
      createNotification({
        title: translate(`Code was sent to your email`),
        duration: notificationDuration,
      });
    }
  }, [result]);

  return {
    inputs,
    inputsErrors,
    inputsSetErrors,
    inputsValues,
    onSubmit,
    result,
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
