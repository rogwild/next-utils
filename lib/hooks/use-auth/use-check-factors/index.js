import { useEffect, useMemo } from "react";
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
}) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth?.user); //?
  const nextAuthFactor = useSelector((state) => state.auth?.nextAuthFactor); //?

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

  const { handleSubmit, watch, setValue } = methods;

  const watchData = watch();
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

    checkFactors({ data, files: data.files, headers });
  }

  useEffect(() => {
    const data = checkFactorsResult.data;

    console.log(`🚀 ~ useEffect ~ data`, data);

    if (!data) {
      return;
    }

    if (router?.push) {
      nextAuthHandler({ router, data });
    }
  }, [checkFactorsResult, router]);

  useEffect(() => {
    if (user) {
      if (user.id) {
        setValue(`id`, user.id);
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
  };
};

export default useCheckFactors;
