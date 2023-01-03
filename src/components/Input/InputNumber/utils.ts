import type {NumberType} from "./InputNumber";

export const getType = (type: NumberType) => {
  switch (type) {
    case "number":
    default:
      return "number";
  }
}