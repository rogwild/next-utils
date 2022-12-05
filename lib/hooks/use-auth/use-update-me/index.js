import { useMemo } from "react";
import useForm from "../../use-form";
import { selectors } from "../../../redux/slices/authSlice";

const useUpdateMe = ({
  profilesApi,
  inputsConfig = defaultInputsConfig,
  useSelector,
}) => {
  const [updateMe, { isSuccess, error, data, isLoading }] =
    profilesApi.useUpdateMeMutation();
  const accountId = useSelector(selectors.selectAccountId); //?

  const submitFunc = ({ inputs }) => {
    inputs; //?

    updateMe({
      id: accountId,
      data: inputs,
    });
  };

  const memoInputsConfig = useMemo(() => {
    return inputsConfig;
  }, [inputsConfig]);

  const {
    inputs,
    onSubmit,
    errors: inputsErrors,
    setErrors: setInputsErrors,
  } = useForm({
    inputsConfig: memoInputsConfig,
    submitFunc,
    inputPropsType: `object`,
  });

  return {
    data,
    isLoading,
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
