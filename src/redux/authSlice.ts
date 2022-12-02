import utils from "~next-utils";
import { profilesApi } from "./services/backend/models/profiles";

const { sliceCreator } = utils.redux.slices.authSlice;

const slice = sliceCreator(profilesApi);

export const { logout } = slice.actions;

export const selectIsAuthenticated = (state: any) => state.auth.isAuthenticated;

export const selectAccountId = (state: any) => state.auth.id;

export const selectJwt = (state: any) => state.auth.jwt;

export default slice.reducer;
