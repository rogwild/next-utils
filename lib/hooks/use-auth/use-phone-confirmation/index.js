import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import useForm from "../../use-form";

const usePhoneConfirmation = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  authSlice,
}) => {
  const auth = useSelector(authSlice.selectors.auth);
  const [user, setUser] = useState();

  // Without hard memoization sendPhoneConfirmSms calls twice
  useEffect(() => {
    if (
      auth?.user?.phoneNumber &&
      auth?.user?.phoneNumber !== user?.phoneNumber
    ) {
      setUser(auth.user);
    }
  }, [auth]);

  const [sendPhoneConfirmSms, { isUninitialized }] =
    profilesApi.useSendConfirmPhoneMutation();

  useEffect(() => {
    if (user && isUninitialized) {
      sendPhoneConfirmSms({
        data: {
          phone_number: user.phoneNumber,
        },
      });
    }
  }, [user, isUninitialized]);

  const memoInputsConfig = useMemo(() => {
    return inputsConfig;
  }, [inputsConfig]);

  const [confirmPhone, { error, isSuccess }] =
    profilesApi.useConfirmPhoneMutation();

  const submitFunc = ({ inputs }) => {
    confirmPhone({ confirmation: inputs.confirmation });
  };

  const {
    inputsValues,
    inputs,
    onSubmit,
    inputs: inputsErrors,
    setErrors: inputsSetErrors,
  } = useForm({
    inputsConfig: memoInputsConfig,
    submitFunc,
    inputPropsType: `object`,
  });

  return {
    inputs,
    inputsValues,
    onSubmit,
    error,
    isSuccess,
    inputsErrors,
    inputsSetErrors,
  };
};

export default usePhoneConfirmation;

const defaultInputsConfig = [
  {
    label: `Verification code`,
    field: `confirmation`,
    type: `otp`,
    checkerFuncs: [`checkRequiredField`],
    id: `confirmation`,
  },
];
