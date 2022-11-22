import { sliceCreator, selectors } from "../../src/redux/slices/authSlice";
import { profilesApi } from "./services/backend/profiles/index";

const slice = sliceCreator(profilesApi);

export const { logout } = slice.actions;

export default slice.reducer;

export const selectIsAuthenticated = selectors.selectIsAuthenticated;
export const selectAccountId = selectors.selectAccountId;
export const selectJwt = selectors.selectJwt;
