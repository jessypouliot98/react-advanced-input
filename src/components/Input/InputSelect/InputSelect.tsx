import React, {ForwardedRef, forwardRef, useCallback} from "react";
import {useInputValue} from "../../../hooks/input/useInputValue";
import {
  CustomSelectComponentProps,
  Option,
} from "../types";

const NULL_OPTION_VALUE = '';

export type SelectType = 'select';
type Value = string;
export type InputSelectProps<TOption extends Option = Option> = CustomSelectComponentProps<
  SelectType,
  Value
> & {
  nullable?: boolean;
  options?: TOption[];
};

export const InputSelect = forwardRef(<TOption extends Option = Option>(
  props: InputSelectProps<TOption>,
  ref: ForwardedRef<HTMLSelectElement>
) => {
  const { type, onChange, options, nullable, ...selectProps } = props;
  const { value, setValue } = useInputValue<Value>(props);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setValue(value)
    onChange?.(e);
  }, [onChange, setValue]);

  return (
    <select
      {...selectProps}
      ref={ref}
      value={value ?? ''}
      defaultValue={undefined}
      onChange={handleChange}
    >
      {!!nullable && (
        <option value={NULL_OPTION_VALUE}>
          {selectProps.placeholder}
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