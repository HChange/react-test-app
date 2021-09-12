import { atom, selector } from 'recoil';
import { ItemProps } from './types';

export const todolistState = atom<ItemProps[]>({
  key: 'todolistState',
  default: [],
});

export const todolistStatsState = selector({
  key: 'todolistStatsState',
  get: ({ get }) => {
    const todolist = get(todolistState);
    const totalNum = todolist.length;
    const totalComplete = todolist.filter((item) => item.isComplete).length;
    const totalWillComplete = totalNum - totalComplete;
    const precentComplete = totalComplete === 0 ? 0 : totalComplete / totalNum;
    return {
      totalNum,
      totalComplete,
      totalWillComplete,
      precentComplete,
    };
  },
});
