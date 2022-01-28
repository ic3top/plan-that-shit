import { customAlphabet } from 'nanoid/non-secure'
const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
const nanoid = customAlphabet(alphabet, 12);

export const uuid = () => nanoid().match(/.{1,3}/g).join("-");
