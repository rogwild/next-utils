import React, { useEffect, useState, FC, ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";

type TAuthWrapperProps = {
  isAuthRoute?: boolean;
  children: ReactNode;
  isPublic?: boolean;
  Loader?: FC;
  useRouter: any;
  useMyProfile: any;
};

const AuthWrapper = ({
  isAuthRoute,
  children,
  isPublic = false,
  useRouter,
  Loader = () => <></>,
  useMyProfile,
}: TAuthWrapperProps) => {
  const router = useRouter();
  const {
    query: { initPath },
  } = router;
  const { me: user } = useMyProfile();

  console.log(`🚀 ~ AuthWrapper ~ user`, user);

  const [passed, setPassed] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [closeLoader, setCloseLoader] = useState(false);

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
    if (user.id) {
      setPassed(true);

      if (router.pathname == `/auth/login`) {
        router.push(typeof initPath === `string` ? initPath : `/dashboard`);
      }

      return;
    } else if (!isAuthRoute) {
      if (isPublic) {
        setPassed(true);

        return;
      }

      const pathQuery = !initPath ? `?initPath=${router.asPath}` : ``;

      router.push(`/auth/login${pathQuery}`);
    } else if (isAuthRoute) {
      setPassed(true);
    }
  }, [user, router]);

  return (
    <>
      <animated.div
        className={`fixed bg-black-primary inset-0 h-screen w-screen overflow-hidden ${
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
