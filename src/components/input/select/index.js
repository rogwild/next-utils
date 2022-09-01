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
    inputContainerClassName,
    activeItemClassName,
    baseItemClassName,
    InnerComponent,
  } = props;

  const srInputContainerClassName = useStyleRewriter(
    inputContainerClassName,
    baseInputContainerClassName
  );

  return (
    <InputOverlay label={label} error={error}>
      <div className={srInputContainerClassName}>
        {items.map((item, index) => {
          return (
            <SmartButton
              className={
                activeMatcher(item, value)
                  ? activeItemClassName
                  : baseItemClassName
              }
              key={index}
              onClick={(e) => {
                e.target.value = setter(item);
                e.target.id = id;
                onChange(e);
              }}
            >
              {typeof InnerComponent === "function" ? (
                <InnerComponent
                  isSelected={activeMatcher(item, value)}
                  {...props}
                  item={item}
                />
              ) : (
                item.title
              )}
            </SmartButton>
          );
        })}
      </div>
    </InputOverlay>
  );
};

export default SelectInput;

const baseInputContainerClassName = `
  @dy flex
  @fxw flex-wrap
  @gp gap-2`;
