import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

const useForgotPassword = ({
  profilesApi,
  createNotification = () => ({}),
  useRouter = () => ({}),
}) => {
  const router = useRouter();

  const inputs = useMemo(() => {
    return [
      {
        name: `email`,
        component: `text`,
        placeholder: `Type your email`,
        label: `Email`,
      },
    ];
  }, []);

  const [forgotPassword, forgotPasswordResult] =
    profilesApi.useForgotPasswordMutation({});
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

    forgotPassword({ data, files: data.files });
  }

  useEffect(() => {
    const { data } = forgotPasswordResult;

    if (data?.ok) {
      if (createNotification) {
        createNotification({
          title: `Recovery link was sent to your email`,
          contentContainerClassName: `@pg pl-2 pr-4 py-4 @bxsw shadow-lg @ttc text-gray-base`,
          containerClassName: `@ow overflow-visible`,
          duration: 5000,
        });
      }
      router.push(`/auth/login`);
    }
  }, [forgotPasswordResult]);

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
    forgotPasswordResult,
  };
};

export default useForgotPassword;
