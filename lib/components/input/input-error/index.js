import React from "react";

const InputError = ({ error }) => {
  return error.message ? <p className={baseClasses}>{error.message}</p> : null;
};

export default InputError;

const baseClasses = `@ttc text-red-500 @fts text-[12px] @ttt normal-case @wh w-fit @leh leading-none text-left`;
