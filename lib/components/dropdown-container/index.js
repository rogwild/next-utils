import React from "react";
import hooks from "../../hooks";
const { useStyleRewriter } = hooks;

const DropdownContainer = ({
  children,
  containerClassName,
  className,
  dropdownRef,
}) => {
  const srClassName = useStyleRewriter(baseClasses, className);
  const srContainerClassName = useStyleRewriter(
    baseContainerClassName,
    containerClassName
  );

  return (
    <div ref={dropdownRef} className={srContainerClassName}>
      <div className={srClassName}>{children}</div>
    </div>
  );
};

export default DropdownContainer;

const baseContainerClassName = `
  @pn absolute
  @wh w-full
  @mn mt-2
  @zi z-50
  @it top-full left-0
`;

const baseClasses = `
  @dy flex
  @fxd flex-col
  @pn relative
  @wh w-full
`;
