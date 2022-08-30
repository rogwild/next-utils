import React, { InputOverlay } from "../input-overlay";
import SmartButton from "../../smart-button";

const SelectImageInput = (props) => {
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
    imageSelector = () => {},
    BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ||
      `http://localhost:1337`,
  } = props;

  return (
    <InputOverlay label={label} error={error}>
      <div className={`flex flex-wrap gap-2`}>
        {items.map((item, index) => {
          const statusClassName = `${
            activeMatcher(item, value)
              ? `@brc border-[#3A5AB7]`
              : `@brc border-[#F1F5F9]`
          }`;

          return (
            <SmartButton
              className={`${statusClassName} @pg px-2 py-2 @brw border @bdc bg-[#F1F5F9] @brr rounded-[4px] @cr cursor-pointer`}
              key={index}
              onClick={(e) => {
                e.target.value = setter(item);
                e.target.id = id;
                onChange(e);
              }}
            >
              <img
                src={`${BACKEND_URL}${imageSelector(item)}`}
                className="w-6"
              />
            </SmartButton>
          );
        })}
      </div>
    </InputOverlay>
  );
};

export default SelectImageInput;
