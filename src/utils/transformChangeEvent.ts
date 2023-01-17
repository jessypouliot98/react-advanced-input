interface ChangeEvent {
  target: {
    value: string;
  }
}

export type Transformer = (v: string) => string;

/*
 * Use this before passing event to other methods to keep the transformed value in others
 * - This method is mutable and will update the value in event
 * - This method works with controlled & uncontrolled inputs
 */
export const transformChangeEvent = (e: ChangeEvent, transformer?: Transformer) => {
  if (transformer) {
    e.target.value = transformer(e.target.value);
  }
}