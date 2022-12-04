import React, { useEffect, useState, useRef, forwardRef } from "react";
import PopupCalendar from "./popup-calendar";
import { Transition } from "transition-component";
import Input from "../text/Input";
import InputOverlay from "../input-overlay";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

const DateCalendar = forwardRef((props, ref) => {
  const {
    value,
    id,
    onChange,
    error,
    nextButtonChild,
    prevButtonChild,
    inputContainerClassName,
    dateInputInputContainerClassName,
    dateInputDateInputClassName,
    dateInputMonthInputClassName,
    dateInputYearInputClassName,
    calendarContainerClassName,
    DividerComponent,
  } = props;

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

  const srInputContainerClassName = useStyleRewriter(
    baseInputContainerClassName,
    inputContainerClassName
  );

  return (
    <InputOverlay {...props} error={localError}>
      <div className={srInputContainerClassName} ref={buttonRef}>
        <DateInput
          dateInputInputContainerClassName={dateInputInputContainerClassName}
          dateInputDateInputClassName={dateInputDateInputClassName}
          dateInputMonthInputClassName={dateInputMonthInputClassName}
          dateInputYearInputClassName={dateInputYearInputClassName}
          error={localError}
          value={inputValues}
          onChange={setInputValues}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          DividerComponent={DividerComponent}
        />
        <Transition show={isDropdownOpen} {...contentTransitionProps}>
          <PopupCalendar
            containerClassName={calendarContainerClassName}
            value={localValue || new Date()}
            setValue={setLocalValue}
            open={isDropdownOpen}
            setOpen={setIsDropdownOpen}
            activeTimeframe={activeTimeframe}
            setActiveTimeframe={setActiveTimeframe}
            onClick={(localValue) => {
              setIsDropdownOpen(false);
            }}
            nextButtonChild={nextButtonChild}
            prevButtonChild={prevButtonChild}
          />
        </Transition>
      </div>
    </InputOverlay>
  );
});

export default DateCalendar;

const DateInput = ({
  dateInputInputContainerClassName = "",
  dateInputDateInputClassName = "",
  dateInputMonthInputClassName = "",
  dateInputYearInputClassName = "",
  DividerComponent,
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

  const srInputContainerClassName = useStyleRewriter(
    baseDateInputInputContainerClassName,
    dateInputInputContainerClassName
  );

  return (
    <div onClick={onClick} className={srInputContainerClassName}>
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
        inputContainerClassName="@wh w-fit"
        inputClassName={dateInputDateInputClassName}
      />
      {typeof DividerComponent === "function" ? <DividerComponent /> : null}
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
        inputContainerClassName="@wh w-fit"
        inputClassName={dateInputMonthInputClassName}
      />
      {typeof DividerComponent === "function" ? <DividerComponent /> : null}
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
        inputContainerClassName="@wh w-fit"
        inputClassName={dateInputYearInputClassName}
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

const baseInputContainerClassName = `
  @pn relative
  @zi z-70
  @wh w-full
`;

const baseDateInputInputContainerClassName = `
  @wh w-fit
  @dy flex
`;
