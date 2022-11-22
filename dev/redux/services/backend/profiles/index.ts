import { backendServiceApi } from "..";
import { createProfilesApi } from "../../../../../src/redux/queries/profiles";

export const { profilesApi } = createProfilesApi(backendServiceApi);

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
} = profilesApi;
