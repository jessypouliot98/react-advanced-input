import React, {forwardRef, useCallback, useImperativeHandle, useRef} from "react";
import {InputComponentProps} from "../types";
import {getType} from "./utils";
import {useInputValue} from "../../../hooks/input/useInputValue";

export type StringType = 'text' | 'string' | 'password' | 'email' | 'url';
export type InputStringProps = InputComponentProps<StringType, string>;

export const InputString = forwardRef<HTMLInputElement, InputStringProps>((props, ref) => {
  const { type, onChange, onChangeValue, onBlur, ...inputProps } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const { value, setValue } = useInputValue(props);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange?.(e);
    onChangeValue?.({ value: e.target.value });
  }, [onChange, onChangeValue, setValue]);

  return (
    <input
      {...inputProps}
      ref={inputRef}
      type={getType(type)}
      value={value ?? ''}
      onChange={handleChange}
    />
  )
});