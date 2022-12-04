export interface IProfileState {
    id: string | undefined;
    jwt: string | undefined;
    isAuthenticated: boolean;
    currentAuthFactor: "local" | "otp" | "email" | "phone";
    user?: any;
}
export declare const sliceCreator: (profilesApi: any) => import("@reduxjs/toolkit").Slice<import("immer/dist/internal").WritableDraft<IProfileState>, {
    logout: (state: import("immer/dist/internal").WritableDraft<IProfileState>) => void;
}, "auth">;
export declare const selectors: {
    selectIsAuthenticated: (state: any) => any;
    selectAccountId: (state: any) => any;
    selectJwt: (state: any) => any;
};