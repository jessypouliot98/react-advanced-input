import React, {forwardRef, useCallback} from "react";
import type {CustomTextAreaComponentProps, TransformInputProps} from "../types";
import {getCommonInputProps} from "../../../utils/props";
import {transformChangeEvent} from "../../../utils/transformChangeEvent";

export type TextAreaType = 'textarea';
type Value = string;
export type InputTextAreaProps = CustomTextAreaComponentProps<
  TextAreaType,
  Value
> & TransformInputProps;

export const InputTextArea = forwardRef<HTMLTextAreaElement, InputTextAreaProps>((
  props,
  ref
) => {
  const { onChangeValue, onChange, transform, ...inputProps } = props;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    transformChangeEvent(e, transform);
    onChange?.(e);
    onChangeValue?.(e.target.value);
  }, [onChange, onChangeValue, transform]);

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