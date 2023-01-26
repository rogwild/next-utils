import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const useCheckOtp = ({
  profilesApi,
  useSelector,
  useRouter = () => ({}),
  createNotification = () => ({}),
}) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth?.user); //?

  const [checkOtp, checkOtpResult] = profilesApi.useCheckOtpMutation();

  const inputs = useMemo(() => {
    return [
      {
        name: `code`,
        variant: `text`,
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

    checkOtp({ id: user.id, data, headers });
  }

  useEffect(() => {
    const data = checkOtpResult.data;

    if (!data) {
      return;
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
