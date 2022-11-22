import { useSelector } from "react-redux";
import useForm from "../../use-form";

const useEmailConfirmation = ({ profilesApi, authSlice }) => {
  const user = useSelector(authSlice.selectors.selectUser);
  const [confirmEmail, { error, data }] = profilesApi.useConfirmEmailMutation();

  const submitFunc = ({ inputs }) => {
    confirmEmail({ confirmation: inputs.confirmation, email: user.email });
  };

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

  return { inputs, inputsErrors, inputsSetErrors, error, onSubmit, data };
};

export default useEmailConfirmation;

const inputsConfig = [
  {
    label: `Verification code`,
    field: `confirmation`,
    type: `otp`,
    checkerFuncs: [`checkRequiredField`],
    id: `confirmation`,
  },
];
