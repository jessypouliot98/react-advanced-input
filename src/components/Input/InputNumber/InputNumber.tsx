import React, {forwardRef, useCallback, useMemo, useRef} from "react";
import {InputComponentProps} from "../types";
import {getType, parseValue} from "./utils";
import {useInputValue} from "../../../hooks/input/useInputValue";

export type NumberType = 'number' | 'float' | 'int' | 'uint';
export type InputNumberProps = InputComponentProps<NumberType, number | null>;

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
  const { type, onChange, onChangeValue, ...inputProps } = props;
  const valueRef = useRef<string>((props.value ?? props.defaultValue ?? '').toString());
  const { value, setValue } = useInputValue<number | null>(props);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    valueRef.current = parseValue(type, e.target.value);
    const typedValue = valueRef.current !== '' ? parseFloat(valueRef.current) : null;
    setValue(typedValue);
    onChange?.(e);
    onChangeValue?.({ value: typedValue });
  }, [type, setValue, onChange, onChangeValue]);

  const inputValue = useMemo(() => {
    // @ts-ignore
    // eslint-disable-next-line eqeqeq -- required to compare "1." with 1 and use the ref version to allow typing of decimals
    if (valueRef.current == value) {
      return valueRef.current;
    }

    if (isNaN(value as any)) {
      return valueRef.current;
    }

    return value ?? '';
  }, [value]);

  return (
    <input
      {...inputProps}
      ref={ref}
      type={getType(type)}
      value={inputValue}
      defaultValue={undefined}
      onChange={handleChange}
    />
  )
});