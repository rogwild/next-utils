import { useEffect, useMemo, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { nextAuthHandler } from "../utils";

const useConfirmEmail = ({
  profilesApi,
  ping = 30,
  initialPing = 0,
  resendOnMount = false,
  useSelector,
  useRouter = () => ({}),
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
}) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth?.user); //?

  const [onMountEmailWasSent, setOnMountEmailWasSent] = useState(
    !resendOnMount
  );

  const [counter, setCounter] = useState(initialPing);

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
  const [sendEmailConfirmation, resendResult] =
    profilesApi.useSendEmailConfirmationMutation();

  const methods = useForm({
    mode: `all`,
  });

  const { watch, setError, setValue, handleSubmit } = methods;

  const watchData = watch();

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => setCounter(counter - 1), 1000);

      return () => clearInterval(timer);
    }
  }, [counter]);

  useEffect(() => {
    if ((!watchData.email || watchData.email === ``) && user?.email) {
      setValue(`email`, user.email);
    }
  }, [user, watchData]);

  useEffect(() => {
    if (resendOnMount && !onMountEmailWasSent && watchData?.email) {
      resend();
      setOnMountEmailWasSent(true);
    }
  }, [watchData?.email, onMountEmailWasSent]);

  const resend = useCallback(() => {
    if (!watchData.email) {
      console.error(`Pass email for resending code`);
      setError(`email`, { type: `required`, message: `Empty email address` });
      return;
    }

    setCounter(ping);
    setOnMountEmailWasSent(true);

    sendEmailConfirmation({
      data: {
        email: watchData.email,
      },
    });
  }, [watchData?.email]);

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
  }, [user]);

  useEffect(() => {
    // console.log(`🚀 ~ useEffect ~ watchData`, watchData);
  }, [watchData]);

  console.log(`🚀 ~ onSubmit ~ user`, user);

  async function onSubmit(data) {
    let headers = {};
    if (user?.nextAuthFactorKey) {
      headers = {
        "Next-Auth-Factor-Key": user.nextAuthFactorKey,
      };
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

  useEffect(() => {
    if (resendResult?.isSuccess) {
      createNotification({
        title: translate(`Code was sent to your email`),
        duration: notificationDuration,
      });
    }
  }, [resendResult]);

  return {
    counter,
    resend,
    resendResult,
    submitFunction: handleSubmit(onSubmit),
    confirmEmailResult,
    inputs,
    methods,
  };
};

export default useConfirmEmail;
