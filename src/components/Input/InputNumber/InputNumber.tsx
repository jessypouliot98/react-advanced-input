import React, {forwardRef, useCallback} from "react";
import {useInputValue} from "../../../hooks/input/useInputValue";
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
  const { type, onChange, ...inputProps } = props;
  const { value, setValue } = useInputValue<Value>(props);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange?.(e);
  }, [onChange, setValue]);

  return (
    <input
      {...inputProps}
      {...getCommonInputProps(props)}
      ref={ref}
      type="number"
      value={value ?? ''}
      defaultValue={undefined}
      onChange={handleChange}
    />
  )
});

InputNumber.displayName = 'InputNumber';