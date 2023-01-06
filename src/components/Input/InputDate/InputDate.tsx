import React, {forwardRef, useMemo} from "react";
import {CustomInputComponentProps, PlaceholderInputPropKeys, StringInputPropKeys} from "../types";
import {getCommonInputProps} from "../../../utils/props";
import {getDateValue} from "./utils";

export type DateType = 'date' | 'datetime-local' | 'month' | 'time' | 'week';
type Value = string | number | Date;
export type InputDateProps = CustomInputComponentProps<
  DateType,
  Value,
  PlaceholderInputPropKeys | StringInputPropKeys
>;

export const InputDate = forwardRef<HTMLInputElement, InputDateProps>((props, ref) => {
  const { value, defaultValue, ...inputProps } = props;
  const valueProps = useMemo(() => {
    if (value !== undefined) {
      return { value: getDateValue(value) };
    }

    return { defaultValue: getDateValue(defaultValue) }
  }, [value, defaultValue]);

  return (
    <input
      {...inputProps}
      {...getCommonInputProps(props)}
      {...valueProps}
      ref={ref}
    />
  )
});

InputDate.displayName = 'InputDate';