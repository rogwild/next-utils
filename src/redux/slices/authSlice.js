import { createSlice } from "@reduxjs/toolkit";

export const sliceCreator = (profilesApi) => {
  const initialState = {
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
              state.id = user.id;
              state.isAuthenticated = true;
              localStorage.setItem("jwt", jwt);
              return;
            }

            state.user = user;
            state.currentAuthFactor = nextAuthFactor;
          }
        )
        .addMatcher(
          profilesApi.endpoints.confirmPhone.matchFulfilled,
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
          profilesApi.endpoints.checkOtp.matchFulfilled,
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
          profilesApi.endpoints.getMe.matchFulfilled,
          (state, action) => {
            state.jwt = localStorage.jwt;
            state.id = action.payload.id;
            state.user = action.payload;

            state.isAuthenticated = true;
          }
        );
    },
  });
};

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export const selectAccountId = (state) => state.auth.id;

export const selectJwt = (state) => state.auth.jwt;
