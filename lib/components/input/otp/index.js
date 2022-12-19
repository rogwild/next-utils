import React, { useState, useCallback } from "react";
import SingleInput from "./SingleInput";
import InputOverlay from "../input-overlay";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

const OtpInput = (props) => {
  const {
    length = 6,
    isNumberInput = true,
    autoFocus,
    disabled,
    onChange: onChangeOTP,
    containerClassName,
    inputClassName,
    inputErrorClassName,
    error,
    id,
  } = props;

  const [activeInput, setActiveInput] = useState(autoFocus ? 0 : undefined);
  const [otpValues, setOTPValues] = useState(Array(length).fill(``));

  // Helper to return OTP from inputs
  const handleOtpChange = (e, otp) => {
    const otpValue = otp.join(``);

    e.target.id = id;
    e.target.value = otpValue;
    onChangeOTP(e);
  };

  // Helper to return value with the right type: 'text' or 'number'
  const getRightValue = useCallback(
    (str) => {
      let changedValue = str;
      if (!isNumberInput) {
        return changedValue;
      }
      return !changedValue || /\d/.test(changedValue) ? changedValue : ``;
    },
    [isNumberInput]
  );

  // Change OTP value at focussing input
  const changeCodeAtFocus = useCallback(
    (e, str) => {
      const updatedOTPValues = [...otpValues];
      updatedOTPValues[activeInput] = str[0] || ``;
      setOTPValues(updatedOTPValues);
      handleOtpChange(e, updatedOTPValues);
    },
    [activeInput, handleOtpChange, otpValues]
  );

  // Focus `inputIndex` input
  const focusInput = useCallback(
    (inputIndex) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
      setActiveInput(selectedIndex);
    },
    [length]
  );

  const focusPrevInput = useCallback(
    (clean = false) => {
      if (activeInput <= 0) return;

      focusInput(activeInput - 1);

      if (clean) {
        const updatedOTPValues = [...otpValues];
        updatedOTPValues[activeInput - 1] = ``;
        setOTPValues(updatedOTPValues);
      }
    },
    [activeInput, focusInput, otpValues]
  );

  const focusNextInput = useCallback(() => {
    if (activeInput === length - 1) return;
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);

  // Handle onFocus input
  const handleOnFocus = useCallback(
    (index) => () => {
      focusInput(index);
    },
    [focusInput]
  );

  // Handle onChange value for each input
  const handleOnChange = useCallback(
    (e) => {
      const val = getRightValue(e.currentTarget.value);
      if (!val) {
        e.preventDefault();
        return;
      }
      changeCodeAtFocus(e, val);
      focusNextInput();
    },
    [changeCodeAtFocus, focusNextInput, getRightValue]
  );

  // Hanlde onBlur input
  const onBlur = useCallback(() => {
    setActiveInput(-1);
  }, []);

  // Handle onKeyDown input
  const handleOnKeyDown = useCallback(
    (e) => {
      switch (e.key) {
        case `Backspace`:
        case `Delete`: {
          e.preventDefault();
          if (otpValues[activeInput]) {
            changeCodeAtFocus(e, ``);
          } else {
            focusPrevInput(true);
          }
          break;
        }
        case `ArrowLeft`: {
          e.preventDefault();
          focusPrevInput();
          break;
        }
        case `ArrowRight`: {
          e.preventDefault();
          focusNextInput();
          break;
        }
        case ` `: {
          e.preventDefault();
          break;
        }
        default:
          return e;
      }
    },
    [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]
  );

  const handleOnPaste = useCallback(
    (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData(`text/plain`)
        .trim()
        .slice(0, length - activeInput)
        .split(``);
      if (pastedData) {
        let nextFocusIndex = 0;
        const updatedOTPValues = [...otpValues];
        updatedOTPValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = getRightValue(pastedData.shift() || val);
            if (changedValue) {
              updatedOTPValues[index] = changedValue;
              nextFocusIndex = index;
            }
          }
        });

        setOTPValues(updatedOTPValues);
        e.target.id = id;
        e.target.value = updatedOTPValues.join(``);
        onChangeOTP(e);
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
      }
    },
    [activeInput, getRightValue, length, otpValues]
  );

  const allInputs = Array(length).fill(``);

  const srContainerClassName = useStyleRewriter(
    baseContainerClassName,
    containerClassName
  );

  const baseClasses = useStyleRewriter(
    baseInputClassName,
    inputClassName,
    false
  );

  const statusClasses = error ? inputErrorClassName : ``;

  const srClasses = useStyleRewriter(baseClasses, statusClasses);

  return (
    <InputOverlay {...props}>
      <div className={srContainerClassName}>
        {allInputs.map((_, index) => (
          <SingleInput
            key={index}
            focus={activeInput === index}
            value={otpValues && otpValues[index]}
            autoFocus={autoFocus}
            onFocus={handleOnFocus(index)}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onBlur={onBlur}
            onPaste={handleOnPaste}
            type="text"
            className={srClasses}
            disabled={disabled}
            style={{
              appearance: "textfield",
              MozAppearance: "textfield",
              WebkitAppearance: "textfield",
            }}
            // maxlength={1}
          />
        ))}
      </div>
    </InputOverlay>
  );
};

export default OtpInput;

const baseContainerClassName = `
  @dy flex gap-2
  @jyc justify-center
  @ani items-center
`;

const baseInputClassName = `
  @wh w-4/12
  @tta text-center
  @bdc bg-transparent
`;
