import { ReactNode } from "react";
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
declare const AuthWrapper: ({ isAuth, children, isPublic, useRouter, useMyProfile, redirectTo, Loader, }: TAuthWrapperProps) => JSX.Element;
export default AuthWrapper;
