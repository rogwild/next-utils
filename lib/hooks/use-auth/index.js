import useRegistration from "./use-registration";
import useLogin from "./use-login";
import useForgotPassword from "./use-forgot-password";
import useResetPassword from "./use-reset-password";
import useSendEmailConfirmation from "./use-send-email-confirmation";
import useConfirmEmail from "./use-confirm-email";
import useSendPhoneConfirmation from "./use-send-phone-confirmation";
import useConfirmPhone from "./use-confirm-phone";
import useUpdateMe from "./use-update-me";
import useMyProfileCreator from "./use-my-profile-creator";
import useSetOtp from "./use-set-otp";
import useDeleteOtp from "./use-delete-otp";
import useCheckOtp from "./use-check-otp";
import useChangePassword from "./use-change-password";
import useCheckFactors from "./use-check-factors";

const useAuth = {
  useSendEmailConfirmation,
  useForgotPassword,
  useLogin,
  useRegistration,
  useResetPassword,
  useSendPhoneConfirmation,
  useConfirmEmail,
  useConfirmPhone,
  useUpdateMe,
  useMyProfileCreator,
  useSetOtp,
  useDeleteOtp,
  useCheckOtp,
  useChangePassword,
  useCheckFactors,
};

export default useAuth;
