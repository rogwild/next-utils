import { ReactNode } from "react";
type TAuthWrapperProps = {
    isAuthRoute?: boolean;
    children: ReactNode;
    isPublic?: boolean;
    useRouter?: any;
    useMyProfile: any;
    user?: any;
    redirectTo?: string;
};
declare const AuthWrapper: ({ isAuthRoute, children, isPublic, useRouter, user, useMyProfile, redirectTo, }: TAuthWrapperProps) => JSX.Element;
export default AuthWrapper;
