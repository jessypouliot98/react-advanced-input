import React, {forwardRef} from "react";
import {CustomInputComponentProps, NumberInputPropKeys} from "../types";
import {getCommonInputProps} from "../../../utils/props";

export type RangeType = 'range';
type Value = string | number;
export type InputRangeProps = CustomInputComponentProps<
  RangeType,
  Value,
  NumberInputPropKeys
>;

export const InputRange = forwardRef<HTMLInputElement, InputRangeProps>((props, ref) => {
  return (
    <input
      {...props}
      {...getCommonInputProps(props)}
      ref={ref}
      type="range"
    />
  )
});

InputRange.displayName = 'InputRange';