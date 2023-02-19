import { useEffect, useMemo, useState, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { selectors } from "../../../redux/slices/auth";

const useSetOtp = ({
  profilesApi,
  useSelector,
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
  AdditionalHeadersContext = createContext(null),
}) => {
  const additionalHeaders = useContext(AdditionalHeadersContext);
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
    const headers = {};

    if (additionalHeaders?.headers) {
      for (const key of Object.keys(additionalHeaders.headers)) {
        headers[key] = JSON.stringify(additionalHeaders.headers[key]);
      }
    }

    setOtp({ id: accountId, data, files: data.files, headers });
  }

  useEffect(() => {
    const { data } = setOtpResult;

    if (data?.user) {
      createNotification({
        title: translate(`Multi-Factor authentification was setted`),
        duration: notificationDuration,
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
