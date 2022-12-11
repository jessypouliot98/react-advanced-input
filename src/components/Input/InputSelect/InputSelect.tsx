import React, {forwardRef, useCallback, useMemo} from "react";
import {SelectComponentProps} from "../types";
import {useInputValue} from "../../../hooks/input/useInputValue";

const NULL_OPTION_VALUE = '';

export type SelectType = 'select';
export type InputSelectProps = SelectComponentProps<SelectType, string | null>;

export const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>((props, ref) => {
  const { type, onChange, onChangeValue, options, nullable, placeholder, ...selectProps } = props;

  const { value, setValue } = useInputValue(props);
  const inputValue = useMemo(() => {
    if (!value) {
      return nullable ? NULL_OPTION_VALUE : '';
    }

    return value;
  }, [value, nullable]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value || null;
    setValue(value)
    onChange?.(e);
    onChangeValue?.({ value });
  }, [onChange, onChangeValue, setValue]);

  return (
    <select
      {...selectProps}
      value={inputValue}
      defaultValue={undefined}
      onChange={handleChange}
    >
      {!!nullable && (
        <option value={NULL_OPTION_VALUE}>
          {placeholder}
        </option>
      )}
      {(options || []).map((option) => (
        <option key={option.value} value={option.value}>
          {option.label ?? option.value}
        </option>
      ))}
    </select>
  )
});