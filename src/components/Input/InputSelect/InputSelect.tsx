import React, {ForwardedRef, forwardRef, useCallback} from "react";
import {
  CustomSelectComponentProps,
  Option,
} from "../types";
import {getCommonInputProps} from "../../../utils/props";

export const NULL_OPTION_VALUE = '';

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
  const { onChangeValue, onChange, type, options, nullable, ...selectProps } = props;
  const hasUserSetValue = selectProps.value !== undefined || selectProps.defaultValue !== undefined;
  const defaultValue = !hasUserSetValue ? NULL_OPTION_VALUE : selectProps.defaultValue; // This allows us to default to placeholder option

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e);
    onChangeValue?.(e.target.value);
  }, [onChange, onChangeValue]);

  return (
    <select
      {...selectProps}
      {...getCommonInputProps(props)}
      ref={ref}
      defaultValue={defaultValue}
      onChange={handleChange}
    >
      {(!!selectProps.placeholder || typeof nullable !== 'undefined') && (
        <option value={NULL_OPTION_VALUE} disabled={!nullable} data-option-placeholder={true}>
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

InputSelect.displayName = 'InputSelect';