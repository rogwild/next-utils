import { backendServiceApi } from "src/redux/services/backend/index";
import utils from "~next-utils";
const { appendFilesToFormData, removeEmptyFields, transformResponseItem } =
  utils.api;
import { userPopulate } from "~utils/api";

export const profilesApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query({
      query: () => ({
        url: `users/me`,
      }),

      transformResponse: transformResponseItem,

      providesTags: (result) =>
        result ? [{ type: `Profile`, id: result.id }] : [],
    }),

    loginWithEmailAndCode: build.mutation({
      query: ({ confirmation, email }) => ({
        url: `auth/email-confirmation`,
        params: { confirmation, email },
      }),

      transformResponse: transformResponseItem,
    }),

    loginWithEmailAndPassword: build.mutation({
      query: ({ identifier, password }) => ({
        method: `POST`,
        url: `auth/local`,
        body: { identifier, password },
      }),

      transformResponse: transformResponseItem,
    }),

    register: build.mutation({
      query: ({ data }) => {
        return {
          url: `auth/local/register`,
          method: `POST`,
          body: { data },
        };
      },

      transformResponse: transformResponseItem,
    }),

    sendEmailCode: build.mutation({
      query: ({ email }) => ({
        url: `auth/send-email-confirmation`,
        method: `POST`,
        body: { email },
      }),

      transformResponse: transformResponseItem,
    }),

    updateUser: build.mutation({
      query: (params = {}) => {
        const { id, data, files } = params;

        const clearedData = removeEmptyFields({ data, files });

        const formData = new FormData();
        formData.append(`data`, JSON.stringify(clearedData));

        if (files) {
          appendFilesToFormData(formData, files);
        }

        return {
          url: `users/${id}`,
          method: `PUT`,
          body: formData,
        };
      },

      transformResponse: transformResponseItem,

      invalidatesTags: (_result, _error, { id }) => [{ type: `Profile`, id }],
    }),

    getProfileById: build.query({
      query: (id) => ({
        url: `users/${id}`,
        params: {
          populate: userPopulate,
        },
      }),

      transformResponse: transformResponseItem,

      providesTags: (result, _error, id) => {
        return result ? [{ type: `Profile`, id }] : [];
      },
    }),

    deposit: build.mutation({
      query: ({ data }) => ({
        url: `users/deposit`,
        method: `POST`,
        body: { data },
      }),

      transformResponse: transformResponseItem,

      invalidatesTags: (_result, _error, { id }) => [{ type: `Profile`, id }],
    }),

    updateAddressBook: build.mutation({
      query: ({ data }) => ({
        url: `users/update-address-book`,
        method: `POST`,
        body: { data },
      }),
      transformResponse: transformResponseItem,
    }),

    sendConfirmPhone: build.mutation({
      query: ({ data }) => {
        return {
          url: `auth/send-phone-confirmation`,
          method: `POST`,
          body: data,
        };
      },
    }),

    confirmPhone: build.mutation({
      query: ({ confirmation }) => {
        return {
          url: `auth/phone-confirmation`,
          params: { confirmation },
        };
      },
    }),

    checkOtp: build.mutation({
      query: (params = {}) => {
        const { userId, code } = params;

        return {
          url: `auth/check-otp/${userId}`,
          params: {
            code,
          },
        };
      },

      transformResponse: transformResponseItem,
    }),

    confirmEmail: build.mutation({
      query: ({ confirmation, email }) => {
        return {
          url: `auth/email-confirmation`,
          params: { confirmation, email },
        };
      },

      transformResponse: transformResponseItem,
    }),

    forgotPassword: build.mutation({
      query: ({ email, type }) => {
        console.log(`🚀 ~ email, type`, email, type);
        return {
          url: `auth/forgot-password`,
          method: `POST`,
          body: { email },
        };
      },

      transformResponse: transformResponseItem,
    }),

    resetPassword: build.mutation({
      query: ({ password, code }) => {
        return {
          url: `auth/reset-password`,
          method: `POST`,
          body: { password, passwordConfirmation: password, code },
        };
      },

      transformResponse: transformResponseItem,
    }),
  }),
});

export const {
  useGetMeQuery,
  useLazyGetMeQuery,
  useGetProfileByIdQuery,
  useLazyGetProfileByIdQuery,
  useLoginWithEmailAndCodeMutation,
  useLoginWithEmailAndPasswordMutation,
  useConfirmPhoneMutation,
  useSendConfirmPhoneMutation,
  useCheckOtpMutation,
  useDepositMutation,
  useSendEmailCodeMutation,
  useUpdateUserMutation,
  useRegisterMutation,
  useUpdateAddressBookMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useConfirmEmailMutation,
} = profilesApi;
