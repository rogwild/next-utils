import React, { forwardRef } from "react";

const TextArea = forwardRef(
  (
    {
      value = "",
      placeholder,
      onChange = () => null,
      className = "",
      disabled,
      id = null,
      ...props
    },
    ref
  ) => {
    return (
      <textarea
        {...props}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        disabled={disabled}
        ref={ref}
        id={id}
      />
    );
  }
);

export default TextArea;
