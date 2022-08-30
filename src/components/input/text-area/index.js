import React, { forwardRef } from "react";
import TextArea from "./TextArea";
import InputOverlay from "../input-overlay";

const TextAreaInput = forwardRef((props, ref) => {
  const {
    value,
    id,
    onChange,
    placeholder,
    disabled,
    variant = `primary`,
    error,
  } = props;

  const className =
    variant === `primary`
      ? `@bdc bg-primary-200 ${baseClasses}`
      : `@bdc bg-white ${baseClasses}`;

  return (
    <InputOverlay {...props}>
      <TextArea
        disabled={disabled}
        ref={ref}
        value={value}
        id={id}
        rows={3}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} ${
          error
            ? `@brc border-red-500 hover:border-red-500 @bxsw shadow-red-outline`
            : ``
        }`}
      />
    </InputOverlay>
  );
});

export default TextAreaInput;

const baseClasses = `@brr rounded-4px @brw border @brc border-transparent @fts text-13 @pn pl-3 pr-6 @ftw font-normal @ttc text-black`;
