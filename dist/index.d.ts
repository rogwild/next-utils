/// <reference types="react" />
import * as apiUtils from "./api";
import * as formatters from "./formatters";
import * as vanilla from "./vanilla";
declare const _default: {
    api: typeof apiUtils;
    formatters: typeof formatters;
    vanilla: typeof vanilla;
    hooks: {
        useSendEmailConfirmation: ({ profilesApi, inputsConfig, }: {
            profilesApi: any;
            inputsConfig?: {
                label: string;
                field: string;
                checkerFuncs: string[];
                type: string;
                id: string;
                placeholder: string;
            }[];
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
        usePhoneConfirmation: ({ profilesApi, inputsConfig, authSlice, }: {
            profilesApi: any;
            inputsConfig?: {
                label: string;
                field: string;
                type: string;
                checkerFuncs: string[];
                id: string;
            }[];
            authSlice: any;
        }) => {
            inputs: {};
            inputsValues: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            error: any;
            isSuccess: any;
            inputsErrors: {};
            inputsSetErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
        };
        useForgotPassword: ({ profilesApi, inputsConfig, authSlice, useDispatch, }: {
            profilesApi: any;
            inputsConfig?: {
                title: string;
                label: string;
                field: string;
                checkerFuncs: string[];
                type: string;
                placeholder: string;
            }[];
            authSlice: any;
            useDispatch: any;
        }) => {
            isLoading: any;
            data: any;
            isSuccess: any;
            inputsValues: {};
            setErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
            setInputsValues: import("react").Dispatch<import("react").SetStateAction<{}>>;
            inputs: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            setPassed: any;
        };
        useLogin: ({ profilesApi, inputsConfig }: {
            profilesApi: any;
            inputsConfig?: ({
                field: string;
                checkerFuncs: string[];
                type: string;
                placeholder: string;
                label: string;
                config?: undefined;
                defaultValue?: undefined;
                id?: undefined;
            } | {
                field: string;
                checkerFuncs: string[];
                config: {
                    enableTypeChanging: boolean;
                };
                label: string;
                type: string;
                placeholder: string;
                defaultValue?: undefined;
                id?: undefined;
            } | {
                field: string;
                checkerFuncs: any[];
                type: string;
                defaultValue: boolean;
                id: string;
                label: string;
                placeholder?: undefined;
                config?: undefined;
            })[];
        }) => {
            inputs: {};
            inputsValues: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            changeBlockedInputs: (inputs: any) => void;
            clearInputs: () => void;
            error: any;
            data: any;
            isSuccess: any;
            isLoading: any;
            isFetching: any;
        };
        useRegister: ({ profilesApi, inputsConfig }: {
            profilesApi: any;
            inputsConfig?: ({
                label: string;
                field: string;
                checkerFuncs: string[];
                type: string;
                placeholder: string;
                id?: undefined;
                config?: undefined;
                defaultValue?: undefined;
            } | {
                label: string;
                field: string;
                checkerFuncs: string[];
                type: string;
                id: string;
                placeholder: string;
                config?: undefined;
                defaultValue?: undefined;
            } | {
                label: string;
                field: string;
                checkerFuncs: string[];
                config: {
                    enableTypeChanging: boolean;
                    equalTo?: undefined;
                };
                type: string;
                placeholder: string;
                id?: undefined;
                defaultValue?: undefined;
            } | {
                label: string;
                field: string;
                checkerFuncs: string[];
                config: {
                    equalTo: string;
                    enableTypeChanging: boolean;
                };
                type: string;
                placeholder: string;
                id?: undefined;
                defaultValue?: undefined;
            } | {
                label: string;
                field: string;
                checkerFuncs: any[];
                type: string;
                defaultValue: boolean;
                placeholder?: undefined;
                id?: undefined;
                config?: undefined;
            })[];
        }) => {
            data: any;
            inputs: {};
            inputsValues: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            isSuccess: any;
            isLoading: any;
            error: any;
            setPassed: any;
            inputsErrors: {};
            inputsSetErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
        };
        useResetPassword: ({ profilesApi, inputsConfig, authSlice, useDispatch, }: {
            profilesApi: any;
            inputsConfig?: ({
                label: string;
                field: string;
                checkerFuncs: string[];
                config: {
                    enableTypeChanging: boolean;
                    equalTo?: undefined;
                };
                type: string;
                placeholder: string;
                title?: undefined;
            } | {
                label: string;
                field: string;
                checkerFuncs: string[];
                config: {
                    equalTo: string;
                    enableTypeChanging: boolean;
                };
                type: string;
                placeholder: string;
                title?: undefined;
            } | {
                title: string;
                field: string;
                checkerFuncs: string[];
                type: string;
                label?: undefined;
                config?: undefined;
                placeholder?: undefined;
            })[];
            authSlice: any;
            useDispatch: any;
        }) => {
            data: any;
            isLoading: any;
            error: any;
            inputsValues: {};
            inputs: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            isSuccess: any;
            inputsErrors: {};
            setInputsErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
        };
        useSendPhoneConfirmation: ({ profilesApi, inputsConfig, }: {
            profilesApi: any;
            inputsConfig?: {
                label: string;
                field: string;
                checkerFuncs: string[];
                type: string;
                placeholder: string;
            }[];
        }) => {
            inputs: {};
            inputsErrors: {};
            inputsValues: {};
            inputsSetErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
            error: any;
            onSubmit: (e: any, submitProps?: {}) => any;
            isLoading: any;
            isSuccess: any;
            data: any;
        };
        useConfirmEmail: ({ profilesApi, inputsConfig, ping, initialPing, useSelector, }: {
            profilesApi: any;
            inputsConfig?: ({
                field: string;
                checkerFuncs: string[];
                type: string;
                placeholder: string;
                label: string;
                title?: undefined;
            } | {
                title: string;
                field: string;
                checkerFuncs: string[];
                label: string;
                placeholder: string;
                type: string;
            })[];
            ping?: number;
            initialPing?: number;
            useSelector: any;
        }) => {
            counter: number;
            resendEmailConfirmation: () => void;
            resendEmailConfirmationError: any;
            resendEmailConfirmationIsLoading: any;
            resendEmailConfirmationIsSuccess: any;
            resendEmailConfirmationData: any;
            data: any;
            isLoading: any;
            inputsValues: {};
            error: any;
            inputs: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            isSuccess: any;
            inputsErrors: {};
            setInputsErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
        };
        useConfirmPhone: ({ profilesApi, inputsConfig, ping, }: {
            profilesApi: any;
            inputsConfig?: ({
                field: string;
                checkerFuncs: string[];
                type: string;
                placeholder: string;
                label: string;
                title?: undefined;
            } | {
                title: string;
                field: string;
                checkerFuncs: string[];
                label: string;
                placeholder: string;
                type: string;
            })[];
            ping?: number;
        }) => {
            counter: number;
            resendPhoneConfirmation: () => void;
            resendPhoneConfirmationError: any;
            resendPhoneConfirmationIsLoading: any;
            resendPhoneConfirmationIsSuccess: any;
            resendPhoneConfirmationData: any;
            data: any;
            isLoading: any;
            error: any;
            inputs: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            isSuccess: any;
            inputsErrors: {};
            setInputsErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
        };
        useUpdateMe: ({ profilesApi, inputsConfig, useSelector, }: {
            profilesApi: any;
            inputsConfig?: {
                field: string;
                checkerFuncs: string[];
                type: string;
                placeholder: string;
                label: string;
            }[];
            useSelector: any;
        }) => {
            data: any;
            isLoading: any;
            inputsValues: {};
            error: any;
            inputs: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            isSuccess: any;
            inputsErrors: {};
            setInputsErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
        };
        useMyProfileCreator: ({ profilesApi, populate, useSelector, }: import("./hooks/use-auth/use-my-profile-creator").IUseMyProfile) => {
            me: any;
            refetch: () => void;
        };
        useSetOtp: ({ profilesApi, inputsConfig, useSelector, }: {
            profilesApi: any;
            inputsConfig?: {
                title: string;
                field: string;
                checkerFuncs: string[];
                label: string;
                placeholder: string;
                type: string;
            }[];
            useSelector: any;
        }) => {
            generateOtpSecretData: any;
            generateOtpSecretIsLoading: any;
            generateOtpSecretIsSuccess: any;
            data: any;
            inputsValues: {};
            isLoading: any;
            setInputsValues: import("react").Dispatch<import("react").SetStateAction<{}>>;
            error: any;
            inputs: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            isSuccess: any;
            inputsErrors: {};
            setInputsErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
        };
        useDeleteOtp: ({ profilesApi, inputsConfig, useSelector, }: {
            profilesApi: any;
            inputsConfig?: {
                title: string;
                field: string;
                checkerFuncs: string[];
                label: string;
                placeholder: string;
                type: string;
            }[];
            useSelector: any;
        }) => {
            data: any;
            isLoading: any;
            setInputsValues: import("react").Dispatch<import("react").SetStateAction<{}>>;
            inputsValues: {};
            error: any;
            inputs: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            isSuccess: any;
            inputsErrors: {};
            setInputsErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
        };
        useCheckOtp: ({ profilesApi, inputsConfig, useSelector, }: {
            profilesApi: any;
            inputsConfig?: {
                title: string;
                field: string;
                checkerFuncs: string[];
                label: string;
                placeholder: string;
                type: string;
            }[];
            useSelector: any;
        }) => {
            data: any;
            isLoading: any;
            inputsValues: {};
            setInputsValues: import("react").Dispatch<import("react").SetStateAction<{}>>;
            error: any;
            inputs: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            isSuccess: any;
            inputsErrors: {};
            setInputsErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
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
        AuthWrapper: ({ isAuth, children, isPublic, useRouter, useMyProfile, redirectTo, }: {
            isAuth?: boolean;
            children: import("react").ReactNode;
            isPublic?: boolean;
            useRouter?: any;
            useMyProfile: any;
            user?: any;
            redirectTo?: string;
        }) => JSX.Element;
        Pagination: import("react").FC<import("./components/pagination").TPaginationProps>;
    };
    redux: {
        slices: {
            authSlice: typeof import("./redux/slices/authSlice");
        };
        queries: {
            profiles: {
                createProfilesApi: typeof import("./redux/queries/profiles").createProfilesApi;
            };
        };
    };
};
export default _default;
