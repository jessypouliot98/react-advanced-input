import React, {forwardRef} from "react";
import {CustomInputComponentProps, PlaceholderInputPropKeys, StringInputPropKeys} from "../types";
import {getType} from "./utils";
import {getCommonInputProps} from "../../../utils/props";

export type TextType = 'text' | 'password' | 'email' | 'url';
type Value = string;
export type InputStringProps = CustomInputComponentProps<
  TextType,
  Value,
  PlaceholderInputPropKeys | StringInputPropKeys
>;

export const InputText = forwardRef<HTMLInputElement, InputStringProps>((props, ref) => {
  const { type, ...inputProps } = props;

  return (
    <input
      {...inputProps}
      {...getCommonInputProps(props)}
      ref={ref}
      type={getType(type)}
    />
  )
});

InputText.displayName = 'InputText';