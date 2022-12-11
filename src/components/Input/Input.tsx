import React from "react";
import {InputString, InputStringProps} from "./InputString/InputString";
import {InputNumber, InputNumberProps} from "./InputNumber/InputNumber";

export type InputProps = InputStringProps | InputNumberProps;

export const Input: React.FC<InputProps> = (props) => {
  switch (props.type) {
    case "string":
    case "email":
    case "password":
      return <InputString {...props} />;
    case "number":
    case "float":
    case "int":
    case "uint":
      return <InputNumber {...props} />;
    default:
      return null;
  }
}