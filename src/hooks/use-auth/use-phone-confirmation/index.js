import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useForm from "../../use-form";

const usePhoneConfirmation = ({ profilesApi, authSlice }) => {
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

  const [confirmPhone, { error, isSuccess }] =
    profilesApi.useConfirmPhoneMutation();

  const submitFunc = ({ inputs }) => {
    confirmPhone({ confirmation: inputs.confirmation });
  };

  const {
    inputs,
    onSubmit,
    inputs: inputsErrors,
    setErrors: inputsSetErrors,
  } = useForm({
    inputsConfig,
    submitFunc,
    inputPropsType: `object`,
  });

  return { inputs, onSubmit, error, isSuccess, inputsErrors, inputsSetErrors };
};

export default usePhoneConfirmation;

const inputsConfig = [
  {
    label: `Verification code`,
    field: `confirmation`,
    type: `otp`,
    checkerFuncs: [`checkRequiredField`],
    id: `confirmation`,
  },
];
