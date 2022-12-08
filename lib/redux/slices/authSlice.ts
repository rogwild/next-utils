import { createSlice } from "@reduxjs/toolkit";

export interface IProfileState {
  id: string | undefined;
  jwt: string | undefined;
  isAuthenticated: boolean;
  nextAuthFactor: "local" | "otp" | "email" | "phone";
  nextAuthFactorKey?: string;
  user?: any;
}

export const sliceCreator = (profilesApi) => {
  const initialState: IProfileState = {
    id: null,
    jwt:
      typeof window !== "undefined" ? localStorage.getItem("jwt") : undefined,
    isAuthenticated: false,
    nextAuthFactor: "local",
  };

  return createSlice({
    name: `auth`,
    initialState,
    reducers: {
      logout: (state) => {
        localStorage.removeItem(`jwt`);
        state.id = null;
        state.nextAuthFactor = "local";
        state.jwt = undefined;
        state.isAuthenticated = false;
        state.nextAuthFactorKey = "";

        return;
      },
    },
    extraReducers: (builder) => {
      builder
        .addMatcher(
          profilesApi.endpoints.loginWithEmailAndPassword.matchFulfilled,
          (state, action) => {
            setUser(state, action);
          }
        )
        .addMatcher(
          profilesApi.endpoints.register.matchFulfilled,
          (state, action) => {
            setUser(state, action);
          }
        )
        .addMatcher(
          profilesApi.endpoints.checkOtp.matchFulfilled,
          (state, action) => {
            setUser(state, action);
          }
        )
        .addMatcher(
          profilesApi.endpoints.checkOtp.matchFulfilled,
          (state, action) => {
            setUser(state, action);
          }
        )
        .addMatcher(
          profilesApi.endpoints.confirmEmail.matchFulfilled,
          (state, action) => {
            setUser(state, action);
          }
        )
        .addMatcher(
          profilesApi.endpoints.confirmPhone.matchFulfilled,
          (state, action) => {
            setUser(state, action);
          }
        )
        .addMatcher(
          profilesApi.endpoints.getMe.matchFulfilled,
          (state, action) => {
            state.id = action.payload.id;

            state.isAuthenticated = true;
          }
        );
    },
  });
};

export const selectors = {
  selectIsAuthenticated: (state: any) => state.auth.isAuthenticated,
  selectAccountId: (state: any) => state.auth.id,
  selectJwt: (state: any) => state.auth.jwt,
};

function setUser(state, action) {
  const { user, jwt, nextAuthFactor, nextAuthFactorKey } = action.payload;

  if (user) {
    state.user = user;
    state.id = user.id;
  }

  if (jwt) {
    state.isAuthenticated = true;
    state.jwt = jwt;
    state.nextAuthFactorKey = "";
    localStorage.setItem("jwt", jwt);
    return;
  }

  if (nextAuthFactor) {
    state.nextAuthFactorKey = nextAuthFactorKey;
    state.nextAuthFactor = nextAuthFactor;
  }
}
