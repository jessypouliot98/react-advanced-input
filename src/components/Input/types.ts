import {ComponentPropsWithoutRef} from "react";

export type InputComponentProps = ComponentPropsWithoutRef<'input'>;
export type TextAreaComponentProps = ComponentPropsWithoutRef<'textarea'>;
export type SelectComponentProps = ComponentPropsWithoutRef<'select'>;

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

export type NormalizedInputComponentProps = Omit<
  InputComponentProps,
  | ValuePropKeys
  | OmittedInputPropKeys
  | CombinedInputPropKeys
>
export type NormalizedTextAreaComponentProps = Omit<
  TextAreaComponentProps,
  | OmittedInputPropKeys
  | ValuePropKeys
  | Exclude<CombinedInputPropKeys, StringInputPropKeys>
>
export type NormalizedSelectComponentProps = Omit<
  SelectComponentProps,
  | OmittedInputPropKeys
  | ValuePropKeys
  | Exclude<CombinedInputPropKeys, PlaceholderInputPropKeys>
>
export type CustomInputEventProps<TValue> = {
  onChangeValue?: (value: TValue) => void;
}

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
  & Pick<InputComponentProps, TPicked>
  & CustomInputEventProps<TValue>;

export type CustomTextAreaComponentProps<
  TType extends string,
  TValue extends any,
> =
  & { type: TType }
  & ValueProps<TValue>
  & NormalizedTextAreaComponentProps
  & CustomInputEventProps<TValue>;

export type CustomSelectComponentProps<
  TType extends string,
  TValue extends any,
> =
  & { type: TType }
  & ValueProps<TValue>
  & NormalizedSelectComponentProps
  & CustomInputEventProps<TValue>;

