import { ReactNode } from "react";
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
declare const AuthWrapper: ({ isAuth, children, isPublic, useRouter, usePathname, useMyProfile, redirectTo, Loader, }: TAuthWrapperProps) => JSX.Element;
export default AuthWrapper;
