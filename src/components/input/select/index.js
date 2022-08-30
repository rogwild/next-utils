import React, { useState, useMemo } from "react";
import InputOverlay from "../input-overlay";
import SmartButton from "../../smart-button";

const SelectInput = (props) => {
  const {
    items,
    onChange,
    value,
    id,
    activeMatcher = () => {},
    setter = () => {},
    label,
    error,
    buttonClassName,
    inputsClassName,
  } = props;

  const passedClasses = useMemo(() => {
    if (buttonClassName) {
      return buttonClassName;
    } else {
      return `@pg px-2 py-1 @brw border @bdc bg-primary-100 @brr rounded-[4px] @cr cursor-pointer`;
    }
  }, [buttonClassName]);

  return (
    <InputOverlay label={label} error={error}>
      <div className={`flex flex-wrap gap-2`}>
        {items.map((item, index) => {
          const statusClassName = `${
            activeMatcher(item, value)
              ? `@brc border-blue-700`
              : `@brc border-transparent`
          }`;
          return (
            <SmartButton
              className={`${statusClassName} ${passedClasses}`}
              key={index}
              onClick={(e) => {
                e.target.value = setter(item);
                e.target.id = id;
                onChange(e);
              }}
            >
              {item.title}
            </SmartButton>
          );
        })}
      </div>
    </InputOverlay>
  );
};

export default SelectInput;
