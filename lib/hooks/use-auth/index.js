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
import useMyProfileCreator from "./use-my-profile-creator";
import useSetOtp from "./use-set-otp";

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
  useMyProfileCreator,
  useSetOtp,
};

export default useAuth;
