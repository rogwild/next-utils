/// <reference types="react" />
import * as apiUtils from "./api";
import * as formatters from "./formatters";
import * as vanilla from "./vanilla";
declare const _default: {
    api: typeof apiUtils;
    formatters: typeof formatters;
    vanilla: typeof vanilla;
    hooks: {
        useDetectMouseover: (el: any, initialState: any) => any[];
        useDetectOutsideClick: (trigger: any, initialState: any) => any[];
        useLookupTable: ({ columns, data, getRowId, config, initialFiltersState, }: array<import("./hooks/use-lookup-table").ColumnItemObject>) => import("./hooks/use-lookup-table").ReturnObject;
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
        useForm: ({ inputsConfig, submitFunc, afterPassed, inputPropsType, }: {
            inputsConfig: any;
            submitFunc?: (submitFuncProps: any) => boolean;
            afterPassed?: ({ setInputs, clearInputs }: {
                setInputs: any;
                clearInputs: any;
            }) => void;
            inputPropsType?: string;
        }) => {
            setRequestId: import("react").Dispatch<import("react").SetStateAction<string>>;
            requestId: string;
            inputs: {};
            onSubmit: (e: any, submitProps?: {}) => any;
            inputsValues: {};
            setInputsValues: import("react").Dispatch<import("react").SetStateAction<{}>>;
            errors: {};
            files: {};
            setErrors: import("react").Dispatch<import("react").SetStateAction<{}>>;
            passed: boolean;
            setPassed: import("react").Dispatch<import("react").SetStateAction<boolean>>;
            changeBlockedInputs: (inputs: any) => void;
            clearInputs: () => void;
            setInitialErrors: () => void;
        };
        useChildForm: typeof import("./hooks/use-form/use-child-form").default;
        useDomMeasure: (ref: any, triggers?: any[]) => number[];
    };
    components: {
        SmartButton: ({ disabled, className, disabledClassName, children, tooltipPosition, href, dropdownItems, dropdownContainerClassName, dropdownClassName, dropdownProps, tooltipItems, tooltipContainerClasses, onClick, linkProps, Link, }: {
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
            Link?: () => void;
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
    };
    redux: {
        slices: {
            authSlice: typeof import("./redux/slices/authSlice");
        };
    };
};
export default _default;
