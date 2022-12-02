import { useEffect, useState, FC, ReactNode } from "react";
import { useRouter } from "next/router";
import useMyProfile from "~backend/models/profiles/useMyProfile";

type TAuthWrapperProps = {
  isAuthRoute?: boolean;
  children: ReactNode;
  isPublic?: boolean;
};

const AuthWrapper = ({
  isAuthRoute,
  children,
  isPublic = false,
}: TAuthWrapperProps) => {
  // const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [passed, setPassed] = useState(false);

  const { me: user } = useMyProfile();

  const router = useRouter();

  const {
    query: { initPath },
  } = router;

  useEffect(() => {
    if (user.id) {
      setPassed(true);

      if (router.pathname == `/auth/login`) {
        router.push(initPath !== undefined ? String(initPath) : `/projects`);
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
  }, [user, router.asPath]);

  return (
    <div className="relative max-w-screen">{passed ? children : null}</div>
  );
};

export default AuthWrapper;
