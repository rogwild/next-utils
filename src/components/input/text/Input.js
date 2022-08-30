import React, { useRef, forwardRef } from "react";
import DropdownContainer from "../../dropdown-container";
import useDetectOutsideClick from "../../../hooks/use-detect-outsideclick";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

const Input = forwardRef(
  (
    {
      children,
      dropdownItems: DropdownItems,
      value = ``,
      type = `text`,
      placeholder,
      onChange = () => null,
      blocked = 0,
      Icon,
      className = ``,
      dropdownContainerClasses = ``,
      containerClassName = ``,
      autoComplete = null,
      id = null,
      dropdownPosition = `left`,
      maxLength,
      name,
    },
    ref
  ) => {
    const dropdownRef = useRef(null);
    const inputContainerRef = useRef(null);

    const [isDropdownOpen, setIsDropdownOpen] = useDetectOutsideClick(
      inputContainerRef,
      false
    );

    const onClick = (e) => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const typeClasses = classesByType[type];

    const baseClasses = useStyleRewriter(baseClassName, typeClasses, false);

    const blockedClasses = blocked
      ? getClassName(baseClasses, baseBlockedClassName, false)
      : getClassName(baseClasses, unlockedClassName, false);

    const srClasses = useStyleRewriter(blockedClasses, className);
    const containerClasses = useStyleRewriter(
      baseContainerClassName,
      containerClassName
    );

    const baseDropdownContainerClasses = `@wh w-full @mn mt-1 @ht h-200px @ow overflow-y-scroll ${
      dropdownPosition === `right` ? `@it left-auto right-0` : `@it inset-x-0`
    }`;

    const srDropdownContainerClasses = useStyleRewriter(
      baseDropdownContainerClasses,
      dropdownContainerClasses,
      true
    );

    return (
      <div ref={inputContainerRef} className={containerClasses}>
        <input
          placeholder={placeholder}
          autoComplete={autoComplete}
          id={id}
          type={type == `select` ? `button` : type}
          className={srClasses}
          disabled={blocked ? true : false}
          onChange={onChange}
          onClick={onClick}
          value={value}
          ref={ref}
          maxLength={maxLength}
          name={name}
        />

        {typeof Icon === `function` ? <Icon onClick={onClick} /> : null}

        {children ? (
          <div className="absolute h-full right-0 top-0 cursor-pointer">
            {children}
          </div>
        ) : null}

        {DropdownItems ? (
          <div
            className={`transition duration-200 ${
              isDropdownOpen ? `opacity-100` : `pointer-events-none opacity-0`
            }`}
          >
            <DropdownContainer
              className={srDropdownContainerClasses}
              dropdownRef={dropdownRef}
            >
              <DropdownItems setIsDropdownOpen={setIsDropdownOpen} />
            </DropdownContainer>
          </div>
        ) : null}
      </div>
    );
  }
);

export default Input;

const classesByType = {
  select: `@cr cursor-pointer`,
  text: `@cr cursor-text`,
};

const baseContainerClassName = `w-full relative`;

const unlockedClassName = `
  @pn relative
  @bxsw hover:shadow-blue-outline focus:shadow-blue-outline
  @ttc text-black dark:text-white
`;

const baseBlockedClassName = `
  @cr cursor-not-allowed
  @pre pointer-events-none
  @pn relative
  @ttc text-gray-primary
  @bdc bg-pearl
`;

const baseClassName = `
  @wh w-full
  @ftf font-family-inter
  @fts text-14px
  @leh leading-20px
  @brw border-px
  @brs border-solid
  @tndn duration-200
  @oe outline-none focus:outline-none hover:outline-none
  @brr rounded-8px
  @bro hover:border-opacity-70
  @fx flex
  @pg p-3
`;

const getClassName = (baseClassName, newClassName, cleared) => {
  const srClassName = useStyleRewriter(baseClassName, newClassName, cleared);

  return srClassName;
};
