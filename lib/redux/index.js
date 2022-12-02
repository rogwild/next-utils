import { createProfilesApi } from "./queries/profiles";
import * as authSlice from "./slices/authSlice";

const redux = {
  slices: {
    authSlice,
  },
  queries: {
    profiles: {
      createProfilesApi,
    },
  },
};

export default redux;
