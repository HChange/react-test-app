import { selector } from 'recoil';
import { mockRequest } from './mockRequest';

export const loadashState = selector<{ data: any; code: any }>({
  key: 'asyncState2',
  get: async ({ get }) => {
    let res = await mockRequest();

    return res;
  },
});
