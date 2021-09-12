import React from 'react';
import { useRecoilState } from 'recoil';
import { todolistState } from '../todolistState';
import { ItemProps } from '../types';

const ListItem: React.FC<ItemProps> = ({ id, text, isComplete }) => {
  const [todolist, setTodolist] = useRecoilState(todolistState);
  const toggleComplete = () => {
    const newTodolist = todolist.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isComplete: !item.isComplete,
        };
      } else {
        return item;
      }
    });
    setTodolist(newTodolist);
  };

  // delete
  const deleteAction = () => {
    const newTodolist = todolist.filter((item) => item.id !== id);
    setTodolist(newTodolist);
  };
  return (
    <div style={{ padding: '5px 10px', display: 'flex', justifyContent: 'space-around', background: '#5a66ff' }}>
      <input type="checkbox" value={isComplete as any} onClick={toggleComplete} />
      <div>{text}</div>
      <span onClick={deleteAction} style={{ cursor: 'pointer' }}>
        x
      </span>
    </div>
  );
};

export default ListItem;
