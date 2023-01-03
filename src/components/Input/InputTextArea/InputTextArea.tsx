import React, {forwardRef} from "react";
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
  const { type, ...inputProps } = props;

  return (
    <textarea
      {...inputProps}
      {...getCommonInputProps(props)}
      ref={ref}
    />
  )
});

InputTextArea.displayName = 'InputTextArea';