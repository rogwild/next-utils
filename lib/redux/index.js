import { createProfilesApi } from "./queries/profiles";
import * as authSlice from "./slices/auth";

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
