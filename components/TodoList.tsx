import React from 'react';
import TodoItem from './TodoItem';
import { useAppSelector } from '../app/hook';
import { Todo } from '../interface';

interface Props {
  query: string;
}

const TodoList = (props: Props) => {
  const list = useAppSelector((state) => state.todo.list);
  const { query } = props;

  return (
    <div className="todo-list">
      {list
        .filter((item: Todo) => item.text.toLowerCase().includes(query))
        .map((item: Todo) => (
          <TodoItem key={item.id} {...item} />
        ))}
      {list.length < 1 && <div className="todo-info">List Is Empty</div>}
    </div>
  );
};

export default React.memo(TodoList);
