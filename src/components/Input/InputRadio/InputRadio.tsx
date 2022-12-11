import React, {useCallback} from "react";
import {CheckboxComponentProps} from "../types";
import {useInputValue} from "../../../hooks/input/useInputValue";

export type RadioType = 'radio';
export type InputRadioProps = CheckboxComponentProps<RadioType, string | null>;

export const InputRadio = (props: InputRadioProps) => {
  const { type, options, name, onChange, onChangeValue, ...checkboxProps } = props;

  const { value, setValue } = useInputValue(props);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = value === e.target.value ? null : e.target.value;

    onChange?.(e);
    setValue(nextValue);
    onChangeValue?.({ value: nextValue });
  }, [onChange, onChangeValue, setValue, value]);

  return (
    <>
      {(options || []).map((option) => (
        <label key={option.value}>
          <span>{option.label ?? option.value}</span>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value?.includes(option.value) ?? false}
            onChange={handleChange}
          />
        </label>
      ))}
    </>
  )
}