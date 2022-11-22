// import {
//   Api,
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
//   FetchBaseQueryMeta,
//   MutationDefinition,
//   QueryDefinition,
// } from "@reduxjs/toolkit/dist/query";
// import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
// import {
//   UseMutation,
//   UseQuery,
// } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {
  appendFilesToFormData,
  removeEmptyFields,
  transformResponseItem,
} from "../../../api/index";

// interface IStrapiParams {
//   filters?: object;
//   populate?: object;
//   fields?: object;
//   sort?: Array<string>;
//   pagination?: object;
// }

// type IQueryParams = {
//   id: string;
//   filters?: object;
//   populate?: object;
//   fields?: object;
//   sort?: Array<string>;
//   pagination?: object;
// };

// type IUseGetQuery = UseQuery<
//   QueryDefinition<
//     any,
//     BaseQueryFn<
//       string | FetchArgs,
//       unknown,
//       FetchBaseQueryError,
//       any,
//       FetchBaseQueryMeta
//     >,
//     string,
//     any,
//     "backend"
//   >
// >;

// type IUseMutation = UseMutation<
//   MutationDefinition<
//     any,
//     BaseQueryFn<
//       string | FetchArgs,
//       unknown,
//       FetchBaseQueryError,
//       any,
//       FetchBaseQueryMeta
//     >,
//     string,
//     any,
//     "backend"
//   >
// >;

// type TBuild = EndpointBuilder<
//   BaseQueryFn<
//     string | FetchArgs,
//     unknown,
//     FetchBaseQueryError,
//     any,
//     FetchBaseQueryMeta
//   >,
//   string,
//   "backend"
// >;

// type TProfilesHooks = {
//   useGetMeQuery: IUseGetQuery;
//   useLazyGetMeQuery: IUseGetQuery;
//   useGetProfileByIdQuery: IUseGetQuery;
//   useLazyGetProfileByIdQuery: IUseGetQuery;
//   useConfirmPhoneMutation: IUseMutation;
//   useLoginWithEmailAndPasswordMutation: IUseMutation;
//   useSendConfirmPhoneMutation: IUseMutation;
//   useConfirmEmailMutation: IUseMutation;
//   useForgotPasswordMutation: IUseMutation;
//   useResetPasswordMutation: IUseMutation;
//   useCheckOtpMutation: IUseMutation;
//   useSendEmailCodeMutation: IUseMutation;
//   useUpdateMeMutation: IUseMutation;
//   useRegisterMutation: IUseMutation;
//   useGenerateOtpQuery: IUseGetQuery;
// };

// type TBackendServicApi = Api<
//   BaseQueryFn<
//     string | FetchArgs,
//     unknown,
//     FetchBaseQueryError,
//     any,
//     FetchBaseQueryMeta
//   >,
//   any,
//   "backend",
//   string,
//   any
// >;

const prepareDataToSend = (params) => {
  const { data, files } = params;

  const clearedData = removeEmptyFields({ data, files });

  console.log(`🚀 ~ clearedData`, clearedData);

  const formData = new FormData();
  formData.append(`data`, JSON.stringify(clearedData));

  if (files) {
    appendFilesToFormData(formData, files);
  }

  return formData;
};

export function createProfilesApi(backendServiceApi) {
  const profilesApi = backendServiceApi.injectEndpoints({
    endpoints: (build) => ({
      getMe: build.query({
        query: () => {
          return {
            url: `users/me`,
          };
        },

        transformResponse: transformResponseItem,

        providesTags: (result) =>
          result ? [{ type: `Profile`, id: result.id }] : [],
      }),

      loginWithEmailAndPassword: build.mutation({
        query: ({ identifier, password }) => {
          return {
            method: "POST",
            url: `auth/local`,
            body: { identifier, password },
          };
        },

        transformResponse: transformResponseItem,
      }),

      sendConfirmPhone: build.mutation({
        query: ({ data }) => {
          return {
            url: `auth/send-phone-confirmation`,
            method: "POST",
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
        query: (params) => {
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
            method: "POST",
            body: { email },
          };
        },

        transformResponse: transformResponseItem,
      }),

      resetPassword: build.mutation({
        query: ({ password, code }) => {
          return {
            url: `auth/reset-password`,
            method: "POST",
            body: { password, passwordConfirmation: password, code },
          };
        },

        transformResponse: transformResponseItem,
      }),

      register: build.mutation({
        query: ({ data }) => {
          return {
            url: `auth/local/register`,
            method: `POST`,
            body: data,
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

      updateMe: build.mutation({
        query: (params) => {
          const { id } = params;

          const formData = prepareDataToSend(params);

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
        query: (params) => {
          const { id, populate } = params;

          return {
            url: `users/${id}`,
            params: {
              populate,
            },
          };
        },

        transformResponse: transformResponseItem,

        providesTags: (result, _error, id) => {
          return result ? [{ type: `Profile`, id }] : [];
        },
      }),

      generateOtp: build.query({
        query: (params = {}) => {
          const {} = params;

          return {
            url: `auth/otp-secret`,
          };
        },

        transformResponse: transformResponseItem,

        invalidatesTags: (_result, _error, { id }) => [],
      }),
    }),
  });

  const {
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

  return {
    profilesApi,
    hooks: {
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
    },
  };
}
