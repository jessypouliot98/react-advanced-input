import {ComponentPropsWithoutRef} from "react";

type BaseInputProps<
  T extends string,
  V extends any,
> = Omit<
  ComponentPropsWithoutRef<'input'>,
  | 'type'
  | 'value'
  | 'multiple'
  | 'min'
  | 'aria-valuemin'
  | 'max'
  | 'aria-valuemax'
  | 'minLength'
  | 'maxLength'
> & {
  type: T;
  value?: V;
  defaultValue?: V;
};

export type InputComponentProps<
  T extends string,
  V extends unknown,
  P extends BaseInputProps<T, V> = BaseInputProps<T, V>,
> = P & {
  onChangeValue?: (params: { value: V }) => void;
};