import React, { useMemo } from "react";
import { animated } from "react-spring";

// use forwardRef here to access alert *content* div height
// used to animate *container* div height from 0 <-> auto during enter / leave transition
const Alert = React.forwardRef(
  ({ type = "info", title, message, removeAlert = () => {}, styles }, ref) => {
    const typeClassName = useMemo(() => {
      if (type === "success") {
        return `bg-green-600`;
      } else if (type === "error") {
        return `bg-red-600`;
      }

      return ``;
    }, [type]);

    return (
      <animated.div
        className={`${alertContainerClassName} ${typeClassName}`}
        style={{
          ...styles,
        }}
      >
        <div className={alertContentWrapperClassName} ref={ref}>
          <div className={alertHeaderClassName}>
            <span>{title}</span>
          </div>
          <div className={alertBodyClassName}>
            <span className={alertContainerSpanClassName}>{message}</span>
          </div>
        </div>
      </animated.div>
    );
  }
);

export default Alert;

const alertContainerClassName = `relative overflow-hidden rounded-sm drop-shadow-md`;
const alertContentWrapperClassName = `flex flex-col max-w-full`;
const alertHeaderClassName = `h-10 flex justify-center items-center font-bold`;
const alertBodyClassName = `bg-black bg-opacity-10 flex justify-center items-center text-sm font-light px-4 py-10`;
const alertContainerSpanClassName = `text-white text-center text-sm`;
