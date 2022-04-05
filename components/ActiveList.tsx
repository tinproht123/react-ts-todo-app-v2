import React from 'react';
import TodoItem from './TodoItem';
import { useAppSelector } from '../app/hook';

interface Props {
  query: string;
}

const ActiveList = (props: Props) => {
  const activeList = useAppSelector((state) => state.todo.activeList);

  const { query } = props;

  return (
    <div className="todo-list">
      {activeList
        .filter((item) => item.text.toLowerCase().includes(query))
        .map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      {activeList.length < 1 && <div className="todo-info">List Is Empty</div>}
    </div>
  );
};

export default React.memo(ActiveList);
