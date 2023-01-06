import React, {forwardRef} from "react";
import {CustomInputComponentProps, PlaceholderInputPropKeys, StringInputPropKeys} from "../types";
import {getCommonInputProps} from "../../../utils/props";

export type TextType = 'text' | 'password' | 'email' | 'url' | 'search';
type Value = string;
export type InputStringProps = CustomInputComponentProps<
  TextType,
  Value,
  PlaceholderInputPropKeys | StringInputPropKeys
>;

export const InputText = forwardRef<HTMLInputElement, InputStringProps>((props, ref) => {
  return (
    <input
      {...props}
      {...getCommonInputProps(props)}
      ref={ref}
    />
  )
});

InputText.displayName = 'InputText';