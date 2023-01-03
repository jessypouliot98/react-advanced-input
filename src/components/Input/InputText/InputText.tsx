import React, {forwardRef, useCallback} from "react";
import {CustomInputComponentProps, PlaceholderInputPropKeys, StringInputPropKeys} from "../types";
import {getType} from "./utils";
import {useInputValue} from "../../../hooks/input/useInputValue";

export type TextType = 'text' | 'password' | 'email' | 'url';
type Value = string;
export type InputStringProps = CustomInputComponentProps<
  TextType,
  Value,
  PlaceholderInputPropKeys | StringInputPropKeys
>;

export const InputText = forwardRef<HTMLInputElement, InputStringProps>((props, ref) => {
  const { type, onChange, onBlur, ...inputProps } = props;
  const { value, setValue } = useInputValue<Value>(props);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange?.(e);
  }, [onChange, setValue]);

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