import {ComponentPropsWithoutRef} from "react";

type Option = { value: string; label?: string };

type BaseInputProps<
  T extends string,
  V extends any,
> = Omit<
  ComponentPropsWithoutRef<'input'>,
  | 'type'
  | 'value'
  | 'defaultValue'
  | 'multiple'
  | 'min'
  | 'aria-valuemin'
  | 'max'
  | 'aria-valuemax'
  | 'minLength'
  | 'maxLength'
  | 'aria-multiselectable'
  | 'aria-multiline'
> & {
  type: T;
  value?: V;
  defaultValue?: V;
};

type BaseTextAreaProps<V extends any> = Omit<
  ComponentPropsWithoutRef<'textarea'>,
  | 'value'
  | 'defaultValue'
> & {
  value?: V;
  defaultValue?: V;
};

type BaseSelectProps<V extends any> = Omit<
  ComponentPropsWithoutRef<'select'>,
  | 'value'
  | 'defaultValue'
  | 'multiple'
  | 'aria-multiselectable'
  | 'aria-multiline'
  | 'children'
> & {
  value?: V;
  defaultValue?: V;
};

type BaseCheckboxProps<T extends string, V extends any> = BaseInputProps<T, V>;

export type InputComponentProps<
  T extends string,
  V extends unknown,
  P extends BaseInputProps<T, V> = BaseInputProps<T, V>,
> = P & {
  onChangeValue?: (params: { value: V }) => void;
};

export type TextAreaComponentProps<
  T extends string,
  V extends unknown,
  P extends BaseTextAreaProps<V> = BaseTextAreaProps<V>
> = P & {
  type: T;
  onChangeValue?: (params: { value: V }) => void;
}

export type SelectComponentProps<
  T extends string,
  V extends unknown,
  P extends BaseSelectProps<V> = BaseSelectProps<V>
> = P & {
  type: T;
  options?: Option[];
  nullable?: boolean;
  placeholder?: string;
  onChangeValue?: (params: { value: V }) => void;
}

export type CheckboxComponentProps<
  T extends string,
  V extends unknown[],
  P extends BaseCheckboxProps<T, V> = BaseCheckboxProps<T, V>
> = P & {
  type: T;
  options?: Option[];
  value?: V;
  defaultValue?: V;
  onChangeValue?: (params: { value: V }) => void;
}