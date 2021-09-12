import React from 'react';
import { useRecoilValue } from 'recoil';
import ListItem from '../ListItem';
import { todolistState } from '../todolistState';

const List = () => {
  const value = useRecoilValue(todolistState);
  return (
    <div>
      {value.map((item) => {
        return <ListItem {...item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
