"use client";

import { useEffect, useMemo, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { selectors } from "../../../redux/slices/auth";

const useDeleteOtp = ({
  profilesApi,
  createNotification = () => ({}),
  useSelector,
  translate = (string) => string,
  notificationDuration = 10000,
  AdditionalHeadersContext = createContext(null),
}) => {
  const additionalHeaders = useContext(AdditionalHeadersContext);
  const accountId = useSelector(selectors.selectAccountId); //?
  const [deleteOtp, deleteOtpResult] = profilesApi.useDeleteOtpMutation({});

  const inputs = useMemo(() => {
    return [
      {
        component: "text",
        name: "code",
        label: "OTP code",
        placeholder: "Type One-time-password code",
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

    deleteOtp({ id: accountId, data, headers });
  }

  useEffect(() => {
    if (deleteOtpResult?.isSuccess) {
      createNotification({
        title: translate(`OTP succesfully deleted`),
        duration: notificationDuration,
      });

      if (additionalHeaders?.headers) {
        additionalHeaders.setHeaders(null);
      }
    }
  }, [deleteOtpResult]);

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
  };
};

export default useDeleteOtp;
