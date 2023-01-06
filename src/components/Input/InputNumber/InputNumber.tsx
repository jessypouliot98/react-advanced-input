import React, {forwardRef} from "react";
import {CustomInputComponentProps, NumberInputPropKeys, PlaceholderInputPropKeys} from "../types";
import {getCommonInputProps} from "../../../utils/props";

export type NumberType = 'number';
type Value = string | number;
export type InputNumberProps = CustomInputComponentProps<
  NumberType,
  Value,
  PlaceholderInputPropKeys | NumberInputPropKeys
>;

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
  return (
    <input
      {...props}
      {...getCommonInputProps(props)}
      type="number"
      ref={ref}
    />
  )
});

InputNumber.displayName = 'InputNumber';