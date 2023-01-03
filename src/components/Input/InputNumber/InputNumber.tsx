import React, {forwardRef} from "react";
import {CustomInputComponentProps, PlaceholderInputPropKeys, StringInputPropKeys} from "../types";
import {getCommonInputProps} from "../../../utils/props";

export type NumberType = 'number';
type Value = string | number;
export type InputNumberProps = CustomInputComponentProps<
  NumberType,
  Value,
  PlaceholderInputPropKeys | StringInputPropKeys
>;

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
  const { type, ...inputProps } = props;

  return (
    <input
      {...inputProps}
      {...getCommonInputProps(props)}
      ref={ref}
      type="number"
    />
  )
});

InputNumber.displayName = 'InputNumber';