import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useForm from "../../use-form";

const useForgotPassword = ({ profilesApi, authSlice }) => {
  const dispatch = useDispatch();
  const [forgotPassword, { isSuccess }] =
    profilesApi.useForgotPasswordMutation();

  useEffect(() => {
    dispatch(authSlice.actions.logout());
    localStorage.removeItem(`jwt`);
    sessionStorage.removeItem(`jwt`);
  }, [authSlice?.actions]);

  const submitFunc = ({ inputs }) => {
    forgotPassword({
      email: inputs.email,
      type: "email",
    });
  };

  const { inputs, onSubmit, setPassed } = useForm({
    inputsConfig,
    submitFunc,
    inputPropsType: `object`,
  });

  return {
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
    placeholder: `Email`,
  },
];
