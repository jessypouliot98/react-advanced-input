import {ComponentPropsWithoutRef} from "react";
import {StringType} from "./InputString/InputString";
import {NumberType} from "./InputNumber/InputNumber";
import {TextAreaType} from "./InputTextArea/InputTextArea";
import {SelectType} from "./InputSelect/InputSelect";
import {CheckboxType} from "./InputCheckbox/InputCheckbox";
import {RadioType} from "./InputRadio/InputRadio";

type Option = { value: string; label?: string };

type BaseInputProps<
  T extends string,
  V extends any,
> = Omit<
  ComponentPropsWithoutRef<'input'>,
  | 'type'
  | 'value' | 'defaultValue'
  | 'multiple'
  | 'aria-multiselectable'
  | 'aria-multiline'
> & {
  type: T;
  value?: V;
  defaultValue?: V;
}


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
> = BaseInputProps<T, V> & {
  onChangeValue?: (params: { value: V }) => void;
};

export type TextAreaComponentProps<
  T extends TextAreaType,
  V extends unknown,
> = BaseTextAreaProps<V> & {
  type: T;
  onChangeValue?: (params: { value: V }) => void;
}

export type SelectComponentProps<
  T extends SelectType,
  V extends unknown,
> = BaseSelectProps<V> & {
  type: T;
  options?: Option[];
  nullable?: boolean;
  placeholder?: string;
  onChangeValue?: (params: { value: V }) => void;
}

export type CheckboxComponentProps<
  T extends CheckboxType | RadioType,
  V extends unknown,
> = BaseCheckboxProps<T, V> & {
  type: T;
  options?: Option[];
  value?: V;
  defaultValue?: V;
  onChangeValue?: (params: { value: V }) => void;
}