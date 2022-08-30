import React, { useRef } from "react";

export const RangeInput = ({
  id = Math.random(),
  value = 0,
  onChange = () => {},
  minLimit = minValue,
  maxValue = 100,
  maxLimit = maxValue,
  range = [0, maxValue * 0.25, maxValue * 0.5, maxValue * 0.75, maxValue],
  minValue = 0,
  tooltip = false,
  disabled,
  onMouseUp = () => {},
  step = 0.01,
  className = ``,
}) => {
  const rangeRef = useRef(null);
  const onMouseUpHandler = (e) => {
    let value = +e.target.value;
    rangeRef.current.style.cursor = `grab`;
    onMouseUp(e, value);
  };
  const onChangeHandler = (e) => {
    const value = +e.target.value;
    onChange(e, value);
  };

  const srClasses = `w-full flex items-center justify-center ${className}`;

  const valueDividedByMaxValue = (value / maxValue) * 100 || 0;

  return (
    <div className={srClasses}>
      <div
        className={`${
          disabled ? `opacity-60 pointer-events-none` : ``
        }  group w-full h-[8px] flex flex-col items-center justify-center relative`}
      >
        <div
          style={circleStyle}
          className="bg-primary-200 w-full left-0 h-[8px] rounded-full absolute z-10"
        >
          <div
            style={{
              width: `${
                (value / maxValue) * 100 <= (maxLimit / maxValue) * 100
                  ? (value / maxValue) * 100
                  : (maxLimit / maxValue) * 100
              }%`,
            }}
            className="bg-primary-700 h-[8px] rounded-full absolute z-40"
          />
          <div
            style={{
              left: `${
                (value / maxValue) * 100 <= (maxLimit / maxValue) * 100
                  ? (value / maxValue) * 100
                  : (maxLimit / maxValue) * 100
              }%`,
            }}
            className="h-6 w-6 rounded-full bg-white absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-50 drop-shadow-md"
          >
            <div className="absolute h-4 w-4 rounded-full bg-primary-700 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
        {tooltip && (
          <div className="absolute left-0 z-50" style={circleStyle}>
            <div
              style={{
                left: `${valueDividedByMaxValue}%`,
              }}
              className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-primary-700 text-white text-xs left-1/2 -translate-x-1/2 p-1 rounded-4px pointer-events-none"
            >
              <div className="absolute -bottom-1 bg-primary-700 left-1/2 -translate-x-1/2 rotate-45 w-2 h-2 rounded-1px" />
              {valueDividedByMaxValue || 0}%
            </div>
          </div>
        )}
        <input
          disabled={disabled}
          list={id}
          ref={rangeRef}
          min={minValue}
          max={maxValue}
          step={step}
          onMouseDown={() => (rangeRef.current.style.cursor = `grabbing`)}
          onMouseUp={(e) => onMouseUpHandler(e)}
          onInput={(e) => onChangeHandler(e)}
          type="range"
          className="w-full absolute opacity-0 z-20"
          id={id}
          style={{
            width: `${((maxLimit - minLimit) / maxValue) * 100}%`,
            left: `calc(${(minLimit / maxValue) * 100}% )`,
            cursor: `grab`,
            minWidth: `2%`,
          }}
          value={value}
        />
        {range && <Datalist id={id} value={value} range={range} />}
      </div>
    </div>
  );
};

const circleStyle = {
  width: `calc(100% - 12px)`,
  left: `6px`,
};

const datalistStyle = {
  borderRadius: `50%`,
  minHeight: `12px`,
  minWidth: `12px`,
};

const Datalist = ({ id, range, value }) => (
  <div
    className="absolute flex justify-between left-0 w-full h-full top-0 z-0"
    id={id}
  >
    {range.map((item, index) => {
      const isAchived = value >= item;
      return (
        <div
          style={datalistStyle}
          className={`relative top-1/2 -translate-y-1/2 flex-shrink-0 ${
            isAchived ? `bg-primary-700` : `bg-primary-200`
          } ${isAchived ? `border-primary-700` : `border-primary-200`}`}
          key={index}
        />
      );
    })}
  </div>
);
