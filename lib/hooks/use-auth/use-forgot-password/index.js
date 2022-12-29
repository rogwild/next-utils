import { useEffect, useMemo } from "react";
import useForm from "../../use-form";

const useForgotPassword = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  authSlice,
  useDispatch,
  inputPropsType = "object",
}) => {
  const dispatch = useDispatch();
  const [forgotPassword, { isSuccess, isLoading, data }] =
    profilesApi.useForgotPasswordMutation();

  useEffect(() => {
    dispatch(authSlice.actions.logout());
    localStorage.removeItem(`jwt`);
    sessionStorage.removeItem(`jwt`);
  }, [authSlice?.actions]);

  const submitFunc = ({ inputs, files }) => {
    forgotPassword({
      data: inputs,
      files,
    });
  };

  const memoInputsConfig = useMemo(() => {
    return inputsConfig;
  }, [inputsConfig]);

  const {
    inputs,
    inputsValues,
    setInputsValues,
    setErrors,
    onSubmit,
    setPassed,
  } = useForm({
    inputsConfig: memoInputsConfig,
    submitFunc,
    inputPropsType,
  });

  return {
    isLoading,
    data,
    isSuccess,
    inputsValues,
    setErrors,
    setInputsValues,
    inputs,
    onSubmit,
    setPassed,
  };
};

export default useForgotPassword;

const defaultInputsConfig = [
  {
    title: `Email address*`,
    label: `Email address`,
    field: `email`,
    checkerFuncs: [`checkRequiredField`, `checkEmailMask`],
    type: `email`,
    placeholder: `Type your email`,
  },
];
