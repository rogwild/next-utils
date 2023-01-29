import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { selectors } from "../../../redux/slices/auth";

const useSetOtp = ({
  profilesApi,
  useSelector,
  createNotification = () => ({}),
}) => {
  const accountId = useSelector(selectors.selectAccountId); //?
  const generateOtpSecretResult = profilesApi.useGenerateOtpSecretQuery(
    {
      id: accountId,
    },
    { skip: !accountId }
  );
  const [setOtp, setOtpResult] = profilesApi.useSetOtpMutation({});

  const inputs = useMemo(() => {
    return [
      {
        component: "text",
        name: "code",
        label: "OTP code",
        placeholder: "Type One-time-password",
        rules: {
          required: {
            value: true,
            message: `Required field`,
          },
        },
      },
      {
        component: "text",
        type: "password",
        name: "otp_secret",
        className: "hidden",
        rules: {
          required: {
            value: true,
            message: `Required field`,
          },
        },
      },
    ];
  }, []);

  const methods = useForm({
    mode: `all`,
  });

  const { handleSubmit, watch, setValue } = methods;

  const watchData = watch();

  useEffect(() => {
    const { data } = generateOtpSecretResult;
    if (data && (!watchData.otp_secret || watchData.otp_secret === "")) {
      setValue("otp_secret", data.secretHashCode);
    }
  }, [watchData, generateOtpSecretResult]);

  useEffect(() => {
    // console.log(`🚀 ~ useEffect ~ watchData`, watchData);
  }, [watchData]);

  async function onSubmit(data) {
    setOtp({ id: accountId, data, files: data.files });
  }

  useEffect(() => {
    const { data } = setOtpResult;

    if (data?.user) {
      createNotification({
        title: `Multi-Factor authentification was setted`,
        contentContainerClassName: `@pg pl-2 pr-4 py-4 @bxsw shadow-lg @ttc text-gray-base`,
        containerClassName: `@ow overflow-visible`,
        duration: 40000,
      });
    }
  }, [setOtpResult]);

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
    setOtpResult,
    generateOtpSecretResult,
  };
};

export default useSetOtp;
