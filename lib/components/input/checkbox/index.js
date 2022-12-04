import InputOverlay from "../input-overlay";
import React, { useMemo, useEffect, useState } from "react";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

const CheckboxInput = (props) => {
  const {
    value = false,
    label,
    error,
    onChange = () => {},
    id = Math.floor(Math.random() * 10000),
    inputContainerClassName,
    labelClassName,
    inputClassName,
    checkedInputClassName = ``,
    Icon,
    InnerComponent,
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
    localValue ? checkedInputClassName : ""
  );

  useEffect(() => {
    if (value !== localValue) {
      setLocalValue(value);
    }
    if (value == ``) {
      setLocalValue(false);
    }
  }, []);

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
          {typeof Icon === "function" ? (
            <Icon {...props} isChecked={localValue} />
          ) : null}
          <input
            type="checkbox"
            id={id}
            className="hidden"
            onChange={() => {}}
            onClick={() => setLocalValue(!localValue)}
            checked={localValue}
          />
        </label>
        {typeof InnerComponent === "function" ? (
          <InnerComponent
            {...props}
            onClick={() => setLocalValue(!localValue)}
            isChecked={localValue}
          />
        ) : label ? (
          <p
            onClick={() => setLocalValue(!localValue)}
            className={srLabelClassName}
          >
            {label}
          </p>
        ) : null}
      </div>
    </InputOverlay>
  );
};

export default CheckboxInput;

const baseInputContainerClassName = `
  @dy flex
  @gp gap-2
  @ani items-center
`;

const baseInputClassName = `
  @dy flex
  @fxsk shrink-0
  @ani items-center
  @jyc justify-center
  @cr cursor-pointer
`;

const baseLabelClassName = `
  @cr cursor-pointer
  @ttc text-black
  @mn mb-0
`;
