/// <reference types="react" />
import * as apiUtils from "./api";
import * as formatters from "./formatters";
import * as vanilla from "./vanilla";
declare const _default: {
    api: typeof apiUtils;
    formatters: typeof formatters;
    vanilla: typeof vanilla;
    hooks: {
        useSendEmailConfirmation: ({ profilesApi, inputsConfig, inputPropsType, }: {
            profilesApi: any;
            inputsConfig?: {
                label: string;
                field: string;
                checkerFuncs: string[];
                type: string;
                id: string;
                placeholder: string;
            }[];
            inputPropsType?: string;
        }) => {
            inputs: {};
            inputsErrors: {};
            inputsSetErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
            error: any;
            inputsValues: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            isLoading: any;
            isSuccess: any;
            data: any;
        };
        useForgotPassword: ({ profilesApi, createNotification, useRouter, }: {
            profilesApi: any;
            createNotification?: () => {};
            useRouter?: () => {};
        }) => {
            inputs: {
                name: string;
                variant: string;
                placeholder: string;
                label: string;
            }[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            forgotPasswordResult: any;
        };
        useLogin: ({ profilesApi, useRouter, createNotification, }: {
            profilesApi: any;
            useRouter?: () => {};
            createNotification?: () => {};
        }) => {
            inputs: ({
                variant: string;
                name: string;
                label: string;
                placeholder: string;
                type?: undefined;
            } | {
                variant: string;
                type: string;
                name: string;
                label: string;
                placeholder: string;
            })[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            loginWithEmailAndPasswordResult: any;
        };
        useRegistration: ({ profilesApi, useRouter, createNotification, }: {
            profilesApi: any;
            useRouter?: () => {};
            createNotification?: () => {};
        }) => {
            inputs: ({
                variant: string;
                name: string;
                label: string;
                placeholder: string;
                type?: undefined;
            } | {
                label: string;
                name: string;
                type: string;
                placeholder: string;
                variant?: undefined;
            } | {
                variant: string;
                type: string;
                label: string;
                name: string;
                placeholder: string;
            } | {
                label: string;
                name: string;
                variant: string;
                placeholder?: undefined;
                type?: undefined;
            })[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            registrationResult: any;
        };
        useResetPassword: ({ profilesApi, authSlice, useDispatch, useRouter, createNotification, }: {
            profilesApi: any;
            authSlice: any;
            useDispatch: any;
            useRouter?: () => {};
            createNotification?: () => {};
        }) => {
            inputs: ({
                label: string;
                name: string;
                variant: string;
                type: string;
                placeholder: string;
                className?: undefined;
            } | {
                name: string;
                variant: string;
                className: string;
                label?: undefined;
                type?: undefined;
                placeholder?: undefined;
            })[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            resetPasswordResult: any;
        };
        useSendPhoneConfirmation: ({ profilesApi, inputsConfig, inputPropsType, }: {
            profilesApi: any;
            inputsConfig?: {
                label: string;
                field: string;
                checkerFuncs: string[];
                type: string;
                id: string;
                placeholder: string;
            }[];
            inputPropsType?: string;
        }) => {
            inputs: {};
            inputsErrors: {};
            inputsSetErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
            error: any;
            inputsValues: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            isLoading: any;
            isSuccess: any;
            data: any;
        };
        useConfirmEmail: ({ profilesApi, ping, initialPing, resendOnMount, useSelector, useRouter, createNotification, }: {
            profilesApi: any;
            ping?: number;
            initialPing?: number;
            resendOnMount?: boolean;
            useSelector: any;
            useRouter?: () => {};
            createNotification?: () => {};
        }) => {
            counter: number;
            resend: () => void;
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
        useConfirmPhone: ({ profilesApi, ping, initialPing, resendOnMount, useSelector, useRouter, createNotification, }: {
            profilesApi: any;
            ping?: number;
            initialPing?: number;
            resendOnMount?: boolean;
            useSelector: any;
            useRouter?: () => {};
            createNotification?: () => {};
        }) => {
            counter: number;
            resend: () => void;
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
        useUpdateMe: ({ profilesApi, useSelector, createNotification, }: {
            profilesApi: any;
            useSelector: any;
            createNotification?: () => {};
        }) => {
            inputs: {
                variant: string;
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
        useSetOtp: ({ profilesApi, useSelector, createNotification, }: {
            profilesApi: any;
            useSelector: any;
            createNotification?: () => {};
        }) => {
            inputs: ({
                variant: string;
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
                variant: string;
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
        useDeleteOtp: ({ profilesApi, createNotification, useSelector, }: {
            profilesApi: any;
            createNotification?: () => {};
            useSelector: any;
        }) => {
            inputs: {
                variant: string;
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
        useCheckOtp: ({ profilesApi, useSelector, useRouter, createNotification, }: {
            profilesApi: any;
            useSelector: any;
            useRouter?: () => {};
            createNotification?: () => {};
        }) => {
            inputs: {
                name: string;
                variant: string;
                label: string;
                placeholder: string;
            }[];
            methods: import("react-hook-form").UseFormReturn<import("react-hook-form").FieldValues, any>;
            submitFunction: (e?: import("react").BaseSyntheticEvent<object, any, any>) => Promise<void>;
            checkOtpResult: any;
        };
        useChangePassword: ({ profilesApi, createNotification, }: {
            profilesApi: any;
            createNotification?: () => {};
        }) => {
            inputs: {
                variant: string;
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
        useDetectMouseover: (el: any, initialState: any) => any[];
        useDetectOutsideClick: (trigger: any, initialState: any) => any[];
        useLookupTable: ({ columns, data: passedData, memoUpdateFunc, getRowId, config, initialFiltersState, }: array<import("./hooks/use-lookup-table").ColumnItemObject>) => import("./hooks/use-lookup-table").ReturnObject;
        useBreakpoint: (breakpoint: any) => boolean;
        useSetParentsInput: ({ passedState, passedFiles, parentKey, setParentInputs, setParentFiles, setParentErrors, }: {
            passedState: any;
            passedFiles: any;
            parentKey: any;
            setParentInputs: any;
            setParentFiles: any;
            setParentErrors: any;
        }) => {
            localState: any;
            localFiles: any;
            changeFiles: (updatedFiles: any) => void;
            changeInputs: (updatedInputs: any, index: any) => void;
            handleAddItem: () => void;
            handleDeleteItem: (index: any) => void;
        };
        useStyleRewriter: (baseClassName: any, className: any, cleared?: boolean) => string;
        useForm: ({ inputsConfig, submitFunc, inputPropsType, }: {
            inputsConfig: any;
            submitFunc?: () => boolean;
            inputPropsType?: string;
        }) => {
            inputs: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            inputsValues: {};
            setInputsValues: import("react").Dispatch<import("react").SetStateAction<{}>>;
            errors: {};
            files: {};
            setErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
            changeBlockedInputs: (inputs: any) => void;
            clearInputs: () => void;
            setInitialErrors: () => void;
        };
        useChildForm: typeof import("./hooks/use-form/use-child-form").default;
        useDomMeasure: (ref: any, triggers?: any[]) => number[];
        useDebounce: (value: string | number, delay: number) => string | number;
    };
    components: {
        SmartButton: ({ disabled, className, disabledClassName, children, tooltipPosition, href, dropdownItems: DropdownItems, dropdownContainerClassName, dropdownClassName, dropdownProps, tooltipItems: TooltipItems, tooltipContainerClasses, onClick: onClickCb, linkProps, Link, }: {
            disabled: any;
            className: any;
            disabledClassName: any;
            children: any;
            tooltipPosition: any;
            href?: string;
            dropdownItems: any;
            dropdownContainerClassName?: string;
            dropdownClassName?: string;
            dropdownProps: any;
            tooltipItems: any;
            tooltipContainerClasses?: string;
            onClick: any;
            linkProps?: any[];
            Link?: () => any;
        }) => JSX.Element;
        Modal: ({ children, showEffect, ...props }: {
            [x: string]: any;
            children: any;
            showEffect?: () => void;
        }) => JSX.Element;
        ModalArray: ({ showEffect, ArrayItem, array, getRenderCardProps, ...props }: {
            [x: string]: any;
            showEffect?: () => void;
            ArrayItem: any;
            array: any;
            getRenderCardProps: any;
        }) => JSX.Element;
        Input: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
        CheckboxInput: (props: any) => JSX.Element;
        DropdownInput: (props: any) => JSX.Element;
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
        MediaGallery: ({ media, containerClassName, galleryContainerClassName, mediaItemClassName, imageItemClassName, videoItemClassName, PreviousNavItemComponent, mediaContainerClassName, NextNavItemComponent, galleryClassName, MediaItemComponent, }: {
            media: any;
            containerClassName?: string;
            galleryContainerClassName?: string;
            mediaItemClassName: any;
            imageItemClassName: any;
            videoItemClassName: any;
            PreviousNavItemComponent: any;
            mediaContainerClassName: any;
            NextNavItemComponent: any;
            galleryClassName: any;
            MediaItemComponent: any;
        }) => JSX.Element;
        CopyButton: (props: any) => JSX.Element;
        AuthWrapper: ({ isAuth, children, isPublic, useRouter, useMyProfile, redirectTo, Loader, }: {
            isAuth?: boolean;
            children: import("react").ReactNode;
            isPublic?: boolean;
            useRouter?: any;
            useMyProfile: any;
            user?: any;
            redirectTo?: string;
            Loader?: any;
        }) => JSX.Element;
        Pagination: import("react").FC<import("./components/pagination").TPaginationProps>;
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
