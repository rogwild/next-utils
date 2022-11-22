import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import qs from "qs";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:1337",
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

    return headers;
  },
});

const tagTypes = [`Profiles`];

export const backendServiceApi = createApi({
  baseQuery,
  tagTypes,
  reducerPath: "backend",
  endpoints: () => ({}),
});
