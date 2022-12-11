import React, {forwardRef, useCallback} from "react";
import {TextAreaComponentProps} from "../types";
import {useInputValue} from "../../../hooks/input/useInputValue";

export type TextAreaType = 'textarea';
export type InputTextAreaProps = TextAreaComponentProps<TextAreaType, string>;

export const InputTextArea = forwardRef<HTMLTextAreaElement, InputTextAreaProps>((props, ref) => {
  const { type, onChange, onChangeValue, ...inputProps } = props;

  const { value, setValue } = useInputValue(props);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setValue(value)
    onChange?.(e);
    onChangeValue?.({ value });
  }, [onChange, onChangeValue, setValue]);

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