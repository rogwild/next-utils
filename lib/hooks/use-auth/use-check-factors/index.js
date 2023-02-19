import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { useForm } from "react-hook-form";
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
  const [emailCounter, setEmailCounter] = useState(initialPing);
  const [phoneCounter, setPhoneCounter] = useState(initialPing);

  const nextAuthFactor = useSelector((state) => state.auth?.nextAuthFactor); //?
  const [onMountEmailWasSent, setOnMountEmailWasSent] = useState(
    !resendOnMount
  );

  const [checkFactors, checkFactorsResult] =
    profilesApi.useCheckFactorsMutation();
  const [sendEmailConfirmation, resendEmailConfirmationResult] =
    profilesApi.useSendEmailConfirmationMutation();
  const [sendPhoneConfirmation, resendPhoneConfirmationResult] =
    profilesApi.useSendPhoneConfirmationMutation();

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
        resendEmail();
      }

      if (watchData?.email) {
        resendPhone();
      }

      setOnMountEmailWasSent(true);
    }
  }, [watchData, onMountEmailWasSent, user]);

  useEffect(() => {
    if (emailCounter > 0) {
      const timer = setInterval(() => setEmailCounter(emailCounter - 1), 1000);

      return () => clearInterval(timer);
    }
  }, [emailCounter]);

  useEffect(() => {
    if (phoneCounter > 0) {
      const timer = setInterval(() => setPhoneCounter(phoneCounter - 1), 1000);

      return () => clearInterval(timer);
    }
  }, [phoneCounter]);

  const resendEmail = useCallback(() => {
    if (emailCounter > 0) {
      return;
    }

    if (!watchData.email) {
      console.error(`Empty email address field`);
      setError(`email`, { type: `required`, message: `Empty email field` });
      return;
    }

    setEmailCounter(ping);
    setOnMountEmailWasSent(true);

    sendEmailConfirmation({
      data: {
        email: watchData.email,
      },
    });
  }, [sendEmailConfirmation, watchData?.email]);

  const resendPhone = useCallback(() => {
    if (phoneCounter > 0) {
      return;
    }

    if (!watchData.phone) {
      console.error(`Empty phone field`);
      setError(`phone`, { type: `required`, message: `Empty phone field` });
      return;
    }

    setPhoneCounter(ping);
    setOnMountEmailWasSent(true);

    sendPhoneConfirmation({
      data: {
        phone: watchData.phone,
      },
    });
  }, [sendEmailConfirmation, watchData?.email]);

  useEffect(() => {
    if (resendEmailConfirmationResult.isSuccess) {
      createNotification({
        title: translate(`Code was sent to your email`),
        duration: notificationDuration,
      });
    }
  }, [resendEmailConfirmationResult]);

  useEffect(() => {
    if (resendPhoneConfirmationResult.isSuccess) {
      createNotification({
        title: translate(`Code was sent to your phone`),
        duration: notificationDuration,
      });
    }
  }, [resendPhoneConfirmationResult]);

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
    resendEmail,
    resendEmailConfirmationResult,
    phoneCounter,
    resendPhone,
    resendPhoneConfirmationResult,
  };
};

export default useCheckFactors;
