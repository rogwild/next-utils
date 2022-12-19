import { backendServiceApi } from "../../";
import utils from "~next-utils";
const { createProfilesApi } = utils.redux.queries.profiles;

export const { profilesApi, hooks } = createProfilesApi(backendServiceApi);

export const {
  useGetMeQuery,
  useLazyGetMeQuery,
  useGetProfileByIdQuery,
  useLazyGetProfileByIdQuery,
  useConfirmPhoneMutation,
  useConfirmEmailMutation,
  useLoginWithEmailAndPasswordMutation,
  useSendPhoneConfitmationMutation,
  useSendEmailConfirmationMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useCheckOtpMutation,
  useSendConfirmEmailMutation,
  useUpdateMeMutation,
  useRegisterMutation,
  useGenerateOtpSecretQuery,
  useSetOtpQuery,
  useCheckOtpQuery,
} = hooks;
