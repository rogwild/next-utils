"use client";

import { useEffect, useMemo, createContext, useContext } from "react";
import { useForm } from "react-hook-form";

const useResetPassword = ({
  profilesApi,
  authSlice,
  useDispatch,
  useRouter = () => ({}),
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
  AdditionalHeadersContext = createContext(null),
}) => {
  const additionalHeaders = useContext(AdditionalHeadersContext);
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
        component: `text`,
        type: `password`,
        placeholder: `Type your new password`,
      },
      {
        label: `Repeat New Password`,
        name: `passwordConfirmation`,
        component: `text`,
        type: `password`,
        placeholder: `Repeat your new password`,
      },
      {
        name: `code`,
        component: `text`,
        className: `hidden`,
      },
      {
        name: `email`,
        component: `text`,
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
      const email = new URLSearchParams(window?.location?.search)?.get(`email`);
      if (code) {
        setValue(`code`, code);
      }
      if (email) {
        setValue(`email`, email);
      }
    }
  }, [router.query, watchData]);

  async function onSubmit(data) {
    const headers = {};

    if (additionalHeaders?.headers) {
      for (const key of Object.keys(additionalHeaders.headers)) {
        headers[key] = JSON.stringify(additionalHeaders.headers[key]);
      }
    }

    resetPassword({ data, files: data.files, headers });
  }

  useEffect(() => {
    if (resetPasswordResult?.isSuccess) {
      createNotification({
        title: translate(`New password was set`),
        duration: notificationDuration,
      });

      if (additionalHeaders?.headers) {
        additionalHeaders.setHeaders(null);
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
