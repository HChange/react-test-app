import { atom, selector } from 'recoil';

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const countState = selector({
  key: 'countState',
  get: ({ get }) => {
    const name = get(nameState);
    return name.length;
  },
});
