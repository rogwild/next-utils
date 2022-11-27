import useSendEmailConfirmation from "./use-send-email-confirmation";
import useForgotPassword from "./use-forgot-password";
import useLogin from "./use-login";
import useRegister from "./use-register";
import useResetPassword from "./use-reset-password";
import usePhoneConfirmation from "./use-phone-confirmation";
import useSendPhoneConfirmation from "./use-send-phone-confirmation";
import useConfirmEmail from "./use-confirm-email";
import useConfirmPhone from "./use-confirm-phone";
import useUpdateMe from "./use-update-me";
import useMyProfile from "./use-my-profile";

const useAuth = {
  useSendEmailConfirmation,
  usePhoneConfirmation,
  useForgotPassword,
  useLogin,
  useRegister,
  useResetPassword,
  useSendPhoneConfirmation,
  useConfirmEmail,
  useConfirmPhone,
  useUpdateMe,
  useMyProfile,
};

export default useAuth;
