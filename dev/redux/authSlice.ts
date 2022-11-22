import { RootState } from ".";
import { sliceCreator } from "../../src/redux/slices/authSlice";
import { profilesApi } from "./services/backend/profiles/index";

const slice = sliceCreator(profilesApi);

export const { logout } = slice.actions;

export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectAccountId = (state: RootState) => state.auth.id;

export const selectJwt = (state: RootState) => state.auth.jwt;
