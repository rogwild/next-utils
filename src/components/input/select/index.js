import React, { useState, useMemo } from "react";
import InputOverlay from "../input-overlay";
import SmartButton from "../../smart-button";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

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
    inputsContainerClassName,
    activeItemClassName = `@brc border-blue-700`,
    baseItemClassName = `@brc border-transparent`,
  } = props;

  const srContainerClassName = useStyleRewriter(
    inputsContainerClassName,
    baseInputContainerClassName
  );

  const srButtonClassName = useStyleRewriter(
    baseButtonClassName,
    buttonClassName,
    false
  );

  return (
    <InputOverlay label={label} error={error}>
      <div className={srContainerClassName}>
        {items.map((item, index) => {
          const statusClassName = `${
            activeMatcher(item, value) ? activeItemClassName : baseItemClassName
          }`;

          return (
            <SmartButton
              className={`${srButtonClassName} ${statusClassName}`}
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

const baseInputContainerClassName = `
  @dy flex flex-wrap gap-2`;

const baseButtonClassName = `
    @pg px-2 py-1
    @brw border
    @bdc bg-primary-100
    @brr rounded-[4px]
    @cr cursor-pointer
  `;
