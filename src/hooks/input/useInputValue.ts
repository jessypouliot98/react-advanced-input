import {useRef, useState} from "react";

export type UseValueProps<V extends any = any> = { value?: V; defaultValue?: V };

export const useInputValue = <V extends any = any>(props: UseValueProps<V>) => {
  const isControlled = useRef(props.value !== undefined).current;
  const [value, setValue] = useState(props.value ?? props.defaultValue);

  return {
    isControlled,
    value: isControlled ? props.value : value,
    setValue: (value: V) => isControlled ? undefined : setValue(value),
  };
}