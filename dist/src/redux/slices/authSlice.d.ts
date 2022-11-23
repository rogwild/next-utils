export interface IProfileState {
    id: string | null;
    jwt: string | null;
    isAuthenticated: boolean;
    currentAuthFactor: "local" | "otp" | "email" | "phone";
    user?: any;
}
export declare const sliceCreator: (profilesApi: any) => import("@reduxjs/toolkit").Slice<IProfileState, {
    logout: () => IProfileState;
}, "auth">;
export declare const selectors: {
    selectIsAuthenticated: (state: any) => any;
    selectAccountId: (state: any) => any;
    selectJwt: (state: any) => any;
    selectUser: (state: any) => any;
};
