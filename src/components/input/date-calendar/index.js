import React, { useEffect, useState, useRef, forwardRef } from "react";
import PopupCalendar from "./popup-calendar";
import { Transition } from "transition-component";
import Input from "../text/Input";
import InputOverlay from "../input-overlay";

const DateCalendar = forwardRef((props, ref) => {
  const { value, id, onChange, error, LeftArrowIcon, RightArrowIcon } = props;

  const buttonRef = useRef();

  const [localValue, setLocalValue] = useState(null);

  const [inputValues, setInputValues] = useState();
  const [localError, setLocalError] = useState(error);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTimeframe, setActiveTimeframe] = useState(`Custom`);

  useOutsideClick(buttonRef, setIsDropdownOpen);

  useEffect(() => {
    if (
      value &&
      value.length !== 0 &&
      (!localValue || typeof localValue === `string`)
    ) {
      const parsedDate = new Date(value).toISOString();

      setLocalValue(new Date(parsedDate));
    }
  }, [value]);

  useEffect(() => {
    if (!inputValues) return;
    let couldBeParsed = true;

    if (inputValues.every((value) => value === ``)) {
      setLocalValue(null);
      return;
    }
    if (inputValues.every((value) => !isNaN(value))) {
      for (const [index, value] of inputValues.entries()) {
        if (!value) {
          couldBeParsed = false;
        }
        if (index === 0 && (+value > 30 || +value < 1)) {
          couldBeParsed = false;
        }
        if (index === 1 && (+value > 11 || +value < 1)) {
          couldBeParsed = false;
        }
        if (index === 2 && (+value < 1900 || +value > 3000)) {
          couldBeParsed = false;
        }
      }

      if (!couldBeParsed) return;

      const newDate = new Date(
        Date.UTC(inputValues[2], inputValues[1] - 1, inputValues[0])
      );
      if (!localValue || newDate?.getTime() !== localValue?.getTime()) {
        setLocalValue(newDate);
      }
    }
  }, [inputValues]);

  useEffect(() => {
    if (localValue || localValue === null) {
      setLocalError();
      const e = {
        target: {
          id,
          value: localValue ? localValue.toISOString() : null,
        },
      };

      onChange(e);
    }
  }, [localValue]);

  useEffect(() => {
    if (localValue && typeof localValue === `object`) {
      const date = new Date(localValue).getDate();

      const month = new Date(localValue).getMonth() + 1;
      const year = new Date(localValue).getFullYear();
      if (inputValues?.length === 3) {
        if (
          inputValues[0] !== date ||
          inputValues[1] !== month ||
          inputValues[2] !== year
        ) {
          setInputValues([date, month, year]);
        }
      } else {
        setInputValues([date, month, year]);
      }
    }
  }, [localValue]);

  return (
    <InputOverlay {...props} error={localError}>
      <div className="flex items-center relative z-70 " ref={buttonRef}>
        <DateInput
          error={localError}
          value={inputValues}
          onChange={setInputValues}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        <Transition
          show={isDropdownOpen}
          {...contentTransitionProps}
          className="absolute top-12 w-fit md:left-0 z-20 overflow-hidden drop-shadow-xl"
        >
          <PopupCalendar
            value={localValue || new Date()}
            setValue={setLocalValue}
            open={isDropdownOpen}
            setOpen={setIsDropdownOpen}
            activeTimeframe={activeTimeframe}
            setActiveTimeframe={setActiveTimeframe}
            onClick={(localValue) => {
              setIsDropdownOpen(false);
            }}
            LeftArrowIcon={LeftArrowIcon}
            RightArrowIcon={RightArrowIcon}
          />
        </Transition>
      </div>
    </InputOverlay>
  );
});

export default DateCalendar;

const inputClassName = `@ttc text-black @bdc bg-primary-200 @pg px-0 py-0 @brr rounded-0 @tta text-center @brc border-transparent`;
const containerClassName = `@wh w-fit @tta text-center`;
const DateInput = ({
  value = [],
  onChange = () => {},
  onClick = () => {},
  error,
}) => {
  const [date, setDate] = useState(value[0]);
  const [month, setMonth] = useState(value[1]);
  const [year, setYear] = useState(value[2]);

  useEffect(() => {
    setDate(value[0]);
    setMonth(value[1]);
    setYear(value[2]);
  }, [value]);

  useEffect(() => {
    onChange(() => {
      return [date, month, year];
    });
  }, [date, month, year]);

  return (
    <div
      onClick={onClick}
      className={`w-fit pl-[8px] pr-[10px] py-[12px] bg-primary-200 flex justify-start rounded-4px text-black text-base border-[1px] ${
        error
          ? `border-red-500 hover:border-red-500 shadow-red-outline`
          : `border-transparent`
      }`}
    >
      <Input
        type="number"
        value={date || ``}
        onChange={(e) => {
          let { value } = e.target;
          value = +value || ``;

          if (value && value < 0) value = ``;
          if (value > 31) return;

          setDate(`${value}`);
        }}
        className={`@wh w-[32px] ${inputClassName}`}
        containerClassName={containerClassName}
      />
      <div>.</div>
      <Input
        type="number"
        value={month || ``}
        onChange={(e) => {
          let { value } = e.target;
          value = +value || ``;

          if (value && value < 0) value = 0;
          if (value > 12) return;

          setMonth(value);
        }}
        className={`@wh w-[32px] ${inputClassName}`}
        containerClassName={containerClassName}
      />
      <div>.</div>
      <Input
        type="number"
        value={year || ``}
        onChange={(e) => {
          let { value } = e.target;
          value = +value || ``;

          if (value && value < 0) value = 0;
          if (value > 2100) return;

          setYear(value);
        }}
        className={`@wh w-[46px] ${inputClassName}`}
        containerClassName={containerClassName}
      />
    </div>
  );
};

const contentTransitionProps = {
  enter: `ease-out duration-300`,
  enterFrom: `opacity-0`,
  enterTo: `opacity-100`,
  leave: `ease-in duration-200`,
  leaveFrom: `opacity-100`,
  leaveTo: `opacity-0`,
};

const formatTime = (time) => {
  const timeArray = [];
  const array = [];

  const keys = Object.keys(time);

  if (!keys.length) timeArray.push(time.toString());
  else keys.forEach((key) => timeArray.push(time[key].toString()));

  timeArray.forEach((item) => {
    const date = new Date(item);
    array.push(date);
  });
  return array;
};

const formatDatesObject = (date) => {
  console.log(`🚀 ~ formatDatesObject ~ date`, date);
  let datesArray = {};
  if (Object.keys(date).length === 2) {
    datesArray[0] = formatDate(date[0]);
    datesArray[1] = formatDate(date[1]);
  } else {
    datesArray[0] = formatDate(date[0]);
  }
  return datesArray;
};

const options = { year: `numeric`, month: `2-digit`, day: `2-digit` };
const formatDate = (date) =>
  new Intl.DateTimeFormat(options)
    .format(new Date(date))
    .replace(/\//g, `.`)
    .replace(`,`, ``);

const useOutsideClick = (ref, action) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) action(false);
    };

    document.addEventListener(`mousedown`, handleClickOutside);

    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [ref]);
};
