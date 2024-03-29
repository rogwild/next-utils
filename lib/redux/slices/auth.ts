import { createSlice } from "@reduxjs/toolkit";

export interface IProfileState {
  id: string | null | undefined;
  jwt: string | null | undefined;
  isAuthenticated: boolean;
  nextAuthFactor?:
    | "auth.callback"
    | "auth.checkEmail"
    | "auth.checkPhone"
    | "user.checkOtp";
  nextAuthFactorKey?: string;
  user?: any;
}

export const sliceCreator = (profilesApi) => {
  const initialState: IProfileState = {
    id: null,
    jwt:
      typeof window !== "undefined" ? localStorage.getItem("jwt") : undefined,
    isAuthenticated: false,
  };

  return createSlice({
    name: `auth`,
    initialState,
    reducers: {
      logout: (state) => {
        localStorage.removeItem(`jwt`);
        state.id = null;
        state.nextAuthFactor = "auth.callback";
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
          profilesApi.endpoints.registration.matchFulfilled,
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
          profilesApi.endpoints.checkFactors.matchFulfilled,
          (state, action) => {
            setUser(state, action);
          }
        )
        .addMatcher(
          profilesApi.endpoints.getMe.matchFulfilled,
          (state, action) => {
            state.id = action.payload.id;
            state.isAuthenticated = true;
            state.user = action.payload;
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
