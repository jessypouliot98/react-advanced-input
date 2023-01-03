import {ComponentPropsWithoutRef} from "react";

type InputComponentProps = ComponentPropsWithoutRef<'input'>;
type TextAreaComponentProps = ComponentPropsWithoutRef<'textarea'>;
type SelectComponentProps = ComponentPropsWithoutRef<'select'>;

type OmittedInputPropKeys =
  | 'type'
export type ValuePropKeys =
  | 'value'
  | 'defaultValue'
export type PlaceholderInputPropKeys = 'placeholder';
export type StringInputPropKeys = 'maxLength';
export type NumberInputPropKeys =
  | 'min'
  | 'aria-valuemin'
  | 'max'
  | 'aria-valuemax';
export type CheckboxInputPropKeys =
  | 'checked'
  | 'aria-checked'

type NormalizedInputComponentProps = Omit<
  InputComponentProps,
  | ValuePropKeys
  | OmittedInputPropKeys
  | StringInputPropKeys
  | NumberInputPropKeys
  | CheckboxInputPropKeys
  | PlaceholderInputPropKeys
>
type NormalizedTextAreaComponentProps = Omit<
  TextAreaComponentProps,
  ValuePropKeys
>
type NormalizedSelectComponentProps = Omit<
  SelectComponentProps,
  ValuePropKeys
>

type ValueProps<TValue> =
  | { value?: TValue; defaultValue?: undefined; }
  | { value?: undefined; defaultValue?: TValue; }
export type Option = { value: string; label?: string };

export type CustomInputComponentProps<
  TType extends string,
  TValue extends any,
  TPicked extends StringInputPropKeys | NumberInputPropKeys | CheckboxInputPropKeys | PlaceholderInputPropKeys
> =
  & { type: TType }
  & ValueProps<TValue>
  & NormalizedInputComponentProps
  & Pick<InputComponentProps, TPicked>;

export type CustomTextAreaComponentProps<
  TType extends string,
  TValue extends any,
> =
  & { type: TType }
  & ValueProps<TValue>
  & NormalizedTextAreaComponentProps;

export type CustomSelectComponentProps<
  TType extends string,
  TValue extends any,
> =
  & { type: TType }
  & ValueProps<TValue>
  & NormalizedSelectComponentProps;

