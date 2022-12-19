import React, { useMemo, useRef, forwardRef } from "react";
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
      disabled = false,
      Icon,
      inputClassName = ``,
      inputDisabledClassName = ``,
      inputErrorClassName = ``,
      dropdownContainerClasses = ``,
      inputContainerClassName = ``,
      autoComplete = null,
      id = null,
      error,
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

    const defaultClasses = useStyleRewriter(baseClassName, typeClasses, false);
    const baseClasses = useStyleRewriter(defaultClasses, inputClassName, false);

    const statusClasses = disabled
      ? inputDisabledClassName
      : error
      ? inputErrorClassName
      : ``;

    const srClasses = useStyleRewriter(baseClasses, statusClasses);

    const srInputContainerClassName = useStyleRewriter(
      baseContainerClassName,
      inputContainerClassName
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
      <div ref={inputContainerRef} className={srInputContainerClassName}>
        <input
          placeholder={placeholder}
          autoComplete={autoComplete}
          id={id}
          type={type == `select` ? `button` : type}
          className={srClasses}
          disabled={disabled ? true : false}
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

const baseClassName = `
  @bdc bg-transparent
  @pn relative
  @wh w-full
  @brw border
  @brs border-solid
  @brc border-transparent
  @tndn duration-200
  @oe outline-none focus:outline-none hover:outline-none
  @dy flex
`;
