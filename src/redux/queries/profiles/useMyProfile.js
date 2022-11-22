import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAccountId } from "~redux/authSlice";
import {
  useGetMeQuery,
  useGetProfileByIdQuery,
} from "./index.js/index.js.js.js";

const useMyProfile = () => {
  const accountId = useSelector(selectAccountId);

  // console.log(`🚀 ~ useMyProfile ~ accountId`, accountId);

  // const { query } = useRouter();

  const jwtToken = typeof window === `undefined` ? null : localStorage.jwt;

  const {
    data: myProfileByMe,
    error: meError,
    refetch: refetchMe,
  } = useGetMeQuery(undefined, { skip: !jwtToken || accountId });

  const { data: filledProfile, refetch: refetchProfileById } =
    useGetProfileByIdQuery(accountId, {
      skip: !accountId,
      pollingInterval: 60000,
    });

  useEffect(() => {
    if (!meError) return;

    if (meError.status !== 403 && meError.status !== 401) {
      setTimeout(() => {
        refetchMe();
      }, 2000);
      return;
    }

    localStorage.removeItem(`jwt`);
  }, [meError]);

  // useEffect(() => {
  //   if (query.payment === `success`) {
  //     refetchMe();
  //   }
  // }, [query.payment]);

  return useMemo(() => {
    const me = accountId ? { ...(filledProfile || myProfileByMe) } : {};

    const refetch = () => {
      refetchMe();
      refetchProfileById();
    };

    return { me, refetch };
  }, [myProfileByMe, filledProfile, accountId]);
};

export default useMyProfile;
