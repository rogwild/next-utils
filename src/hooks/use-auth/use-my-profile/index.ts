import { useEffect, useMemo } from "react";
import { selectors } from "../../../redux/slices/authSlice";

export interface IUseMyProfile {
  profilesApi: any;
  populate?: any;
  authSlice: any;
  useSelector: any;
}

const useMyProfile = ({
  profilesApi,
  populate,
  useSelector,
}: IUseMyProfile) => {
  const accountId = useSelector(selectors.selectAccountId);
  const jwtToken = useSelector(selectors.selectJwt);

  const {
    data: myProfileByMe,
    error: meError,
    refetch: refetchMe,
    isUninitialized,
  } = profilesApi.useGetMeQuery(undefined, { skip: !jwtToken });

  const { data: filledProfile, refetch: refetchProfileById } =
    profilesApi.useGetProfileByIdQuery(
      { id: accountId, populate },
      {
        skip: !jwtToken || !accountId,
        pollingInterval: 60000,
      }
    );

  // console.log(`🚀 ~ useMyProfile ~ accountId`, accountId, filledProfile);

  useEffect(() => {
    if (
      meError &&
      (meError?.status !== 403 || meError?.status !== 401) &&
      !isUninitialized
    ) {
      setTimeout(() => {
        refetchMe();
      }, 2000);
      return;
    }
  }, [meError]);

  const profile = useMemo(() => {
    const me = accountId
      ? { ...(myProfileByMe || {}), ...(filledProfile || {}) }
      : {};

    const refetch = () => {
      refetchMe();
      refetchProfileById();
    };

    return { me, refetch };
  }, [myProfileByMe, filledProfile, accountId, jwtToken]);

  return profile;
};

export default useMyProfile;
