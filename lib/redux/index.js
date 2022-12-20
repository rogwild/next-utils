import { createProfilesApi } from "./queries/profiles";
import * as authSlice from "./slices/auth";
import web3Slice from "./slices/web3";

const redux = {
  slices: {
    authSlice,
    web3Slice,
  },
  queries: {
    profiles: {
      createProfilesApi,
    },
  },
};

export default redux;
