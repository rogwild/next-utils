import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
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
  devTools: process.env.NODE_ENV !== `production`,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
