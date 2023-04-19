"use client";

import { useEffect, useMemo, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { nextAuthHandler } from "../utils";

const useLogin = ({
  profilesApi,
  useRouter = () => ({}),
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
  AdditionalHeadersContext = createContext(null),
}) => {
  const additionalHeaders = useContext(AdditionalHeadersContext);
  const router = useRouter();

  const [loginWithEmailAndPassword, loginWithEmailAndPasswordResult] =
    profilesApi.useLoginWithEmailAndPasswordMutation();

  const inputs = useMemo(() => {
    return [
      {
        component: `text`,
        name: `identifier`,
        label: `Email`,
        placeholder: `Type your email`,
      },
      {
        component: `text`,
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
    const headers = {};

    if (additionalHeaders?.headers) {
      for (const key of Object.keys(additionalHeaders.headers)) {
        headers[key] = JSON.stringify(additionalHeaders.headers[key]);
      }
    }

    loginWithEmailAndPassword({ data, files: data.files, headers });
  }

  useEffect(() => {
    const data = loginWithEmailAndPasswordResult.data;

    if (
      loginWithEmailAndPasswordResult?.error?.data?.error?.message ===
      "Your account email is not confirmed"
    ) {
      router.push(`/auth/confirm-email?email=${watchData.identifier}`);
    }

    if (!data) {
      return;
    }

    if (additionalHeaders?.headers) {
      additionalHeaders.setHeaders(null);
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
