import React from 'react';
import TodoItem from './TodoItem';
import { useAppSelector } from '../app/hook';

interface Props {
  query: string;
}

const CompletedList = (props: Props) => {
  const completedList = useAppSelector((state) => state.todo.completedList);

  const { query } = props;

  return (
    <div className="todo-list">
      {completedList
        .filter((item) => item.text.toLowerCase().includes(query))
        .map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      {completedList.length < 1 && (
        <div className="todo-info">List Is Empty</div>
      )}
    </div>
  );
};

export default React.memo(CompletedList);
