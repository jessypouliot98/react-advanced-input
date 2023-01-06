export const getDateValue = (value: string | number | Date | undefined): string | number => {
  if (value instanceof Date) {
    return value.getDate();
  }

  return value ?? '';
}