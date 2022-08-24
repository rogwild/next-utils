/// <reference types="react" />
declare const components: {
    SmartButton: ({ disabled, className, children, variant, tooltipPosition, href, dropdownItems: DropdownItems, dropdownContainerClasses, dropdownProps, tooltipItems: TooltipItems, tooltipContainerClasses, onClick: onClickCb, linkProps, }: {
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
    }) => JSX.Element;
    Modal: ({ children, showEffect, ...props }: {
        [x: string]: any;
        children: any;
        showEffect?: () => void;
    }) => JSX.Element;
};
export default components;
