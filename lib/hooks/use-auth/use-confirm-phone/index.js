import {
  useEffect,
  useMemo,
  useCallback,
  useState,
  createContext,
  useContext,
} from "react";
import { useForm } from "react-hook-form";
import { nextAuthHandler } from "../utils";

const useConfirmPhone = ({
  profilesApi,
  ping = 30,
  initialPing = 0,
  resendOnMount = false,
  useSelector,
  useRouter = () => ({}),
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
  AdditionalHeadersContext = createContext(null),
}) => {
  const router = useRouter();
  const additionalHeaders = useContext(AdditionalHeadersContext);
  const user = useSelector((state) => state.auth?.user); //?

  const [onMountPhoneWasSent, setOnMountPhoneWasSent] = useState(
    !resendOnMount
  );

  const [counter, setCounter] = useState(initialPing);

  const inputs = useMemo(() => {
    return [
      {
        type: `text`,
        name: `code`,
        label: `Code from phone`,
        placeholder: `Type code from phone`,
      },
      {
        type: `text`,
        name: `phone`,
        className: `hidden`,
      },
    ];
  }, []);

  const [confirmPhone, confirmPhoneResult] =
    profilesApi.useConfirmPhoneMutation({});
  const [sendPhoneConfirmation, resendResult] =
    profilesApi.useSendPhoneConfirmationMutation();

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
    if ((!watchData.phone || watchData.phone === ``) && user?.phone) {
      setValue(`phone`, user.phone);
    }
  }, [user, watchData]);

  useEffect(() => {
    if (resendOnMount && !onMountPhoneWasSent && watchData?.phone) {
      resend();
      setOnMountPhoneWasSent(true);
    }
  }, [watchData?.phone, onMountPhoneWasSent]);

  const resend = useCallback(() => {
    if (!watchData.phone) {
      console.error(`Pass phone for resending code`);
      setError(`phone`, { type: `required`, message: `Empty phone address` });
      return;
    }

    setCounter(ping);
    setOnMountPhoneWasSent(true);

    sendPhoneConfirmation({
      data: {
        phone: watchData.phone,
      },
    });
  }, [watchData?.phone]);

  useEffect(() => {
    if (user) {
      if (user.phone) {
        setValue(`phone`, user.phone);
        setValue(`id`, user.id);
        return;
      }
    }

    if (typeof window !== `undefined`) {
      const code = new URLSearchParams(window?.location?.search)?.get(`code`);
      const phone = new URLSearchParams(window?.location?.search)?.get(`phone`);
      if (code) {
        setValue(`code`, code);
      }
      if (phone) {
        setValue(`phone`, phone);
      }
    }
  }, [user]);

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

    confirmPhone({ data, headers });
  }

  useEffect(() => {
    // console.log(`🚀 ~ ConfirmPhone ~ data`, data);
    const data = confirmPhoneResult.data;

    if (!data) {
      return;
    }

    createNotification({
      title: translate(`Phone confirmed succesfully`),
      duration: notificationDuration,
    });

    if (router?.push) {
      nextAuthHandler({ router, data });
    }
  }, [confirmPhoneResult, router]);

  useEffect(() => {
    if (resendResult?.isSuccess) {
      createNotification({
        title: translate(`Code was sent to your phone`),
        duration: notificationDuration,
      });
    }
  }, [resendResult]);

  return {
    counter,
    resend,
    resendResult,
    submitFunction: handleSubmit(onSubmit),
    confirmPhoneResult,
    inputs,
    methods,
  };
};

export default useConfirmPhone;
