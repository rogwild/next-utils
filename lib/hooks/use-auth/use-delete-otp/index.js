import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { selectors } from "../../../redux/slices/auth";

const useDeleteOtp = ({
  profilesApi,
  createNotification = () => ({}),
  useSelector,
}) => {
  const accountId = useSelector(selectors.selectAccountId); //?
  const [deleteOtp, deleteOtpResult] = profilesApi.useDeleteOtpMutation({});

  const inputs = useMemo(() => {
    return [
      {
        variant: "text",
        name: "code",
        label: "OTP code",
        placeholder: "Type One-time-password code",
        rules: {
          required: {
            value: true,
            message: "Required field",
          },
        },
      },
    ];
  }, []);

  const methods = useForm({
    mode: "all",
  });

  const { handleSubmit, watch } = methods;

  const watchData = watch();

  useEffect(() => {
    // console.log(`🚀 ~ useEffect ~ watchData`, watchData);
  }, [watchData]);

  async function onSubmit(data) {
    deleteOtp({ id: accountId, data });
  }

  useEffect(() => {
    const { data } = deleteOtpResult;

    if (data?.user) {
      createNotification({
        title: `Password successfully changed`,
        contentContainerClassName: `@pg pl-2 pr-4 py-4 @bxsw shadow-lg @ttc text-gray-base`,
        containerClassName: `@ow overflow-visible`,
        duration: 40000,
      });
    }
  }, [deleteOtpResult]);

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
  };
};

export default useDeleteOtp;
