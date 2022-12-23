import { useEffect, useMemo } from "react";
import { selectors } from "../../../redux/slices/auth";

export interface IUseMyProfile {
  profilesApi: any;
  useSelector: any;
  populate?: any;
}

const useMyProfileCreator = ({
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

  useEffect(() => {
    // console.log(`🚀 ~ meError`, meError);

    if (
      !isUninitialized &&
      meError &&
      (meError?.status !== 403 || meError?.status !== 401)
    ) {
      // const refetchTm = setTimeout(() => {
      //   refetchMe();
      //   clearTimeout(refetchTm);
      // }, 2000);
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
  }, [myProfileByMe, filledProfile]);

  return profile;
};

export default useMyProfileCreator;
