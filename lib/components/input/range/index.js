import React, { useMemo, useRef, useEffect } from "react";
import useStyleRewriter from "../../../hooks/use-style-rewriter";
import InputOverlay from "../input-overlay";

const RangeInput = (props) => {
  const {
    id = Math.random(),
    value = 0,
    onChange = () => {},
    minValue = 0,
    maxValue = 100,
    minLimit = minValue,
    maxLimit = maxValue,
    range = [0, maxValue * 0.25, maxValue * 0.5, maxValue * 0.75, maxValue],
    tooltip = false,
    disabled,
    onMouseUp = () => {},
    inputClassName,
    rangeClassName,
    activeRangeClassName,
    label,
    error,
    Comp,
    step = 0.01,
    containerClassName,
  } = props;

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

  useEffect(() => {
    onChange({ target: { value: +value } }, value);
  }, [+value]);

  const srContainerClassName = useStyleRewriter(
    baseContainerClassName,
    containerClassName
  );

  const valueDividedByMaxValue = (value / maxValue) * 100 || 0;

  const srRangeClassName = useStyleRewriter(baseRangeClassName, rangeClassName);
  const srActiveRangeClassName = useStyleRewriter(
    baseActiveRangeClassName,
    activeRangeClassName
  );
  const srInputClassName = useStyleRewriter(baseInputClassName, inputClassName);

  const draggedItemStyle = useMemo(() => {
    return {
      left: `${
        (value / maxValue) * 100 <= (maxLimit / maxValue) * 100
          ? (value / maxValue) * 100
          : (maxLimit / maxValue) * 100
      }%`,
    };
  }, [value]);

  return (
    <InputOverlay {...props} label={label} error={error}>
      <div className={srContainerClassName}>
        <div style={circleStyle} className={srRangeClassName}>
          <div
            style={{
              width: `${
                (value / maxValue) * 100 <= (maxLimit / maxValue) * 100
                  ? (value / maxValue) * 100
                  : (maxLimit / maxValue) * 100
              }%`,
            }}
            className={srActiveRangeClassName}
          />
          {typeof Comp === "function" ? (
            <Comp style={draggedItemStyle} />
          ) : (
            <div style={draggedItemStyle} className={srInputClassName} />
          )}
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
          className="w-full absolute h-full opacity-0 z-20"
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
    </InputOverlay>
  );
};

const baseContainerClassName = `
  @wh w-full
  @dy flex
  @ani items-center
  @jyc justify-center
  @gp group
  @ht h-[8px] 
  @fxd flex-col
  @pn relative
`;

const baseInputClassName = `
  @ht h-6
  @wh w-6
  @brr rounded-full
  @bdc bg-white
  @pn absolute
  @it top-1/2
  @tndn -translate-y-1/2 -translate-x-1/2
  @zi z-50
  @bxsw shadow-md
`;

const baseRangeClassName = `
  @ht h-[8px]
  @wh w-full
  @it left-0
  @brr rounded-full
  @pn absolute
  @zi z-10`;

const baseActiveRangeClassName = `
  @ht h-[8px]
  @brr rounded-full
  @pn absolute
  @zi z-40`;

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

export default RangeInput;
