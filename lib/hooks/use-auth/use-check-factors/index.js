"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import useSendEmailConfirmation from "../use-send-email-confirmation";
import useSendPhoneConfirmation from "../use-send-phone-confirmation";
import { nextAuthHandler } from "../utils";

const useCheckFactors = ({
  profilesApi,
  ping = 30,
  initialPing = 0,
  resendOnMount = false,
  useSelector,
  useRouter = () => ({}),
  createNotification = () => ({}),
  notificationDuration = 10000,
  translate = (string) => string,
  AdditionalHeadersContext = createContext(null),
}) => {
  const router = useRouter();
  const additionalHeaders = useContext(AdditionalHeadersContext);
  const user = useSelector((state) => state.auth?.user); //?
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const {
    counter: emailCounter,
    submitFunction: sendEmailConfirmation,
    result: resendEmailConfirmationResult,
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
  const {
    counter: phoneCounter,
    submitFunction: sendPhoneConfirmation,
    result: resendPhoneConfirmationResult,
  } = useSendPhoneConfirmation({
    profilesApi,
    ping,
    initialPing,
    useSelector,
    phone,
    useRouter,
    createNotification,
    translate,
    notificationDuration,
    AdditionalHeadersContext,
  });

  const nextAuthFactor = useSelector((state) => state.auth?.nextAuthFactor); //?
  const [onMountEmailWasSent, setOnMountEmailWasSent] = useState(
    !resendOnMount
  );

  const [checkFactors, checkFactorsResult] =
    profilesApi.useCheckFactorsMutation();

  const inputs = useMemo(() => {
    const localInputs = [];
    if (!user) {
      return localInputs;
    }

    if (
      user.isOtpConfirmationEnabled &&
      nextAuthFactor.handler.includes("user.checkOtp")
    ) {
      localInputs.push({
        component: `text`,
        name: `user.checkOtp`,
        label: `OTP code`,
        placeholder: `Type your otp code`,
      });
    }
    if (
      user.isPhoneConfirmationEnabled &&
      nextAuthFactor.handler.includes("auth.phoneConfirmation")
    ) {
      localInputs.push({
        component: `text`,
        name: `auth.phoneConfirmation`,
        label: `Phone code`,
        placeholder: `Type your phone code`,
      });
    }
    if (
      user.isEmailConfirmationEnabled &&
      nextAuthFactor.handler.includes("auth.emailConfirmation")
    ) {
      localInputs.push({
        component: `text`,
        name: `auth.emailConfirmation`,
        label: `Email code`,
        placeholder: `Type your email code`,
      });
    }
    return localInputs;
  }, [nextAuthFactor?.handler?.length, user?.id]);

  const methods = useForm({
    mode: `all`,
  });

  const { handleSubmit, watch, setValue, setError } = methods;

  const watchData = watch();

  // useEffect(() => {
  //   console.log(`🚀 ~ useCheckFactors ~ useEffect ~ watchData`, watchData);
  // }, [watchData]);

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

    checkFactors({ data, files: data.files, headers });
  }

  useEffect(() => {
    const data = checkFactorsResult.data;

    // console.log(`🚀 ~ useEffect ~ data`, data);

    if (!data) {
      return;
    }

    createNotification({
      title: translate(`Multi factor authentification passed succesfully`),
      duration: notificationDuration,
    });

    if (additionalHeaders?.headers) {
      additionalHeaders.setHeaders(null);
    }

    if (router?.push) {
      nextAuthHandler({ router, data });
    }
  }, [checkFactorsResult, router]);

  useEffect(() => {
    if (
      resendOnMount &&
      !onMountEmailWasSent &&
      Object.keys(watchData).length > 0
    ) {
      // console.log(`🚀 ~ useEffect ~ watchData`, watchData);

      if (watchData?.phone) {
        sendPhoneConfirmation();
      }

      if (watchData?.email) {
        sendEmailConfirmation();
      }

      setOnMountEmailWasSent(true);
    }
  }, [watchData, onMountEmailWasSent, user]);

  useEffect(() => {
    if (user) {
      if (
        !watchData.email ||
        !watchData.id ||
        !watchData.phone ||
        !watchData.current
      ) {
        setValue(`id`, user.id);
        setValue(`email`, user.email);
        setValue(`phone`, user.phone);
        setValue(`current`, nextAuthFactor);
        setEmail(user.email);
        setPhone(user.phone);

        return;
      }
    }
  }, [user, setValue]);

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
    checkFactorsResult,
    emailCounter,
    resendEmail: sendEmailConfirmation,
    resendEmailConfirmationResult,
    phoneCounter,
    resendPhone: sendPhoneConfirmation,
    resendPhoneConfirmationResult,
  };
};

export default useCheckFactors;
