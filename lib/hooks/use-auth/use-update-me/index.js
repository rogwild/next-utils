import { useMemo } from "react";
import useForm from "../../use-form";
import { selectors } from "../../../redux/slices/auth";

const useUpdateMe = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  useSelector,
  inputPropsType = "object",
}) => {
  const [updateMe, { isSuccess, error, data, isLoading }] =
    profilesApi.useUpdateMeMutation();
  const accountId = useSelector(selectors.selectAccountId); //?

  const submitFunc = ({ inputs, files }) => {
    inputs; //?

    updateMe({
      id: accountId,
      data: inputs,
      files,
    });
  };

  const memoInputsConfig = useMemo(() => {
    return inputsConfig;
  }, [inputsConfig]);

  const {
    inputs,
    onSubmit,
    inputsValues,
    errors: inputsErrors,
    setErrors: setInputsErrors,
  } = useForm({
    inputsConfig: memoInputsConfig,
    submitFunc,
    inputPropsType,
  });

  return {
    data,
    isLoading,
    inputsValues,
    error,
    inputs,
    onSubmit,
    isSuccess,
    inputsErrors,
    setInputsErrors,
  };
};

export default useUpdateMe;

const defaultInputsConfig = [
  {
    field: `username`,
    checkerFuncs: [`checkRequiredField`],
    type: `text`,
    placeholder: `Type your username`,
    label: "Username",
  },
];
