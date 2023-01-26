import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { nextAuthHandler } from "../utils";

const useLogin = ({
  profilesApi,
  useRouter = () => ({}),
  createNotification = () => ({}),
}) => {
  const router = useRouter();

  const [loginWithEmailAndPassword, loginWithEmailAndPasswordResult] =
    profilesApi.useLoginWithEmailAndPasswordMutation();

  const inputs = useMemo(() => {
    return [
      {
        variant: `text`,
        name: `identifier`,
        label: `Email`,
        placeholder: `Type your email`,
      },
      {
        variant: `text`,
        type: `password`,
        name: `password`,
        label: `Password`,
        placeholder: `Type your password`,
      },
    ];
  }, []);

  const methods = useForm({
    mode: `all`,
  });

  const { handleSubmit, watch } = methods;

  const watchData = watch();
  useEffect(() => {
    // console.log(`🚀 ~ useEffect ~ watchData`, watchData);
  }, [watchData]);

  async function onSubmit(data) {
    // console.log(`🚀 ~ onSubmit ~ data`, data);

    loginWithEmailAndPassword({ data, files: data.files });
  }

  useEffect(() => {
    const data = loginWithEmailAndPasswordResult.data;

    if (!data) {
      return;
    }

    if (router?.push) {
      nextAuthHandler({ router, data });
    }
  }, [loginWithEmailAndPasswordResult, router]);

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
    loginWithEmailAndPasswordResult,
  };
};

export default useLogin;
