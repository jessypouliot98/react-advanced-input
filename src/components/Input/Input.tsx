import React from "react";
import {InputText, InputStringProps} from "./InputText/InputText";
import {InputNumber, InputNumberProps} from "./InputNumber/InputNumber";
import {InputTextArea, InputTextAreaProps} from "./InputTextArea/InputTextArea";
import {InputSelect, InputSelectProps} from "./InputSelect/InputSelect";

export type InputProps =
  | InputStringProps
  | InputTextAreaProps
  | InputNumberProps
  | InputSelectProps;

export const Input: React.FC<InputProps> = (props) => {
  switch (props.type) {
    case "text":
    case "password":
    case "email":
    case "url":
      return <InputText {...props} />;
    case "textarea":
      return <InputTextArea {...props} />;
    case "number":
      return <InputNumber {...props} />;
    case "select":
      return <InputSelect {...props} />;
    default:
      return null;
  }
}