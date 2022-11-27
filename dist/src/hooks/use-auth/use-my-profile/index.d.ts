export interface IUseMyProfile {
    profilesApi: any;
    populate?: any;
    authSlice: any;
    useSelector: any;
}
declare const useMyProfile: ({ profilesApi, populate, useSelector, }: IUseMyProfile) => {
    me: any;
    refetch: () => void;
};
export default useMyProfile;
