import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

const useResetPassword = ({
  profilesApi,
  authSlice,
  useDispatch,
  useRouter = () => ({}),
  createNotification = () => ({}),
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(authSlice.actions.logout());
    localStorage.removeItem(`jwt`);
    sessionStorage.removeItem(`jwt`);
  }, [authSlice?.actions]);

  const inputs = useMemo(() => {
    return [
      {
        label: `New Password`,
        name: `password`,
        variant: `text`,
        type: `password`,
        placeholder: `Type your new password`,
      },
      {
        label: `Repeat New Password`,
        name: `passwordConfirmation`,
        variant: `text`,
        type: `password`,
        placeholder: `Repeat your new password`,
      },
      {
        name: `code`,
        variant: `text`,
        className: `hidden`,
      },
    ];
  }, []);

  const [resetPassword, resetPasswordResult] =
    profilesApi.useResetPasswordMutation();
  const methods = useForm({
    mode: `all`,
  });

  const { handleSubmit, watch, setValue } = methods;

  const watchData = watch();

  useEffect(() => {
    // console.log(`🚀 ~ useEffect ~ watchData`, watchData);
  }, [watchData]);

  useEffect(() => {
    if (
      typeof window !== `undefined` &&
      (!watchData.code || watchData.code === ``)
    ) {
      const code = new URLSearchParams(window?.location?.search)?.get(`code`);
      setValue(`code`, code);
    }
  }, [router.query, watchData]);

  async function onSubmit(data) {
    // console.log(`🚀 ~ onSubmit ~ data`, data);

    resetPassword({ data, files: data.files });
  }

  useEffect(() => {
    const { data } = resetPasswordResult;

    if (data?.ok) {
      if (createNotification) {
        createNotification({
          title: `New password was set`,
          contentContainerClassName: `@pg pl-2 pr-4 py-4 @bxsw shadow-lg @ttc text-gray-base`,
          containerClassName: `@ow overflow-visible`,
          duration: 5000,
        });
      }
      router.push(`/auth/login`);
    }
  }, [resetPasswordResult]);

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
    resetPasswordResult,
  };
};

export default useResetPassword;
