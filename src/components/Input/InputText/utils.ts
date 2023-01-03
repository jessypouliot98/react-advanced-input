import type {TextType} from "./InputText";

export const getType = (type: TextType) => {
  switch (type) {
    case "password": return "password";
    case "email": return "email";
    case "url": return "url";
    case "text":
    default:
      return "text";
  }
}