import type {StringType} from "./InputString";

export const getType = (type: StringType) => {
  switch (type) {
    case "password": return "password";
    case "email": return "email";
    case "url": return "url";
    case "text":
    case "string":
    default:
      return "text";
  }
}