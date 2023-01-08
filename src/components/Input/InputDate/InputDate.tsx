import React, {forwardRef, useCallback} from "react";
import {CustomInputComponentProps, PlaceholderInputPropKeys, StringInputPropKeys} from "../types";
import {getCommonInputProps} from "../../../utils/props";

export type DateType = 'date' | 'datetime-local' | 'month' | 'time' | 'week';
type Value = string;
export type InputDateProps = CustomInputComponentProps<
  DateType,
  Value,
  PlaceholderInputPropKeys | StringInputPropKeys
>;

export const InputDate = forwardRef<HTMLInputElement, InputDateProps>((props, ref) => {
  const { onChangeValue, onChange, ...inputProps } = props;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onChangeValue?.(e.target.value);
  }, [onChange, onChangeValue]);

  return (
    <input
      {...inputProps}
      {...getCommonInputProps(props)}
      ref={ref}
      onChange={handleChange}
    />
  )
});

InputDate.displayName = 'InputDate';