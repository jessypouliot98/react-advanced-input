import React, {forwardRef, useCallback} from "react";
import {InputComponentProps} from "../types";
import {getType} from "./utils";
import {useInputValue} from "../../../hooks/input/useInputValue";

export type StringType = 'text' | 'string' | 'password' | 'email' | 'url';
export type InputStringProps = InputComponentProps<StringType, string>;

export const InputString = forwardRef<HTMLInputElement, InputStringProps>((props, ref) => {
  const { type, onChange, onChangeValue, onBlur, ...inputProps } = props;

  const { value, setValue } = useInputValue(props);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange?.(e);
    onChangeValue?.({ value: e.target.value });
  }, [onChange, onChangeValue, setValue]);

  return (
    <input
      {...inputProps}
      ref={ref}
      type={getType(type)}
      value={value ?? ''}
      defaultValue={undefined}
      onChange={handleChange}
    />
  )
});