import React, {forwardRef, useCallback} from "react";
import {CustomTextAreaComponentProps} from "../types";
import {useInputValue} from "../../../hooks/input/useInputValue";

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
  const { type, onChange, ...inputProps } = props;

  const { value, setValue } = useInputValue(props);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setValue(value)
    onChange?.(e);
  }, [onChange, setValue]);

  return (
    <textarea
      {...inputProps}
      ref={ref}
      value={value ?? ''}
      defaultValue={undefined}
      onChange={handleChange}
    />
  )
});