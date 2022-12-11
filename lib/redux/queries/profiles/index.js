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
import qs from "qs";

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

function profileInvalidate(result, _error) {
  return result ? [{ type: `Profile`, id: result.id }] : [];
}

const prepareDataToSend = (params) => {
  const { data, files } = params;

  console.log(`🚀 ~ prepareDataToSend ~ data`, data);

  const clearedData = removeEmptyFields({ data, files });

  console.log(`🚀 ~ prepareDataToSend ~ clearedData`, clearedData);

  const formData = new FormData();
  formData.append(`data`, JSON.stringify(clearedData));

  console.log(`🚀 ~ prepareDataToSend ~ files`, files);

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

        transformResponse: (item) => {
          return transformResponseItem(item);
        },

        providesTags: (result) =>
          result ? [{ type: `Profile`, id: result.id }] : [],
      }),

      loginWithEmailAndPassword: build.mutation({
        query: (params) => {
          const formData = prepareDataToSend(params);

          return {
            method: "POST",
            url: `auth/local`,
            body: formData,
          };
        },

        transformResponse: (res) => {
          return transformResponseItem(res);
        },
      }),

      checkOtp: build.mutation({
        query: (params) => {
          const { id, data, headers = {} } = params;

          return {
            url: `users/${id}/otp`,
            params: {
              ...data,
            },
            headers,
          };
        },

        transformResponse: transformResponseItem,
      }),

      sendEmailConfirmation: build.mutation({
        query: (params) => {
          const formData = prepareDataToSend(params);

          return {
            url: `auth/send-email-confirmation`,
            method: `POST`,
            body: formData,
          };
        },

        transformResponse: transformResponseItem,
      }),

      confirmEmail: build.mutation({
        query: ({ data, headers = {} }) => {
          const stringifiedParams = qs.stringify(data);
          // console.log(
          //   `🚀 ~ createProfilesApi ~ stringifiedParams`,
          //   stringifiedParams
          // );

          return {
            url: `auth/email-confirmation?${stringifiedParams}`,
            headers,
          };
        },

        transformResponse: transformResponseItem,
      }),

      sendPhoneConfirmation: build.mutation({
        query: (params) => {
          const formData = prepareDataToSend(params);

          return {
            url: `auth/send-phone-confirmation`,
            method: "POST",
            body: formData,
          };
        },
      }),

      confirmPhone: build.mutation({
        query: ({ data, headers = {} }) => {
          const stringifiedParams = qs.stringify(data); //?

          return {
            url: `auth/phone-confirmation?${stringifiedParams}`,
            headers,
          };
        },
      }),

      forgotPassword: build.mutation({
        query: (params) => {
          const formData = prepareDataToSend(params);

          return {
            url: `auth/forgot-password`,
            method: "POST",
            body: formData,
          };
        },

        transformResponse: transformResponseItem,
      }),

      resetPassword: build.mutation({
        query: (params) => {
          const formData = prepareDataToSend(params);

          return {
            url: `auth/reset-password`,
            method: "POST",
            body: formData,
          };
        },

        transformResponse: transformResponseItem,
      }),

      register: build.mutation({
        query: (params) => {
          const formData = prepareDataToSend(params);

          return {
            url: `auth/local/register`,
            method: `POST`,
            body: formData,
          };
        },

        transformResponse: transformResponseItem,
      }),

      updateMe: build.mutation({
        query: (params) => {
          const { id } = params; //?

          const formData = prepareDataToSend(params);

          return {
            url: `users/${id}`,
            method: `PUT`,
            body: formData,
          };
        },

        transformResponse: transformResponseItem,

        invalidatesTags: profileInvalidate,
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

        providesTags: profileInvalidate,
      }),

      generateOtpSecret: build.query({
        query: (params = {}) => {
          const { id } = params;

          return {
            url: `user/${id}/otp/generate`,
          };
        },

        transformResponse: transformResponseItem,
      }),

      setOtp: build.mutation({
        query: (params) => {
          const { id } = params; //?
          const formData = prepareDataToSend(params);

          return {
            url: `users/${id}/otp`,
            method: `POST`,
            body: formData,
          };
        },

        transformResponse: transformResponseItem,

        invalidatesTags: profileInvalidate,
      }),

      deleteOtp: build.mutation({
        query: (params) => {
          const { id, data, headers = {} } = params;

          return {
            url: `users/${id}/otp`,
            params: {
              ...data,
            },
            headers,
            method: `DELETE`,
          };
        },

        transformResponse: transformResponseItem,

        invalidatesTags: profileInvalidate,
      }),
    }),
  });

  const {
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
    useSetOtpMutation,
    useDeleteOtpMutation,
  } = profilesApi;

  return {
    profilesApi,
    hooks: {
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
      useSetOtpMutation,
      useDeleteOtpMutation,
    },
  };
}
