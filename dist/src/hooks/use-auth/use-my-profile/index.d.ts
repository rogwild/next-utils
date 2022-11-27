export interface IUseMyProfile {
    profilesApi: any;
    populate?: any;
    authSlice: any;
}
declare const useMyProfile: ({ profilesApi, populate }: IUseMyProfile) => {
    me: any;
    refetch: () => void;
};
export default useMyProfile;
