import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

const useChangePassword = ({
  profilesApi,
  createNotification = () => ({}),
}) => {
  const [changePassword, changePasswordResult] =
    profilesApi.useChangePasswordMutation({});

  const inputs = useMemo(() => {
    return [
      {
        variant: "text",
        type: "password",
        name: "currentPassword",
        label: "Current password",
        placeholder: "Type your current password",
        rules: {
          required: {
            value: true,
            message: "Required field",
          },
        },
      },
      {
        variant: "text",
        type: "password",
        name: "password",
        label: "New password",
        placeholder: "Type new password",
        rules: {
          required: {
            value: true,
            message: "Required field",
          },
        },
      },
      {
        variant: "text",
        type: "password",
        name: "passwordConfirmation",
        label: "Repeat new password",
        placeholder: "Repeat new password",
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
    changePassword({ data });
  }

  return {
    inputs,
    methods,
    submitFunction: handleSubmit(onSubmit),
    changePasswordResult,
  };
};

export default useChangePassword;
