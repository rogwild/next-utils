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
  Loader?: any;
};

const DefaultLoader = () => {
  return <></>;
};

const AuthWrapper = ({
  isAuth,
  children,
  isPublic = false,
  useRouter,
  // user,
  useMyProfile,
  redirectTo = "",
  Loader = DefaultLoader,
}: TAuthWrapperProps) => {
  const { me: user } = useMyProfile();
  const router = useRouter();
  const {
    query: { initPath },
  } = router;

  const [cachedInitPath, setCachedInitPath] = useState(redirectTo);

  useEffect(() => {
    setCachedInitPath((prev) => {
      if (initPath) {
        return initPath;
      }

      return prev;
    });
  }, [initPath]);

  const [passed, setPassed] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [closeLoader, setCloseLoader] = useState(false);

  const fromLoaderStyles = {
    opacity: 1,
  };

  const toLoaderStyles = {
    opacity: 0,
  };

  const loaderStyles = useSpring({
    from: fromLoaderStyles,
    to: closeLoader ? toLoaderStyles : fromLoaderStyles,
    delay: 2000,
    config: {
      duration: 500,
    },
  });

  useEffect(() => {
    let loaderTm: undefined | ReturnType<typeof setTimeout>;
    let hideLoaderTm: undefined | ReturnType<typeof setTimeout>;

    if (passed) {
      setCloseLoader(true);

      hideLoaderTm = setTimeout(() => {
        setHideLoader(true);
      }, 3000);
    }

    return () => {
      clearTimeout(loaderTm);
      clearTimeout(hideLoaderTm);
    };
  }, [passed]);

  useEffect(() => {
    if (user.id) {
      setPassed(true);

      if (router.asPath?.includes("/auth")) {
        router.push(cachedInitPath);
      }

      return;
    } else if (!isAuth) {
      if (isPublic) {
        setPassed(true);

        return;
      }

      const pathQuery =
        !initPath && !router.asPath.includes("/auth")
          ? `?initPath=${router.asPath}`
          : ``;

      router.push(`/auth/login${pathQuery}`);
    } else if (isAuth) {
      setPassed(true);
    }
  }, [user, router]);

  return (
    <>
      <animated.div
        className={`fixed flex inset-0 h-screen w-screen overflow-hidden ${
          hideLoader ? `-z-1 hidden` : `z-[200] flex-center`
        }`}
        style={loaderStyles}
      >
        <Loader />
      </animated.div>
      {passed ? children : null}
    </>
  );
};

export default AuthWrapper;
