import { FC, ReactNode } from "react";
type TAuthWrapperProps = {
    isAuthRoute?: boolean;
    children: ReactNode;
    isPublic?: boolean;
    Loader?: FC;
    useRouter: any;
    useMyProfile: any;
};
declare const AuthWrapper: ({ isAuthRoute, children, isPublic, useRouter, Loader, useMyProfile, }: TAuthWrapperProps) => JSX.Element;
export default AuthWrapper;
