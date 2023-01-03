import {clsx} from "./clsx";

type GetCommonInputPropsParams = {
  type: string;
  className?: string;
}

export const getCommonInputProps = ({ type, className }: GetCommonInputPropsParams) => {
  return {
    className: clsx('rai-input', className),
    'data-input-type': type,
  }
}