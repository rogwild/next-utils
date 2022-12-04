export interface IUseMyProfile {
    profilesApi: any;
    useSelector: any;
    populate?: any;
}
declare const useMyProfileCreator: ({ profilesApi, populate, useSelector, }: IUseMyProfile) => {
    me: any;
    refetch: () => void;
};
export default useMyProfileCreator;
