import React from "react";
import hooks from "../../hooks";
const { useStyleRewriter } = hooks;

const DropdownContainer = ({ children, className, dropdownRef }) => {
  const srClasses = useStyleRewriter(baseClasses, className);

  return (
    <div ref={dropdownRef} className={srClasses}>
      <div className="flex flex-col relative w-full">{children}</div>
    </div>
  );
};

export default DropdownContainer;

const baseClasses = `
  @pn absolute
  @mn mt-2
  @it top-full left-0
`;
