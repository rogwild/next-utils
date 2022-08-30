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
    blocked,
    enableTypeChanging = false,
    inputsClassName,
    Icon,
    error,
    variant = `primary`,
    name,
    ChangeInputTypeButton,
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
        blocked={blocked}
        Icon={Icon}
        className={`${baseClasses} ${variants[variant]} ${inputsClassName} ${
          error
            ? `@brc border-red-500 hover:border-red-500 @bxsw shadow-red-outline`
            : ``
        }`}
        name={name}
      />
    </InputOverlay>
  );
});

const variants = {
  white: `@bdc bg-white`,
  primary: `@bdc bg-primary-200`,
};
const baseClasses = `@brw border @brr rounded-4px @fts text-13 @pn pl-3 pr-6 @ftw font-normal @ht h-11 @ttc text-black @brc border-transparent`;
