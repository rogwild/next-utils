import InputOverlay from "../input-overlay";
import React, { useMemo, useEffect, useState } from "react";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

const CheckboxInput = (props) => {
  const {
    value = false,
    label,
    error,
    onChange,
    id = Math.floor(Math.random() * 10000),
    inputContainerClassName,
    labelClassName,
    inputClassName,
    activeInputClassName = `@bdc bg-gray-800`,
    Icon,
  } = props;
  const [localValue, setLocalValue] = useState(value);

  const srInputContainerClassName = useStyleRewriter(
    baseInputContainerClassName,
    inputContainerClassName
  );
  const srLabelClassName = useStyleRewriter(baseLabelClassName, labelClassName);
  const srInputClassName = useStyleRewriter(
    baseInputClassName,
    inputClassName,
    false
  );

  const resInputlassName = useStyleRewriter(
    srInputClassName,
    value ? activeInputClassName : ""
  );

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
      <div className={srInputContainerClassName}>
        <label htmlFor={id} className={resInputlassName}>
          {localValue && typeof Icon === "function" ? <Icon /> : null}
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
          className={srLabelClassName}
        >
          {label}
        </p>
      </div>
    </InputOverlay>
  );
};

export default CheckboxInput;

const baseInputContainerClassName = `
  @dy flex gap-2
  @ani items-center
`;

const baseInputClassName = `
  @wh w-5
  @ht h-5
  @dy flex shrink-0
  @ani items-center
  @jyc justify-center
  @tndn duration-200
  @oe outline-none
  @brc border-primary-900
  @brw border
  @brr rounded-sm
  @cr cursor-pointer
  @bdc bg-transparent
`;

const baseLabelClassName = `
  @cr cursor-pointer
  @ttc text-black
  @mn mb-0
`;
