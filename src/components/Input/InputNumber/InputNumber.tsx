import React, {forwardRef, useCallback} from "react";
import type {CustomInputComponentProps, NumberInputPropKeys, PlaceholderInputPropKeys, TransformInputProps} from "../types";
import {getCommonInputProps} from "../../../utils/props";
import {transformChangeEvent} from "../../../utils/transformChangeEvent";

export type NumberType = 'number';
type Value = string | number;
export type InputNumberProps = CustomInputComponentProps<
  NumberType,
  Value,
  PlaceholderInputPropKeys | NumberInputPropKeys
> & TransformInputProps;

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
  const { onChangeValue, onChange, transform, ...inputProps } = props;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    transformChangeEvent(e, transform);
    onChange?.(e);
    onChangeValue?.(e.target.value);
  }, [onChange, onChangeValue, transform]);

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