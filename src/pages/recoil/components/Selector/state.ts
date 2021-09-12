import { atom, DefaultValue, selector } from 'recoil';

export const atomTest = atom({
  key: 'atomTest',
  default: 0,
});

export const setGetTest = selector<number>({
  key: 'setGetTest',
  get: ({ get }) => {
    const val = get(atomTest);
    return val / 2;
  },
  set: ({ set }, newValue) => {
    set(atomTest, newValue instanceof DefaultValue ? newValue : (newValue as number) * 4);
  },
});
