import { useMemo } from "react";
import useForm from "../../use-form";

const useRegister = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  inputPropsType = "object",
}) => {
  const [register, { error, isSuccess, isLoading, data }] =
    profilesApi.useRegisterMutation();

  const memoInputsConfig = useMemo(() => {
    return inputsConfig;
  }, [inputsConfig]);

  const submitFunc = ({ inputs, files }) => {
    register({ data: inputs, files });
  };

  const afterPassed = ({ clearInputs }) => {
    clearInputs();
  };

  const {
    inputs,
    setErrors: inputsSetErrors,
    errors: inputsErrors,
    inputsValues,
    onSubmit,
    setPassed,
  } = useForm({
    inputsConfig: memoInputsConfig,
    afterPassed,
    submitFunc,
    inputPropsType,
  });

  return {
    data,
    inputs,
    inputsValues,
    onSubmit,
    isSuccess,
    isLoading,
    error,
    setPassed,
    inputsErrors,
    inputsSetErrors,
  };
};

export default useRegister;

const defaultInputsConfig = [
  {
    label: `Username`,
    field: `username`,
    checkerFuncs: [`checkRequiredField`],
    type: `text`,
    placeholder: `Type your username`,
  },
  {
    label: `Email`,
    field: `email`,
    checkerFuncs: [`checkRequiredField`, `checkEmailMask`],
    type: `email`,
    id: `email`,
    placeholder: `Type your email`,
  },
  {
    label: `Password`,
    field: `password`,
    checkerFuncs: [`checkRequiredField`, `checkPassword`],
    config: {
      enableTypeChanging: true,
    },
    type: `password`,
    placeholder: `Type your password`,
  },
  {
    label: `Repeat password`,
    field: `confirm_password`,
    checkerFuncs: [`checkRequiredField`, `checkEqualTo`],
    config: {
      equalTo: `password`,
      enableTypeChanging: true,
    },
    type: `password`,
    placeholder: `Repeat your password`,
  },
  {
    label: `I agree with terms and conditions`,
    field: `agreement_checkbox`,
    checkerFuncs: [],
    type: `checkbox`,
    defaultValue: false,
  },
];
