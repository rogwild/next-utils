import { backendServiceApi } from "..";
import utils from "../../../../../lib";
const { createProfilesApi } = utils.redux.queries.profiles;

export const { profilesApi, hooks } = createProfilesApi(backendServiceApi);
console.log(`🚀 ~ profilesApi`, profilesApi);

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
