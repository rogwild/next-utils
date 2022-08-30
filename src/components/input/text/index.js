import React, { forwardRef } from "react";
import Input from "./Input";
import InputOverlay from "../input-overlay";

export const TextInput = forwardRef((props, ref) => {
  const {
    value,
    id,
    onChange,
    placeholder,
    type,
    disabled,
    enableTypeChanging = false,
    inputsClassName,
    Icon,
    error,
    name,
    ChangeInputTypeButton,
    errorClassName = `@brc border-red-500`,
  } = props;

  return (
    <InputOverlay
      {...props}
      PairComponent={
        enableTypeChanging && ChangeInputTypeButton
          ? ChangeInputTypeButton
          : null
      }
    >
      <Input
        ref={ref}
        value={value}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        Icon={Icon}
        className={`${inputsClassName} ${error ? errorClassName : ``}`}
        name={name}
      />
    </InputOverlay>
  );
});
