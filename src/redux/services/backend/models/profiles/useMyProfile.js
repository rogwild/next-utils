import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectAccountId, selectJwt } from "~redux/authSlice";
import { useGetMeQuery, useGetProfileByIdQuery } from "./index";

const useMyProfile = () => {
  const { query } = useRouter();
  const accountId = useSelector(selectAccountId);
  const jwtToken = useSelector(selectJwt);

  const {
    data: myProfileByMe,
    error: meError,
    refetch: refetchMe,
    isUninitialized,
  } = useGetMeQuery(undefined, { skip: !jwtToken });

  const { data: filledProfile, refetch: refetchProfileById } =
    useGetProfileByIdQuery(accountId, {
      skip: !jwtToken || !accountId,
      pollingInterval: 60000,
    });

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

  useEffect(() => {
    if (query.payment === `success`) {
      refetchMe();
    }
  }, [query.payment]);

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
