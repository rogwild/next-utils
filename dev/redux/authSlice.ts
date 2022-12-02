import utils from "../../lib";
const {
  authSlice: { sliceCreator },
} = utils.redux.slices;
import { profilesApi } from "./services/backend/profiles/index";

export const authSlice = sliceCreator(profilesApi);
