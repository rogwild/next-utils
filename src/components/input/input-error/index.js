import React from "react";

const InputError = ({ error, className = baseClasses }) => {
  return <p className={`${baseClasses} ${className}`}>{error.message}</p>;
};

export default InputError;

const baseClasses =
  "@ttc text-red-base @fts text-10px @ttt normal-case @wh w-fit @leh leading-none";
