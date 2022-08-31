import React, { forwardRef, useMemo } from "react";
import TextArea from "./TextArea";
import InputOverlay from "../input-overlay";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

const TextAreaInput = forwardRef((props, ref) => {
  const {
    value,
    id,
    onChange,
    placeholder,
    disabled,
    error,
    inputClassName = "",
    inputErrorClassName = "",
    rows = 3,
  } = props;

  const srInputClassName = useStyleRewriter(
    baseInputClassName,
    inputClassName,
    false
  );

  const srStatusClassName = useStyleRewriter(
    srInputClassName,
    error ? inputErrorClassName : ""
  );

  return (
    <InputOverlay {...props}>
      <TextArea
        disabled={disabled}
        ref={ref}
        value={value}
        id={id}
        rows={rows}
        onChange={onChange}
        placeholder={placeholder}
        className={srStatusClassName}
      />
    </InputOverlay>
  );
});

export default TextAreaInput;

const baseInputClassName = `
  @wh w-full
  @bdc bg-transparent
  @tndn duration-200
  @oe outline-none focus:outline-none hover:outline-none
  @dy flex
  @pn relative
`;
