import React, {forwardRef, useCallback} from "react";
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
      type="number"
      onChange={handleChange}
    />
  )
});

InputNumber.displayName = 'InputNumber';