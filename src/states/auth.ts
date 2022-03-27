import { atom } from 'recoil';

export type User = {
  name: String | null;
};

export const userState = atom<User>({
  key: 'user',
  default: {
    name: null,
  },
});
