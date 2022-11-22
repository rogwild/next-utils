import { createSlice } from "@reduxjs/toolkit";

export interface IProfileState {
  id: string | null;
  jwt: string | null;
  isAuthenticated: boolean;
  currentAuthFactor: "local" | "otp" | "email" | "phone";
  user?: any;
}

export const sliceCreator = (profilesApi) => {
  const initialState: IProfileState = {
    id: null,
    jwt: null,
    isAuthenticated: false,
    currentAuthFactor: "local",
  };

  return createSlice({
    name: `auth`,
    initialState,
    reducers: {
      logout: () => {
        localStorage.removeItem(`jwt`);
        return initialState;
      },
    },
    extraReducers: (builder) => {
      builder
        .addMatcher(
          profilesApi.endpoints.loginWithEmailAndPassword.matchFulfilled,
          (state, action) => {
            const { user, jwt, nextAuthFactor } = action.payload;

            if (jwt) {
              state.id = user?.id;
              state.isAuthenticated = true;
              localStorage.setItem("jwt", jwt);
              return;
            }

            state.user = user;
            state.currentAuthFactor = nextAuthFactor;
          }
        )
        .addMatcher(
          profilesApi.endpoints.register.matchFulfilled,
          (state, action) => {
            const { user, jwt } = action.payload;
            state.user = user;
            state.currentAuthFactor = "email";

            if (jwt) {
              state.id = user?.id;
              state.isAuthenticated = true;
              localStorage.setItem("jwt", jwt);
              return;
            }
          }
        )
        .addMatcher(
          profilesApi.endpoints.confirmEmail.matchFulfilled,
          (state, action) => {
            const { user, jwt, nextAuthFactor } = action.payload;

            if (jwt) {
              state.id = user?.id;
              state.isAuthenticated = true;
              localStorage.setItem("jwt", jwt);
              return;
            }

            state.currentAuthFactor = nextAuthFactor;
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
  selectUser: (state: any) => state.auth.user,
};
