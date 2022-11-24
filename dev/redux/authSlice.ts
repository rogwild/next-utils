import { sliceCreator, selectors } from "../../src/redux/slices/authSlice";
import { profilesApi } from "./services/backend/profiles/index";

export const authSlice = sliceCreator(profilesApi);
