import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useForm from "../../use-form";

const useForgotPassword = ({ profilesApi, authSlice }) => {
  const dispatch = useDispatch();
  const [forgotPassword, { isSuccess, isLoading, data }] =
    profilesApi.useForgotPasswordMutation();

  useEffect(() => {
    dispatch(authSlice.actions.logout());
    localStorage.removeItem(`jwt`);
    sessionStorage.removeItem(`jwt`);
  }, [authSlice?.actions]);

  const submitFunc = ({ inputs }) => {
    forgotPassword({
      data: inputs,
    });
  };

  const { inputs, onSubmit, setPassed } = useForm({
    inputsConfig,
    submitFunc,
    inputPropsType: `object`,
  });

  return {
    isLoading,
    data,
    isSuccess,
    inputs,
    onSubmit,
    setPassed,
  };
};

export default useForgotPassword;

const inputsConfig = [
  {
    title: `Email address*`,
    label: `Email address`,
    field: `email`,
    checkerFuncs: [`checkRequiredField`, `checkEmailMask`],
    type: `email`,
    placeholder: `Type your email`,
  },
];
