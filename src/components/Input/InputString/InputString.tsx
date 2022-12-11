import React, {forwardRef, useCallback} from "react";
import {InputComponentProps} from "../types";
import {getType} from "./utils";
import {useInputValue} from "../../../hooks/input/useInputValue";

export type StringType = 'string' | 'password' | 'email';
export type InputStringProps = InputComponentProps<StringType, string>;

export const InputString = forwardRef<HTMLInputElement, InputStringProps>((props, ref) => {
  const { type, onChange, onChangeValue, ...inputProps } = props;

  const { value, setValue } = useInputValue(props);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value)
    onChange?.(e);
    onChangeValue?.({ value });
  }, [onChange, onChangeValue, setValue]);

  return (
    <input
      {...inputProps}
      ref={ref}
      type={getType(type)}
      value={value ?? ''}
      onChange={handleChange}
    />
  )
});