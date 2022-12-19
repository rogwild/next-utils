import { ReactNode } from "react";
type TAuthWrapperProps = {
    isAuth?: boolean;
    children: ReactNode;
    isPublic?: boolean;
    useRouter?: any;
    useMyProfile: any;
    user?: any;
    redirectTo?: string;
};
declare const AuthWrapper: ({ isAuth, children, isPublic, useRouter, useMyProfile, redirectTo, }: TAuthWrapperProps) => JSX.Element;
export default AuthWrapper;
