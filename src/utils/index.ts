import { customAlphabet } from "nanoid";
import copyToClipboard from "copy-to-clipboard";

export const genId = () => customAlphabet("0123456789", 6)();

export const copy = (text: string) => copyToClipboard(text);
