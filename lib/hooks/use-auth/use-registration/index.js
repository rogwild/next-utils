import { useEffect, useMemo, createContext, useContext } from "react";
import { useForm } from "react-hook-form";

const useRegister = ({
  profilesApi,
  useRouter = () => ({}),
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
  AdditionalHeadersContext = createContext(null),
}) => {
  const additionalHeaders = useContext(AdditionalHeadersContext);
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
    const headers = {};

    if (additionalHeaders?.headers) {
      for (const key of Object.keys(additionalHeaders.headers)) {
        headers[key] = JSON.stringify(additionalHeaders.headers[key]);
      }
    }

    registration({ data, files: data.files, headers });
  }

  useEffect(() => {
    if (registrationResult?.isSuccess) {
      createNotification({
        title: translate(`Account succesfully created`),
        duration: notificationDuration,
      });

      if (additionalHeaders?.headers) {
        additionalHeaders.setHeaders(null);
      }
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
