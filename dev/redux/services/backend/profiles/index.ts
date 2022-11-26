import { backendServiceApi } from "..";
import { createProfilesApi } from "../../../../../src/redux/queries/profiles/index";

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
