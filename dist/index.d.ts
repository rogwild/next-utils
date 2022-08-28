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
        useLookupTable: ({ columns, data: passedData, getRowId, config, initialFiltersState, }: array<import("./hooks/use-lookup-table/index").ColumnItemObject>) => import("./hooks/use-lookup-table/index").ReturnObject;
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
    };
    components: {
        SmartButton: ({ disabled, className, children, variant, tooltipPosition, href, dropdownItems: DropdownItems, dropdownContainerClasses, dropdownProps, tooltipItems: TooltipItems, tooltipContainerClasses, onClick: onClickCb, linkProps, Link, }: {
            disabled: any;
            className: any;
            children: any;
            variant: any;
            tooltipPosition: any;
            href?: string;
            dropdownItems: any;
            dropdownContainerClasses?: string;
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
                showAlert: () => any;
            };
        };
    };
};
export default _default;
