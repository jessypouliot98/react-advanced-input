import React, {useCallback, useRef} from "react";

type CustomChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export type UseSyncedInputParams = {
  defaultValues?: { primary?: string, secondary?: string };
  transform?: (v: string) => string;
  setSecondaryValue: (v: string) => void;
}
export const useSyncedInput = ({ defaultValues, transform, setSecondaryValue }: UseSyncedInputParams) => {
  const valueRef = useRef(defaultValues ?? { primary: undefined, secondary: undefined });
  const primaryTransformedValueRef = useRef(defaultValues?.primary ? transform?.(defaultValues?.primary) : defaultValues?.primary)

  const getIsSynced = useCallback(() => {
    return !valueRef.current.secondary || valueRef.current.secondary === primaryTransformedValueRef.current;
  }, []);

  const handlePrimaryInputChange = useCallback((e: CustomChangeEvent) => {
    const isSynced = getIsSynced();
    const transformedValue = transform?.(e.target.value) ?? e.target.value;
    valueRef.current.primary = e.target.value;
    primaryTransformedValueRef.current = transformedValue;

    if (isSynced) {
      setSecondaryValue(transformedValue);
      valueRef.current.secondary = transformedValue;
    }
  }, [getIsSynced, setSecondaryValue, transform]);

  const handleSecondaryInputChange = useCallback((e: CustomChangeEvent) => {
    valueRef.current.secondary = e.target.value;
  }, []);

  return {
    handlePrimaryInputChange,
    handleSecondaryInputChange
  }
}