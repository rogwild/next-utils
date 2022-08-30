import React, { useState, useEffect, useMemo } from "react";
import InputOverlay from "../input-overlay";
import SmartButton from "../../smart-button";

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
    buttonClassName,
    variant,
    Icon,
  } = props;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    const active = items?.find((item) => activeMatcher(item, value));

    setActiveItem(active);
  }, [items?.length, value]);

  const className = useMemo(() => {
    if (buttonClassName) {
      return buttonClassName;
    } else {
      if (variant === `white`) {
        return `@brr rounded-[4px] @cr cursor-pointer @fx flex @ani items-center @jyc justify-between  @ttc text-black @fts text-[13px] @pg px-3 py-2 @ht h-11 @bdc bg-white`;
      }
      return `@brr rounded-[4px] @cr cursor-pointer @fx flex @ani items-center @jyc justify-between  @ttc text-black @fts text-[13px] @pg px-3 py-2 @ht h-11 @bdc bg-primary-200`;
    }
  }, [buttonClassName]);

  useEffect(() => {
    onDropdownOpenChange(isDropdownOpen);
  }, [isDropdownOpen]);

  return (
    <InputOverlay label={label} error={error}>
      <div className={`relative w-full`}>
        <SmartButton
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          dropdownItems={
            items?.length
              ? () =>
                  items.map((item, index) => {
                    const statusClassName = activeMatcher(item, value)
                      ? `@ttc text-primary-900 @brc border-primary-900`
                      : `@ttc text-black hover:text-primary-900 @brc border-transparent hover:border-primary-900`;
                    return (
                      <SmartButton
                        key={index}
                        onClick={(e) => {
                          e.target.value = setter(item, index);
                          e.target.id = id;

                          onChange(e);
                        }}
                        className={`@pg px-4 py-2 @fts text-14px @brr rounded-[4px] @brw border @mn my-px  ${statusClassName}`}
                        variant="light"
                      >
                        {item?.title}
                      </SmartButton>
                    );
                  })
              : null
          }
          dropdownContainerClasses="@wh w-full p-1 @bdc bg-white @zi z-20 @brw border @brr rounded-4px @brc border-transparent @bxsw drop-shadow-lg"
          className={className}
        >
          {activeItem?.title || placeholder}
          {typeof Icon === "function" ? (
            <Icon isDropdownOpen={isDropdownOpen} />
          ) : null}
        </SmartButton>
      </div>
    </InputOverlay>
  );
};

export default DropdownInput;
