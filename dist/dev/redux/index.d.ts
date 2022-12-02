declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    auth: import("../../lib/redux/slices/authSlice").IProfileState;
    backend: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{}, string, "backend">;
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<{
    auth: import("../../lib/redux/slices/authSlice").IProfileState;
    backend: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{}, string, "backend">;
}, import("redux").AnyAction, undefined>, ...import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{}, string, "backend">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>[]]>>;
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
