import React, {forwardRef, useCallback} from "react";
import {CustomInputComponentProps, PlaceholderInputPropKeys, StringInputPropKeys} from "../types";
import {getCommonInputProps} from "../../../utils/props";

export type TextType = 'text' | 'password' | 'email' | 'url' | 'search';
type Value = string;
export type InputStringProps = CustomInputComponentProps<
  TextType,
  Value,
  PlaceholderInputPropKeys | StringInputPropKeys
>;

export const InputText = forwardRef<HTMLInputElement, InputStringProps>((props, ref) => {
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
      onChange={handleChange}
    />
  )
});

InputText.displayName = 'InputText';