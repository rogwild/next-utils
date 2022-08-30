import React from "react";

const RadioButton = ({
  id,
  active = false,
  onClick,
  activeColor = "blue-primary",
}) => (
  <button
    type="button"
    id={id}
    onClick={onClick}
    className={`w-8 h-4 cursor-pointer flex rounded-full p-px duration-400 relative overflow-hidden ${
      active ? `bg-${activeColor}` : "bg-gray-light dark:bg-true-gray-800"
    }`}
  >
    <div
      className={`w-full h-full rounded-full duration-800 flex item-center p-px ${
        active
          ? `border-${activeColor} bg-${activeColor}`
          : "border-pearl dark:border-true-gray-800 bg-pearl dark:bg-true-gray-850"
      }`}
    >
      <div
        className={`absolute duration-200 relative w-1/2 h-full rounded-full shadow-md flex-shrink-0 ${
          active
            ? "translate-x-full bg-white"
            : "translate-x-0 bg-white dark:bg-true-gray-700"
        }`}
      />
    </div>
  </button>
);

export default RadioButton;
