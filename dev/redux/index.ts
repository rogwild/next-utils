import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./authSlice";
import { backendServiceApi } from "./services/backend/index";

const middlewares = [backendServiceApi.middleware];

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    [backendServiceApi.reducerPath]: backendServiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;