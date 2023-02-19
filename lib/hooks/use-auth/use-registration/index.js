import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

const useRegister = ({
  profilesApi,
  useRouter = () => ({}),
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
}) => {
  const inputs = useMemo(() => {
    return [
      {
        component: `text`,
        name: `username`,
        label: `Username`,
        placeholder: `Type your username`,
      },
      {
        component: `text`,
        name: `email`,
        label: `Email`,
        placeholder: `Type your email`,
      },
      {
        label: `Password`,
        name: `password`,
        type: `password`,
        placeholder: `Type your password`,
      },
      {
        component: `text`,
        type: `password`,
        label: `Repeat password`,
        name: `confirm_password`,
        placeholder: `Repeat your password`,
      },
      {
        label: `I agree with terms and conditions`,
        name: `agreement_checkbox`,
        component: `switch`,
      },
    ];
  }, []);

  const [registration, registrationResult] =
    profilesApi.useRegistrationMutation({});
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
    registration({ data, files: data.files });
  }

  useEffect(() => {
    if (registrationResult?.isSuccess) {
      createNotification({
        title: translate(`Account succesfully registered`),
        duration: notificationDuration,
      });
    }
  }, [registrationResult]);

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
    registrationResult,
  };
};

export default useRegister;
