import React, {useCallback, useRef} from "react";

type CustomChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export type UseSyncedInputParams = {
  defaultValues?: { primary?: string, secondary?: string };
  transform?: (value: string) => string;
  setSecondaryValue: (value: string) => void;
}
export const useSyncedInput = ({ defaultValues, transform, setSecondaryValue }: UseSyncedInputParams) => {
  const valueRef = useRef({
    primary: defaultValues?.primary,
    secondary: defaultValues?.secondary,
  });
  const primaryTransformedValueRef = useRef(
    defaultValues?.primary && transform
      ? transform(defaultValues.primary)
      : defaultValues?.primary
  );

  const getIsSynced = useCallback(() => !valueRef.current.secondary || valueRef.current.secondary === primaryTransformedValueRef.current, []);

  const handleSetPrimaryValue = useCallback((value: string) => {
    const isSynced = getIsSynced();
    const transformedValue = transform?.(value) ?? value;
    valueRef.current.primary = value;
    primaryTransformedValueRef.current = transformedValue;

    if (isSynced) {
      setSecondaryValue(transformedValue);
      valueRef.current.secondary = transformedValue;
    }
  }, [getIsSynced, setSecondaryValue, transform]);

  const handleSetSecondaryValue = useCallback((value: string) => {
    valueRef.current.secondary = value;
  }, []);

  const handlePrimaryInputChange = useCallback(({ target }: CustomChangeEvent) => handleSetPrimaryValue(target.value), [handleSetPrimaryValue]);
  const handleSecondaryInputChange = useCallback(({ target }: CustomChangeEvent) => handleSetSecondaryValue(target.value), [handleSetSecondaryValue]);

  return {
    handleSetPrimaryValue,
    handleSetSecondaryValue,
    onPrimaryInputChange: handlePrimaryInputChange,
    onSecondaryInputChange: handleSecondaryInputChange,
  }
}