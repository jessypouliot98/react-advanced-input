import React, {ForwardedRef, forwardRef} from "react";
import {InputText, InputStringProps} from "./InputText/InputText";
import {InputNumber, InputNumberProps} from "./InputNumber/InputNumber";
import {InputTextArea, InputTextAreaProps} from "./InputTextArea/InputTextArea";
import {InputSelect, InputSelectProps} from "./InputSelect/InputSelect";
import {Option} from "./types";

export type InputProps<
  TOption extends Option = Option,
> =
  | InputStringProps
  | InputTextAreaProps
  | InputNumberProps
  | InputSelectProps<TOption>;

export const Input = forwardRef(<TOption extends Option = Option>(
  props: InputProps<TOption>,
  ref: ForwardedRef<any>
) => {
  switch (props.type) {
    case "text":
    case "password":
    case "email":
    case "url":
      return <InputText ref={ref} {...props} />;
    case "textarea":
      return <InputTextArea ref={ref} {...props} />;
    case "number":
      return <InputNumber ref={ref} {...props} />;
    case "select":
      return <InputSelect ref={ref} {...props} />;
    default:
      return null;
  }
})