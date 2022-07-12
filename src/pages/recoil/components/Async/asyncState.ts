import { selector, selectorFamily } from 'recoil';
import { mockRequest } from './mockRequest';

export const asyncState = selector({
  key: 'asyncState1',
  get: async ({ get }) => {
    let res;
    try {
      res = await mockRequest();
    } catch (e) {
      console.log(e);
    }
    return res;
  },
});

// selectorFamily
export const family = selectorFamily({
  key: 'selectorFamily',
  get: (value) => async () => {
    let res;
    try {
      res = await mockRequest(value);
    } catch (e) {
      console.log(e);
    }
    return res;
  },
});
