import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import qs from "qs";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  paramsSerializer: (object) => {
    return qs.stringify(object, {
      encodeValuesOnly: true,
    });
  },
  prepareHeaders: (headers) => {
    const token = localStorage.jwt;

    if (token) {
      headers.set(
        `Authorization`,
        token.startsWith(`Bearer `) ? token : `Bearer ${token}`
      );
    }

    headers.set(`Prefer`, `dynamic=true`);

    return headers;
  },
});

const tagTypes = [`Products`];

export const backendServiceApi = createApi({
  baseQuery,
  tagTypes,
  reducerPath: `backend`,
  endpoints: () => ({}),
});
