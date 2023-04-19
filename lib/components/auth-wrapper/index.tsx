"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";

type TAuthWrapperProps = {
  isAuth?: boolean;
  children: ReactNode;
  isPublic?: boolean;
  useRouter?: any;
  usePathname?: any;
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
  usePathname,
  // user,
  useMyProfile,
  redirectTo = "",
  Loader = DefaultLoader,
}: TAuthWrapperProps) => {
  const { me: user } = useMyProfile();
  const router = useRouter();
  const pathname = usePathname();

  const [cachedPathname, setCachedPathname] = useState(redirectTo);

  useEffect(() => {
    setCachedPathname((prev) => {
      if (pathname && !pathname.includes("/auth")) {
        return pathname;
      }

      return prev;
    });
  }, [pathname]);

  const [passed, setPassed] = useState(false);
  const [hideLoader, setHideLoader] = useState(true);
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

      if (pathname?.includes("/auth")) {
        router.push(cachedPathname);
      }

      return;
    } else if (!isAuth) {
      if (isPublic) {
        setPassed(true);

        return;
      }

      const pathQuery = !pathname?.includes("/auth")
        ? `?initPath=${pathname}`
        : ``;

      router.push(`/auth/login${pathQuery}`);
    } else if (isAuth) {
      setPassed(true);
    }
  }, [user, router, pathname]);

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
