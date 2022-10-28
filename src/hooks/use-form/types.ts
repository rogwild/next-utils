type InputTypes =
  | "text"
  | "select"
  | "checkbox"
  | "range"
  | "dropdown"
  | "otp"
  | "text-area"
  | "file"
  | "date"
  | "hidden";

export interface InputConfig {
  field: string;
  type: InputTypes;
  defaultValue?: string;
  blocked?: boolean;
  config?: {
    enableTypeChanging: boolean;
  };
  [key: string]: any;
}

export interface InputProp {
  type: InputTypes;
}
