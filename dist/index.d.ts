/// <reference types="react" />
import * as apiUtils from "./api";
import * as formatters from "./formatters";
import * as vanilla from "./vanilla";
declare const _default: {
    api: typeof apiUtils;
    formatters: typeof formatters;
    vanilla: typeof vanilla;
    hooks: {
        useSendEmailConfirmation: ({ profilesApi, ping, initialPing, useSelector, email, createNotification, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            ping?: number;
            initialPing?: number;
            useSelector: any;
            email: any;
            createNotification?: () => {};
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            counter: number;
            submitFunction: () => Promise<void>;
            result: any;
        };
        useForgotPassword: ({ profilesApi, createNotification, useRouter, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            createNotification?: () => {};
            useRouter?: () => {};
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            inputs: {
                name: string;
                component: string;
                placeholder: string;
                label: string;
            }[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            forgotPasswordResult: any;
        };
        useLogin: ({ profilesApi, useRouter, createNotification, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            useRouter?: () => {};
            createNotification?: () => {};
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            inputs: ({
                component: string;
                name: string;
                label: string;
                placeholder: string;
                type?: undefined;
            } | {
                component: string;
                type: string;
                name: string;
                label: string;
                placeholder: string;
            })[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            loginWithEmailAndPasswordResult: any;
        };
        useRegistration: ({ profilesApi, useRouter, createNotification, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            useRouter?: () => {};
            createNotification?: () => {};
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            inputs: ({
                component: string;
                name: string;
                label: string;
                placeholder: string;
                type?: undefined;
            } | {
                label: string;
                name: string;
                type: string;
                placeholder: string;
                component?: undefined;
            } | {
                component: string;
                type: string;
                label: string;
                name: string;
                placeholder: string;
            } | {
                label: string;
                name: string;
                component: string;
                placeholder?: undefined;
                type?: undefined;
            })[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            registrationResult: any;
        };
        useResetPassword: ({ profilesApi, authSlice, useDispatch, useRouter, createNotification, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            authSlice: any;
            useDispatch: any;
            useRouter?: () => {};
            createNotification?: () => {};
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            inputs: ({
                label: string;
                name: string;
                component: string;
                type: string;
                placeholder: string;
                className?: undefined;
            } | {
                name: string;
                component: string;
                className: string;
                label?: undefined;
                type?: undefined;
                placeholder?: undefined;
            })[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            resetPasswordResult: any;
        };
        useSendPhoneConfirmation: ({ profilesApi, ping, initialPing, useSelector, phone, createNotification, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            ping?: number;
            initialPing?: number;
            useSelector: any;
            phone: any;
            createNotification?: () => {};
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            counter: number;
            submitFunction: () => Promise<void>;
            result: any;
        };
        useConfirmEmail: ({ profilesApi, ping, initialPing, resendOnMount, useSelector, useRouter, createNotification, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            ping?: number;
            initialPing?: number;
            resendOnMount?: boolean;
            useSelector: any;
            useRouter?: () => {};
            createNotification?: () => {};
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            counter: number;
            resend: () => Promise<void>;
            resendResult: any;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            confirmEmailResult: any;
            inputs: ({
                type: string;
                name: string;
                label: string;
                placeholder: string;
                className?: undefined;
            } | {
                type: string;
                name: string;
                className: string;
                label?: undefined;
                placeholder?: undefined;
            })[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
        };
        useConfirmPhone: ({ profilesApi, ping, initialPing, resendOnMount, useSelector, useRouter, createNotification, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            ping?: number;
            initialPing?: number;
            resendOnMount?: boolean;
            useSelector: any;
            useRouter?: () => {};
            createNotification?: () => {};
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            counter: number;
            resend: () => Promise<void>;
            resendResult: any;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            confirmPhoneResult: any;
            inputs: ({
                type: string;
                name: string;
                label: string;
                placeholder: string;
                className?: undefined;
            } | {
                type: string;
                name: string;
                className: string;
                label?: undefined;
                placeholder?: undefined;
            })[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
        };
        useUpdateMe: ({ profilesApi, useSelector, createNotification, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            useSelector: any;
            createNotification?: () => {};
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            inputs: {
                component: string;
                name: string;
                label: string;
                placeholder: string;
            }[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            updateMeResult: any;
        };
        useMyProfileCreator: ({ profilesApi, populate, useSelector, }: import("./hooks/use-auth/use-my-profile-creator").IUseMyProfile) => {
            me: any;
            refetch: () => void;
        };
        useSetOtp: ({ profilesApi, useSelector, createNotification, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            useSelector: any;
            createNotification?: () => {};
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            inputs: ({
                component: string;
                name: string;
                label: string;
                placeholder: string;
                rules: {
                    required: {
                        value: boolean;
                        message: string;
                    };
                };
                type?: undefined;
                className?: undefined;
            } | {
                component: string;
                type: string;
                name: string;
                className: string;
                rules: {
                    required: {
                        value: boolean;
                        message: string;
                    };
                };
                label?: undefined;
                placeholder?: undefined;
            })[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            setOtpResult: any;
            generateOtpSecretResult: any;
        };
        useDeleteOtp: ({ profilesApi, createNotification, useSelector, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            createNotification?: () => {};
            useSelector: any;
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            inputs: {
                component: string;
                name: string;
                label: string;
                placeholder: string;
                rules: {
                    required: {
                        value: boolean;
                        message: string;
                    };
                };
            }[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
        };
        useCheckOtp: ({ profilesApi, useSelector, useRouter, createNotification, translate, notificationDuration, AdditionalHeadersContext, }: {
            profilesApi: any;
            useSelector: any;
            useRouter?: () => {};
            createNotification?: () => {};
            translate?: (string: any) => any;
            notificationDuration?: number;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            inputs: {
                name: string;
                component: string;
                label: string;
                placeholder: string;
            }[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            checkOtpResult: any;
        };
        useChangePassword: ({ profilesApi, createNotification, notificationDuration, translate, AdditionalHeadersContext, }: {
            profilesApi: any;
            createNotification?: () => {};
            notificationDuration?: number;
            translate?: (string: any) => any;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            inputs: {
                component: string;
                type: string;
                name: string;
                label: string;
                placeholder: string;
                rules: {
                    required: {
                        value: boolean;
                        message: string;
                    };
                };
            }[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            changePasswordResult: any;
        };
        useCheckFactors: ({ profilesApi, ping, initialPing, resendOnMount, useSelector, useRouter, createNotification, notificationDuration, translate, AdditionalHeadersContext, }: {
            profilesApi: any;
            ping?: number;
            initialPing?: number;
            resendOnMount?: boolean;
            useSelector: any;
            useRouter?: () => {};
            createNotification?: () => {};
            notificationDuration?: number;
            translate?: (string: any) => any;
            AdditionalHeadersContext?: import("react").Context<any>;
        }) => {
            inputs: any[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            checkFactorsResult: any;
            emailCounter: number;
            resendEmail: () => Promise<void>;
            resendEmailConfirmationResult: any;
            phoneCounter: number;
            resendPhone: () => Promise<void>;
            resendPhoneConfirmationResult: any;
        };
        useBreakpoint: (breakpoint: any) => boolean;
    };
    components: {
        SpringNotification: {
            NotificationsWrapper: ({ children }: {
                children: any;
            }) => JSX.Element;
            useNotifications: () => {
                add: () => any;
            };
            notificationPortalId: string;
            createNotification: (message: any) => any;
        };
        AuthWrapper: ({ isAuth, children, isPublic, useRouter, usePathname, useMyProfile, redirectTo, Loader, }: {
            isAuth?: boolean;
            children: import("react").ReactNode;
            isPublic?: boolean;
            useRouter?: any;
            usePathname?: any;
            useMyProfile: any;
            user?: any;
            redirectTo?: string;
            Loader?: any;
        }) => JSX.Element;
    };
    redux: {
        slices: {
            authSlice: typeof import("./redux/slices/auth");
        };
        queries: {
            profiles: {
                createProfilesApi: typeof import("./redux/queries/profiles").createProfilesApi;
            };
        };
    };
};
export default _default;
