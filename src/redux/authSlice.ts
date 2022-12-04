import utils from "~next-utils";
const {
  authSlice: { sliceCreator },
} = utils.redux.slices;
import { profilesApi } from "~backend/models/profiles/index";

export const authSlice = sliceCreator(profilesApi);
