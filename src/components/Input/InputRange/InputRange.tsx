import React, {forwardRef, useCallback} from "react";
import type {CustomInputComponentProps, NumberInputPropKeys} from "../types";
import {getCommonInputProps} from "../../../utils/props";

export type RangeType = 'range';
type Value = string | number;
export type InputRangeProps = CustomInputComponentProps<
  RangeType,
  Value,
  NumberInputPropKeys
>;

export const InputRange = forwardRef<HTMLInputElement, InputRangeProps>((props, ref) => {
  const { onChangeValue, onChange, ...inputProps } = props;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onChangeValue?.(e.target.value);
  }, [onChange, onChangeValue]);

  return (
    <input
      {...inputProps}
      {...getCommonInputProps(inputProps)}
      ref={ref}
      type="range"
      onChange={handleChange}
    />
  )
});

InputRange.displayName = 'InputRange';