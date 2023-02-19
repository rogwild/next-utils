import { useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { selectors } from "../../../redux/slices/auth";

const useUpdateMe = ({
  profilesApi,
  useSelector,
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
}) => {
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
    updateMe({ id: accountId, data, files: data.files });
  }

  useEffect(() => {
    if (updateMeResult?.isSuccess) {
      createNotification({
        title: translate(`Profile succesfully updated`),
        duration: notificationDuration,
      });
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
