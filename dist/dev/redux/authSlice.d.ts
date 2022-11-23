export declare const logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/logout">;
declare const _default: import("redux").Reducer<import("../../src/redux/slices/authSlice").IProfileState, import("redux").AnyAction>;
export default _default;
export declare const selectIsAuthenticated: (state: any) => any;
export declare const selectAccountId: (state: any) => any;
export declare const selectJwt: (state: any) => any;
