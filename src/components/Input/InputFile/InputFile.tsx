import React, {forwardRef} from "react";
import {CustomInputComponentProps, FileInputPropKeys} from "../types";
import {getCommonInputProps} from "../../../utils/props";

export type FileType = 'file';
type Value = undefined;
export type InputFileProps = CustomInputComponentProps<
  FileType,
  Value,
  FileInputPropKeys
>;

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>((props, ref) => {
  return (
    <input
      {...props}
      {...getCommonInputProps(props)}
      type="file"
      ref={ref}
    />
  )
});

InputFile.displayName = 'InputFile';