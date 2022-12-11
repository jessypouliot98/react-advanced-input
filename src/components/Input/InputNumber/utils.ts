import type {NumberType} from "./InputNumber";

export const getType = (type: NumberType) => {
  switch (type) {
    case "number":
    case "float":
    case "int":
    case "uint":
    default:
      return "number";
  }
}

export const parseValue = (type: NumberType, value: string) => {
  switch(type) {
    case 'int':
      return value.replace(/[\.]/g, '');
    case 'uint':
      return value.replace(/[-\.]/g, '');
    default:
      return value;
  }
}