import React, { useState, useEffect, useMemo } from "react";
import InputOverlay from "../input-overlay";
import SmartButton from "../../smart-button";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

const DropdownInput = (props) => {
  const {
    label,
    error,
    setter,
    id,
    value,
    onChange = () => {},
    onDropdownOpenChange = () => {},
    items,
    activeMatcher,
    placeholder = ``,
    inputContainerClassName,
    inputClassName,
    activeItemClassName,
    dropdownClassName = "",
    baseItemClassName,
    Icon,
    InnerComponent,
  } = props;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const srInputClassName = useStyleRewriter(
    baseInputClassName,
    inputClassName,
    false
  );

  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    const active = items?.find((item) => activeMatcher(item, value));

    setActiveItem(active);
  }, [items?.length, value]);

  useEffect(() => {
    onDropdownOpenChange(isDropdownOpen);
  }, [isDropdownOpen]);

  return (
    <InputOverlay {...props} label={label} error={error}>
      <SmartButton
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        dropdownItems={
          items?.length
            ? () =>
                items.map((item, index) => {
                  return (
                    <SmartButton
                      key={index}
                      onClick={(e) => {
                        e.target.value = setter(item, index);
                        e.target.id = id;

                        onChange(e);
                      }}
                      className={
                        activeMatcher(item, value)
                          ? activeItemClassName
                          : baseItemClassName
                      }
                    >
                      {typeof InnerComponent === "function" ? (
                        <InnerComponent
                          {...props}
                          isSelected={activeMatcher(item, value)}
                          item={item}
                        />
                      ) : (
                        item?.title
                      )}
                    </SmartButton>
                  );
                })
            : null
        }
        dropdownClassName={dropdownClassName}
        dropdownContainerClassName={inputContainerClassName}
        className={srInputClassName}
      >
        {typeof InnerComponent === "function" && activeItem ? (
          <InnerComponent {...props} item={activeItem} />
        ) : activeItem?.title ? (
          activeItem?.title
        ) : (
          placeholder
        )}
        {typeof Icon === "function" ? (
          <Icon {...props} isDropdownOpen={isDropdownOpen} />
        ) : null}
      </SmartButton>
    </InputOverlay>
  );
};

export default DropdownInput;

const baseInputClassName = `
  @cr cursor-pointer
  @fx flex
  @wh w-full
`;
