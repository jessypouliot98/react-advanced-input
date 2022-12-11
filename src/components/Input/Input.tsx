import React from "react";
import {InputString, InputStringProps} from "./InputString/InputString";
import {InputNumber, InputNumberProps} from "./InputNumber/InputNumber";
import {InputTextArea, InputTextAreaProps} from "./InputTextArea/InputTextArea";
import {InputSelect, InputSelectProps} from "./InputSelect/InputSelect";
import {InputCheckbox, InputCheckboxProps} from "./InputCheckbox/InputCheckbox";

export type InputProps =
  | InputStringProps
  | InputTextAreaProps
  | InputNumberProps
  | InputSelectProps
  | InputCheckboxProps;

export const Input: React.FC<InputProps> = (props) => {
  switch (props.type) {
    case "text":
    case "string":
    case "email":
    case "password":
      return <InputString {...props} />;
    case "textarea":
      return <InputTextArea {...props} />;
    case "number":
    case "float":
    case "int":
    case "uint":
      return <InputNumber {...props} />;
    case "select":
      return <InputSelect {...props} />;
    case "checkbox":
      return <InputCheckbox {...props} />;
    default:
      return null;
  }
}