import React, { useState, useCallback } from "react";
import SingleInput from "./SingleInput";
import InputOverlay from "../input-overlay";

const OtpInput = (props) => {
  const {
    length = 6,
    isNumberInput = true,
    autoFocus,
    disabled,
    onChange: onChangeOTP,
    inputStyle,
    error,
    id,
  } = props;

  const [activeInput, setActiveInput] = useState(0);
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

  return (
    <InputOverlay {...props}>
      <div className="flex justify-center items-center w-auto">
        <div
          className={`flex w-full  hover:shadow-blue-outline focus-within:shadow-blue-outline`}
        >
          {allInputs.map((_, index) => (
            <SingleInput
              key={`SingleInput-${index}`}
              focus={activeInput === index}
              value={otpValues && otpValues[index]}
              autoFocus={autoFocus}
              onFocus={handleOnFocus(index)}
              onChange={handleOnChange}
              onKeyDown={handleOnKeyDown}
              onBlur={onBlur}
              onPaste={handleOnPaste}
              style={inputStyle}
              type="number"
              className={`w-4/12 p-2 mx-1.5 ${index === 0 && `ml-0`} ${
                index === length - 1 && `mr-0`
              } text-center text-base border-gray-300 text-black rounded-8px border font-normal max-w-11 h-11 text-black bg-primary-200`}
              disabled={disabled}
              // maxlength={1}
            />
          ))}
        </div>
      </div>
    </InputOverlay>
  );
};

export default OtpInput;
