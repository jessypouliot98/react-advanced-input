import React, {forwardRef, useCallback} from "react";
import {CustomTextAreaComponentProps} from "../types";
import {getCommonInputProps} from "../../../utils/props";

export type TextAreaType = 'textarea';
type Value = string;
export type InputTextAreaProps = CustomTextAreaComponentProps<
  TextAreaType,
  Value
>;

export const InputTextArea = forwardRef<HTMLTextAreaElement, InputTextAreaProps>((
  props,
  ref
) => {
  const { onChangeValue, onChange, ...inputProps } = props;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
    onChangeValue?.(e.target.value);
  }, [onChange, onChangeValue]);

  return (
    <textarea
      {...inputProps}
      {...getCommonInputProps(props)}
      ref={ref}
      onChange={handleChange}
    />
  )
});

InputTextArea.displayName = 'InputTextArea';