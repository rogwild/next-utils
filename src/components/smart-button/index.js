import React, { Fragment, useRef, useMemo } from "react";
import hooks from "../../hooks";
import { Transition } from "transition-component";
import DropdownContainer from "../dropdown-container";
import Tooltip from "../tooltip";

const { useStyleRewriter, useDetectMouseover, useDetectOutsideClick } = hooks;

const SmartButton = ({
  disabled,
  className,
  disabledClassName,
  children,
  tooltipPosition,
  href = "",
  dropdownItems: DropdownItems,
  dropdownContainerClasses = "",
  dropdownProps,
  tooltipItems: TooltipItems,
  tooltipContainerClasses = "",
  onClick: onClickCb,
  linkProps = [],
  Link = () => {},
}) => {
  const dropdownRef = useRef(null);
  const SmartButtonRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useDetectOutsideClick(
    SmartButtonRef,
    false
  );

  const onClick = (e) => {
    if (DropdownItems && !dropdownRef.current?.contains(e.target)) {
      setIsDropdownOpen(!isDropdownOpen);
    }

    return onClickCb && onClickCb(e);
  };

  const [isMouseOver] = useDetectMouseover(SmartButtonRef, false);

  const statusClassName = useMemo(() => {
    if (disabled) {
      return disabledClassName ? disabledClassName : "@pre pointer-events-none";
    }
    return className;
  }, [disabled, className]);

  const srClasses = useStyleRewriter(baseButtonClassName, statusClassName);

  const Element = href ? LinkSmartButton : DivSmartButton;

  const elementProps = href
    ? { Link, href, passHref: true, className: srClasses, linkProps }
    : { className: srClasses };

  return (
    <Fragment>
      <Element
        SmartButtonRef={SmartButtonRef}
        onClick={onClick}
        {...elementProps}
      >
        {typeof children === "function" ? children({ isMouseOver }) : children}

        {DropdownItems && (
          <Transition show={isDropdownOpen} {...contentTransitionProps}>
            <DropdownContainer
              className={dropdownContainerClasses}
              dropdownRef={dropdownRef}
            >
              <DropdownItems
                {...dropdownProps}
                setIsDropdownOpen={setIsDropdownOpen}
              />
            </DropdownContainer>
          </Transition>
        )}
        {TooltipItems && (
          <Transition show={isMouseOver} {...tooltipTransitionProps}>
            <Tooltip
              tooltipPosition={tooltipPosition}
              className={tooltipContainerClasses}
              visible={isMouseOver}
            >
              <TooltipItems />
            </Tooltip>
          </Transition>
        )}
      </Element>
    </Fragment>
  );
};
export default SmartButton;

const baseButtonClassName = `
  @pn relative
  @cr cursor-pointer
  @tndn duration-200
  @tta text-center`;

const DivSmartButton = ({ children, SmartButtonRef, ...props }) => (
  <div ref={SmartButtonRef} {...props}>
    {children}
  </div>
);

const LinkSmartButton = ({
  Link = () => {},
  children,
  className,
  linkProps = [],
  ...props
}) => {
  let linkAttributes = [];
  if (linkProps.length) {
    linkAttributes = linkProps.map(({ name, value }) => [name, value]);
    linkAttributes = Object.fromEntries(linkAttributes);
  }
  return (
    <Link {...props}>
      <a {...linkAttributes} className={className}>
        {children}
      </a>
    </Link>
  );
};

const contentTransitionProps = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

const tooltipTransitionProps = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 scale-50",
  enterTo: "opacity-100 scale-100",
  leave: "ease-in duration-300",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-50",
};
