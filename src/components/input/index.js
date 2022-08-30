import React, { forwardRef } from "react";
import CheckboxInput from "./checkbox";
import TextInput from "./text";
import RangeInput from "./range";
import OtpInput from "./otp";
import TextAreaInput from "./text-area";
import UploadFileInput from "./upload-file";
import SelectInput from "./select";
import SelectImageInput from "./select-image";
import DropdownInput from "./dropdown";
import DateCalendar from "./date-calendar";
import RadioButton from "./radio-button";

const FormInput = forwardRef((props, ref) => {
  const { type, Comp } = props;

  const InputType = Comp || inputComponents[type] || TextInput;

  return <InputType {...props} ref={ref} />;
});

export default FormInput;

const inputComponents = {
  text: TextInput,
  checkbox: CheckboxInput,
  range: RangeInput,
  radio: RadioButton,
  otp: OtpInput,
  "text-area": TextAreaInput,
  file: UploadFileInput,
  "select-row": SelectInput,
  "select-image-row": SelectImageInput,
  dropdown: DropdownInput,
  date: DateCalendar,
};
