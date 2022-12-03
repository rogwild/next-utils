import useMyProfile from "~backend/models/profiles/useMyProfile";
import { useRouter } from "next/router";
import utils from "~next-utils";
const { AuthWrapper } = utils.components;

const LocalAuthWrapper = ({ children, isAuth, isPublic }) => {
  return (
    <AuthWrapper
      isAuth={isAuth}
      isPublic={isPublic}
      useRouter={useRouter}
      useMyProfile={useMyProfile}
      redirectTo="/profile"
    >
      {children}
    </AuthWrapper>
  );
};

export default LocalAuthWrapper;
