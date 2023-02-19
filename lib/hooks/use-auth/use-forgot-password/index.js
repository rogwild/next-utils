import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

const useForgotPassword = ({
  profilesApi,
  createNotification = () => ({}),
  useRouter = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
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
    if (forgotPasswordResult?.isSuccess) {
      if (createNotification) {
        createNotification({
          title: translate(`Recovery link was sent to your email`),
          duration: notificationDuration,
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
