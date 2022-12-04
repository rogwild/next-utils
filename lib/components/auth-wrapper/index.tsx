import React, { useEffect, useState, FC, ReactNode, useMemo } from "react";
import { useSpring, animated } from "@react-spring/web";

type TAuthWrapperProps = {
  isAuth?: boolean;
  children: ReactNode;
  isPublic?: boolean;
  useRouter?: any;
  useMyProfile: any;
  user?: any;
  redirectTo?: string;
};

const AuthWrapper = ({
  isAuth,
  children,
  isPublic = false,
  useRouter,
  // user,
  useMyProfile,
  redirectTo,
}: TAuthWrapperProps) => {
  const { me: user } = useMyProfile();
  const router = useRouter();
  const {
    query: { initPath },
  } = router;

  const [cachedInitPath, setCachedInitPath] = useState(initPath || "");

  // useEffect(() => {
  //   setCachedInitPath((prev) => {
  //     if (initPath !== "" && prev === "") {
  //       return initPath;
  //     }

  //     return prev;
  //   });
  // }, [initPath]);

  // useEffect(() => {
  //   console.log(`🚀 ~ useEffect ~ cachedInitPath`, cachedInitPath);
  // }, [cachedInitPath]);

  const [passed, setPassed] = useState(false);

  useEffect(() => {
    console.log(`🚀 ~ useEffect ~ user`, user);

    if (user.id) {
      setPassed(true);

      if (router.pathname?.includes("/auth")) {
        router.push(redirectTo);
      }

      return;
    } else if (!isAuth) {
      if (isPublic) {
        setPassed(true);

        return;
      }

      const pathQuery = !initPath ? `?initPath=${router.asPath}` : ``;

      // console.log(`🚀 ~ useEffect ~ pathQuery`, pathQuery);

      router.push(`/auth/login${pathQuery}`);
    } else if (isAuth) {
      setPassed(true);
    }
  }, [user, router]);

  return (
    <>
      {/* <animated.div
        className={`fixed bg-black-primary inset-0 h-screen w-screen overflow-hidden ${
          hideLoader ? `-z-1 hidden` : `z-[200] flex-center`
        }`}
        style={loaderStyles}
      >
        <Loader />
      </animated.div> */}
      {passed ? children : null}
    </>
  );
};

export default AuthWrapper;
