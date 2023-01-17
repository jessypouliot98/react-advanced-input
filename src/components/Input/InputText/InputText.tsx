import React, {forwardRef, useCallback} from "react";
import type {CustomInputComponentProps, PlaceholderInputPropKeys, StringInputPropKeys, TransformInputProps} from "../types";
import {getCommonInputProps} from "../../../utils/props";
import {transformChangeEvent} from "../../../utils/transformChangeEvent";

export type TextType = 'text' | 'password' | 'email' | 'url' | 'search';
type Value = string;
export type InputStringProps = CustomInputComponentProps<
  TextType,
  Value,
  PlaceholderInputPropKeys | StringInputPropKeys
> & TransformInputProps;

export const InputText = forwardRef<HTMLInputElement, InputStringProps>((props, ref) => {
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
      onChange={handleChange}
    />
  )
});

InputText.displayName = 'InputText';