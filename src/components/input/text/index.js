import React, { forwardRef } from "react";
import Input from "./Input";
import InputOverlay from "../input-overlay";

const TextInput = forwardRef((props, ref) => {
  const {
    value,
    id,
    onChange,
    placeholder,
    type,
    disabled,
    enableTypeChanging = false,
    inputClassName,
    Icon,
    name,
    ChangeInputTypeButton,
    inputErrorClassName,
    inputDisabledClassName,
    inputContainerClassName,
    error,
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
        inputClassName={inputClassName}
        inputDisabledClassName={inputDisabledClassName}
        inputErrorClassName={inputErrorClassName}
        inputContainerClassName={inputContainerClassName}
        name={name}
        error={error}
      />
    </InputOverlay>
  );
});

export default TextInput;
