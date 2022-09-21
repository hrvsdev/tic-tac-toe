import { customAlphabet } from "nanoid";

export const genId = () => {
  return customAlphabet("0123456789", 6);
};
