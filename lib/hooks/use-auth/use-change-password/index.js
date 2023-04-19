"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

const useChangePassword = ({
  profilesApi,
  createNotification = () => ({}),
  notificationDuration = 10000,
  translate = (string) => string,
  AdditionalHeadersContext = createContext(null),
}) => {
  const additionalHeaders = useContext(AdditionalHeadersContext);

  const [changePassword, changePasswordResult] =
    profilesApi.useChangePasswordMutation({});

  const inputs = useMemo(() => {
    return [
      {
        component: "text",
        type: "password",
        name: "currentPassword",
        label: "Current password",
        placeholder: "Type your current password",
        rules: {
          required: {
            value: true,
            message: "Required field",
          },
        },
      },
      {
        component: "text",
        type: "password",
        name: "password",
        label: "New password",
        placeholder: "Type new password",
        rules: {
          required: {
            value: true,
            message: "Required field",
          },
        },
      },
      {
        component: "text",
        type: "password",
        name: "passwordConfirmation",
        label: "Repeat new password",
        placeholder: "Repeat new password",
        rules: {
          required: {
            value: true,
            message: "Required field",
          },
        },
      },
    ];
  }, []);

  const methods = useForm({
    mode: "all",
  });

  const { handleSubmit, watch } = methods;

  useEffect(() => {
    if (changePasswordResult.isSuccess) {
      createNotification({
        title: translate(`Password was successfully changed`),
        duration: notificationDuration,
      });

      if (additionalHeaders?.headers) {
        additionalHeaders.setHeaders(null);
      }
    }
  }, [changePasswordResult]);

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

    changePassword({ data, headers });
  }

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
    changePasswordResult,
  };
};

export default useChangePassword;
