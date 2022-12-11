import React, {useCallback} from "react";
import {InputComponentProps} from "../types";
import {useInputValue} from "../../../hooks/input/useInputValue";

export type BooleanType = 'boolean';
export type InputBooleanProps = InputComponentProps<BooleanType, boolean>;

export const InputBoolean = (props: InputBooleanProps) => {
  const { type, name, placeholder, onChange, onChangeValue, ...inputProps } = props;

  const { value, setValue } = useInputValue(props);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = value ?? false;
    const nextValue = !isChecked;

    onChange?.(e);
    setValue(nextValue);
    onChangeValue?.({ value: nextValue });
  }, [onChange, onChangeValue, setValue, value]);

  return (
    <input
      {...inputProps}
      type="checkbox"
      name={name}
      value={(value ?? false).toString()}
      defaultValue={undefined}
      checked={value ?? false}
      onChange={handleChange}
    />
  )
}