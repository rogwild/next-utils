import InputOverlay from "../input-overlay";
import React, { useMemo, useEffect, useState } from "react";

const CheckboxInput = (props) => {
  const {
    value = false,
    label,
    error,
    onChange,
    id = Math.floor(Math.random() * 10000),
    Icon,
  } = props;

  const [localValue, setLocalValue] = useState(value);
  // console.log(`🚀 ~ CheckboxInput ~ value`, value, localValue);
  // console.log(`🚀 ~ CheckboxInput ~ error`, error);

  useEffect(() => {
    if (value !== localValue) {
      setLocalValue(value);
    }
    if (value == ``) {
      setLocalValue(false);
    }
  }, [value]);

  useEffect(() => {
    const e = { target: {} };
    handleChange(e);
  }, [localValue]);

  const handleChange = (e) => {
    e.target.type = `checkbox`;
    e.target.checked = localValue;
    e.target.id = id;
    onChange(e);
  };

  return (
    <InputOverlay {...props} label={null} error={error}>
      <div className="flex gap-2 items-center align-items-center">
        <label
          htmlFor={id}
          className={` w-5 h-5 flex items-center justify-center duration-200 outline-none border-2 border-primary-900 border rounded-sm cursor-pointer shrink-0 ${
            localValue ? `bg-primary-900` : `bg-white`
          }`}
        >
          {localValue && typeof Icon === "functions" ? <Icon /> : null}
          <input
            type="checkbox"
            id={id}
            className="hidden"
            onChange={() => {}}
            onClick={() => setLocalValue(!localValue)}
            checked={localValue}
          />
        </label>
        <p
          onClick={() => setLocalValue(!localValue)}
          className="cursor-pointer font-normal text-16px text-black-500 mb-0"
        >
          {label}
        </p>
      </div>
    </InputOverlay>
  );
};

export default CheckboxInput;
