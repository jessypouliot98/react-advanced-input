import React, {useCallback} from "react";
import {CheckboxComponentProps} from "../types";
import {useInputValue} from "../../../hooks/input/useInputValue";

export type CheckboxType = 'checkbox';
export type InputCheckboxProps = CheckboxComponentProps<CheckboxType, string[]>;

export const InputCheckbox = (props: InputCheckboxProps) => {
  const { type, options, name, onChange, onChangeValue, ...checkboxProps } = props;

  const { value, setValue } = useInputValue(props);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = value?.includes(e.target.value) ?? false;
    const nextValue = isChecked
      ? value?.filter((v) => v !== e.target.value) ?? []
      : value ? [...value, e.target.value] : [e.target.value];

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
            type="checkbox"
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