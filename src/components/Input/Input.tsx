import React, {ForwardedRef, forwardRef} from "react";
import {InputText, InputStringProps} from "./InputText/InputText";
import {InputNumber, InputNumberProps} from "./InputNumber/InputNumber";
import {InputRange, InputRangeProps} from "./InputRange/InputRange";
import {InputTextArea, InputTextAreaProps} from "./InputTextArea/InputTextArea";
import {InputSelect, InputSelectProps} from "./InputSelect/InputSelect";
import {InputDate, InputDateProps} from "./InputDate/InputDate";
import {InputFile, InputFileProps} from "./InputFile/InputFile";
import {Option} from "./types";

export type InputProps<
  TOption extends Option = Option,
> =
  | InputStringProps
  | InputTextAreaProps
  | InputNumberProps
  | InputSelectProps<TOption>
  | InputDateProps
  | InputRangeProps
  | InputFileProps;

export const Input = forwardRef(<TOption extends Option = Option>(
  props: InputProps<TOption>,
  ref: ForwardedRef<any>
) => {
  switch (props.type) {
    case "text":
    case "password":
    case "email":
    case "url":
    case "search":
      return <InputText ref={ref} {...props} />;
    case "textarea":
      return <InputTextArea ref={ref} {...props} />;
    case "number":
      return <InputNumber ref={ref} {...props} />;
    case "range":
      return <InputRange ref={ref} {...props} />;
    case "select":
      return <InputSelect ref={ref} {...props} />;
    case "date":
    case "datetime-local":
    case "month":
    case "time":
    case "week":
      return <InputDate ref={ref} {...props} />;
    case "file":
      return <InputFile ref={ref} {...props} />;
    default:
      return null;
  }
});

Input.displayName = 'Input';