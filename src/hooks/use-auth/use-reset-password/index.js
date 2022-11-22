import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useForm from "../../use-form";

const useResetPassword = ({
  profilesApi,
  passedInputsConfig = defaultInputsConfig,
  authSlice,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authSlice.actions.logout());
    localStorage.removeItem(`jwt`);
    sessionStorage.removeItem(`jwt`);
  }, [authSlice?.actions]);

  const [resetPassword, { isSuccess, error }] =
    profilesApi.useResetPasswordMutation();

  const submitFunc = ({ inputs }) => {
    resetPassword({
      password: inputs.password,
      code: inputs.code,
    });
  };

  const {
    inputs,
    onSubmit,
    setInputsValues,
    inputsValues,
    errors: inputsErrors,
    setErrors: setInputsErrors,
  } = useForm({
    passedInputsConfig,
    submitFunc,
    inputPropsType: `object`,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const code = new URLSearchParams(new URL(window?.location)?.search)?.get(
        "code"
      );
      setInputsValues({ ...inputsValues, code: code });
    }
  }, [window]);

  return {
    error,
    inputs,
    onSubmit,
    isSuccess,
    inputsErrors,
    setInputsErrors,
  };
};

export default useResetPassword;

const defaultInputsConfig = [
  {
    label: `New Password`,
    field: `password`,
    checkerFuncs: [`checkRequiredField`, `checkPassword`],
    config: {
      enableTypeChanging: true,
    },
    type: `password`,
    placeholder: `Type your new password`,
  },
  {
    label: `Repeat New Password`,
    field: `confirm_password`,
    checkerFuncs: [`checkRequiredField`, `checkEqualTo`],
    config: {
      equalTo: `password`,
      enableTypeChanging: true,
    },
    type: `password`,
    placeholder: `Repeat your new password`,
  },
  {
    title: `Code`,
    field: `code`,
    checkerFuncs: [`checkRequiredField`],
    type: `hidden`,
  },
];
