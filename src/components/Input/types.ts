import {ComponentPropsWithoutRef} from "react";

type InputComponentProps = ComponentPropsWithoutRef<'input'>;
type TextAreaComponentProps = ComponentPropsWithoutRef<'textarea'>;
type SelectComponentProps = ComponentPropsWithoutRef<'select'>;

type OmittedInputPropKeys =
  | 'type'
  | 'multiple'
export type ValuePropKeys =
  | 'value'
  | 'defaultValue'
export type PlaceholderInputPropKeys = 'placeholder';
export type StringInputPropKeys = 'maxLength' | 'spellCheck';
export type NumberInputPropKeys =
  | 'min'
  | 'aria-valuemin'
  | 'max'
  | 'aria-valuemax';
export type CheckboxInputPropKeys =
  | 'checked'
  | 'defaultChecked'
  | 'aria-checked'
export type FileInputPropKeys =
  | 'accept'
export type CombinedInputPropKeys =
  | PlaceholderInputPropKeys
  | StringInputPropKeys
  | NumberInputPropKeys
  | CheckboxInputPropKeys
  | FileInputPropKeys

type NormalizedInputComponentProps = Omit<
  InputComponentProps,
  | ValuePropKeys
  | OmittedInputPropKeys
  | CombinedInputPropKeys
>
type NormalizedTextAreaComponentProps = Omit<
  TextAreaComponentProps,
  | OmittedInputPropKeys
  | ValuePropKeys
  | Exclude<CombinedInputPropKeys, StringInputPropKeys>
>
type NormalizedSelectComponentProps = Omit<
  SelectComponentProps,
  | OmittedInputPropKeys
  | ValuePropKeys
  | Exclude<CombinedInputPropKeys, PlaceholderInputPropKeys>
>

type ValueProps<TValue> =
  | { value?: TValue; defaultValue?: undefined; }
  | { value?: undefined; defaultValue?: TValue; }
export type Option = { value: string; label?: string };

export type CustomInputComponentProps<
  TType extends string,
  TValue extends any,
  TPicked extends CombinedInputPropKeys
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

