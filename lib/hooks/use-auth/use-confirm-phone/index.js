import {
  useEffect,
  useMemo,
  useCallback,
  useState,
  createContext,
  useContext,
} from "react";
import { useForm } from "react-hook-form";
import useSendPhoneConfirmation from "../use-send-phone-confirmation";
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
  const [phone, setPhone] = useState();
  const {
    counter,
    submitFunction: sendPhoneConfirmation,
    result: resendResult,
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

  const [onMountPhoneWasSent, setOnMountPhoneWasSent] = useState(
    !resendOnMount
  );

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

  const methods = useForm({
    mode: `all`,
  });

  const { watch, setError, setValue, handleSubmit } = methods;

  const watchData = watch();

  useEffect(() => {
    if ((!watchData.phone || watchData.phone === ``) && user?.phone) {
      setValue(`phone`, user.phone);
      setPhone(user.phone);
    }
  }, [user, watchData]);

  useEffect(() => {
    if (resendOnMount && !onMountPhoneWasSent && phone) {
      sendPhoneConfirmation();
      setOnMountPhoneWasSent(true);
    }
  }, [watchData?.phone, onMountPhoneWasSent]);

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

    if (additionalHeaders?.headers) {
      additionalHeaders.setHeaders(null);
    }

    if (router?.push) {
      nextAuthHandler({ router, data });
    }
  }, [confirmPhoneResult, router]);

  return {
    counter,
    resend: sendPhoneConfirmation,
    resendResult,
    submitFunction: handleSubmit(onSubmit),
    confirmPhoneResult,
    inputs,
    methods,
  };
};

export default useConfirmPhone;
