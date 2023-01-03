import React, {ForwardedRef, forwardRef} from "react";
import {
  CustomSelectComponentProps,
  Option,
} from "../types";
import {getCommonInputProps} from "../../../utils/props";

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
  const { type, options, nullable, ...selectProps } = props;

  return (
    <select
      {...selectProps}
      {...getCommonInputProps(props)}
      ref={ref}
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

InputSelect.displayName = 'InputSelect';