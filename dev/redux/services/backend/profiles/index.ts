import { backendServiceApi } from "..";
import utils from "../../../../../src";
const { createProfilesApi } = utils.redux.queries.profiles;

export const { profilesApi, hooks } = createProfilesApi(backendServiceApi);

export const {
  useGetMeQuery,
  useLazyGetMeQuery,
  useGetProfileByIdQuery,
  useLazyGetProfileByIdQuery,
  useConfirmPhoneMutation,
  useLoginWithEmailAndPasswordMutation,
  useSendConfirmPhoneMutation,
  useConfirmEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useCheckOtpMutation,
  useSendEmailCodeMutation,
  useUpdateMeMutation,
  useRegisterMutation,
  useGenerateOtpQuery,
} = hooks;
