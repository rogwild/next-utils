import { createContext, useMemo, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { selectors } from "../../../redux/slices/auth";

const useUpdateMe = ({
  profilesApi,
  useSelector,
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
  AdditionalHeadersContext = createContext(null),
}) => {
  const additionalHeaders = useContext(AdditionalHeadersContext);

  const accountId = useSelector(selectors.selectAccountId); //?
  const [updateMe, updateMeResult] = profilesApi.useUpdateMeMutation();

  const inputs = useMemo(() => {
    return [
      {
        component: `text`,
        name: `username`,
        label: `Username`,
        placeholder: `Type your username`,
      },
    ];
  }, []);

  const methods = useForm({
    mode: `all`,
  });

  const { handleSubmit, watch } = methods;

  const watchData = watch();

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

    updateMe({ id: accountId, data, files: data.files, headers });
  }

  useEffect(() => {
    if (updateMeResult?.isSuccess) {
      createNotification({
        title: translate(`Profile succesfully updated`),
        duration: notificationDuration,
      });

      if (additionalHeaders?.headers) {
        additionalHeaders.setHeaders(null);
      }
    }
  }, [updateMeResult]);

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
    updateMeResult,
  };
};

export default useUpdateMe;
