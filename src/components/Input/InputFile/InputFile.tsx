import React, {forwardRef, useCallback} from "react";
import type {
  CustomInputEventProps,
  FileInputPropKeys, InputComponentProps,
  NormalizedInputComponentProps
} from "../types";
import {getCommonInputProps} from "../../../utils/props";

export type FileType = 'file';
export type InputFileProps =
  & { type: FileType }
  & NormalizedInputComponentProps
  & Pick<InputComponentProps, FileInputPropKeys>
  & CustomInputEventProps<File | null>;

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>((props, ref) => {
  const { onChange, onChangeValue, ...inputProps } = props;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onChangeValue?.(e.target.files?.[0] ?? null);
  }, [onChange, onChangeValue]);

  return (
    <input
      {...inputProps}
      {...getCommonInputProps(inputProps)}
      ref={ref}
      type="file"
      onChange={handleChange}
    />
  )
});

InputFile.displayName = 'InputFile';