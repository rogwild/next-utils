import { useEffect, useMemo, useState, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { nextAuthHandler } from "../utils";

const useCheckOtp = ({
  profilesApi,
  useSelector,
  useRouter = () => ({}),
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
  AdditionalHeadersContext = createContext(null),
}) => {
  const additionalHeaders = useContext(AdditionalHeadersContext);
  const router = useRouter();
  const user = useSelector((state) => state.auth?.user); //?

  const [checkOtp, checkOtpResult] = profilesApi.useCheckOtpMutation();

  const inputs = useMemo(() => {
    return [
      {
        name: `code`,
        component: `text`,
        label: `One-time-password code`,
        placeholder: `Type code for confirmation`,
      },
    ];
  }, []);

  const methods = useForm({
    mode: `all`,
  });

  const { watch, handleSubmit } = methods;

  const watchData = watch();
  useEffect(() => {
    // console.log(`🚀 ~ useEffect ~ watchData`, watchData);
  }, [watchData]);

  async function onSubmit(data) {
    // console.log(`🚀 ~ onSubmit ~ data`, data);
    let headers = {};

    if (user?.nextAuthFactorKey) {
      headers = {
        "Next-Auth-Factor-Key": user.nextAuthFactorKey,
      };
    }
    if (additionalHeaders?.headers) {
      for (const key of Object.keys(additionalHeaders.headers)) {
        headers[key] = JSON.stringify(additionalHeaders.headers[key]);
      }
    }

    checkOtp({ id: user.id, data, headers });
  }

  useEffect(() => {
    const data = checkOtpResult.data;

    if (!data) {
      return;
    }

    createNotification({
      title: translate(`One-time-password authentification passed succesfully`),
      duration: notificationDuration,
    });

    if (router?.push) {
      nextAuthHandler({ router, data });
    }

    // console.log(`🚀 ~ useEffect ~ data`, data);
  }, [checkOtpResult, router]);

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
    checkOtpResult,
  };
};

export default useCheckOtp;
