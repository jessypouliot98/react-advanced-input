export const clsx = (...classNames: Array<string | undefined>) => {
  return classNames.join(' ').trim().replace(/\s+/g, ' ');
}