import utils from "../../src";
const {
  authSlice: { sliceCreator },
} = utils.redux.slices;
import { profilesApi } from "./services/backend/profiles/index";

export const authSlice = sliceCreator(profilesApi);
