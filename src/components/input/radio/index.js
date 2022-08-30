import React from "react";
import RadioButton from "./RadioButton";

export const RadioInput = (props) => {
  const { value, onChange } = props;

  return <RadioButton {...props} active={value} onClick={onChange} />;
};
