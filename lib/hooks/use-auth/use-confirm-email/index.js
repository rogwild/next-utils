"use client";

import { useEffect, useMemo, useState, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import useSendEmailConfirmation from "../use-send-email-confirmation";
import { nextAuthHandler } from "../utils";

const useConfirmEmail = ({
  profilesApi,
  ping = 10,
  initialPing = 0,
  resendOnMount = false,
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
  const [email, setEmail] = useState();

  const {
    counter,
    submitFunction: sendEmailConfirmation,
    result: resendResult,
  } = useSendEmailConfirmation({
    profilesApi,
    ping,
    initialPing,
    useSelector,
    email,
    useRouter,
    createNotification,
    translate,
    notificationDuration,
    AdditionalHeadersContext,
  });

  const [onMountEmailWasSent, setOnMountEmailWasSent] = useState(
    !resendOnMount
  );

  const inputs = useMemo(() => {
    return [
      {
        type: `text`,
        name: `code`,
        label: `Code from email`,
        placeholder: `Type code from email`,
      },
      {
        type: `text`,
        name: `email`,
        className: `hidden`,
      },
    ];
  }, []);

  const [confirmEmail, confirmEmailResult] =
    profilesApi.useConfirmEmailMutation({});

  const methods = useForm({
    mode: `all`,
  });

  const { watch, setError, setValue, handleSubmit } = methods;

  const watchData = watch();

  useEffect(() => {
    if (user?.email && email !== user?.email) {
      setValue(`email`, user.email);
      setEmail(user.email);
    } else if (
      watchData.email &&
      watchData.email !== `` &&
      email !== watchData.email
    ) {
      setEmail(watchData.email);
    }
  }, [user, watchData]);

  useEffect(() => {
    if (resendOnMount && !onMountEmailWasSent && watchData?.email) {
      sendEmailConfirmation();
      setOnMountEmailWasSent(true);
    }
  }, [watchData?.email, onMountEmailWasSent]);

  useEffect(() => {
    if (user) {
      if (user.email) {
        setValue(`email`, user.email);
        setValue(`id`, user.id);
        return;
      }
    }

    if (typeof window !== `undefined`) {
      const code = new URLSearchParams(window?.location?.search)?.get(`code`);
      const email = new URLSearchParams(window?.location?.search)?.get(`email`);
      if (code) {
        setValue(`code`, code);
      }
      if (email) {
        setValue(`email`, email);
      }
    }
  }, [user, window]);

  useEffect(() => {
    // console.log(`🚀 ~ useEffect ~ watchData`, watchData);
  }, [watchData]);

  async function onSubmit(data) {
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

    confirmEmail({ data, headers });
  }

  useEffect(() => {
    // console.log(`🚀 ~ ConfirmEmail ~ data`, data);
    const data = confirmEmailResult.data;

    if (!data) {
      return;
    }

    createNotification({
      title: translate(`Email confirmed succesfully`),
      duration: notificationDuration,
    });

    if (router?.push) {
      nextAuthHandler({ router, data });
    }
  }, [confirmEmailResult, router]);

  return {
    counter,
    resend: sendEmailConfirmation,
    resendResult,
    submitFunction: handleSubmit(onSubmit),
    confirmEmailResult,
    inputs,
    methods,
  };
};

export default useConfirmEmail;
