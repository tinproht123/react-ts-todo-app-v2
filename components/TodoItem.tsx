import React, { useState } from 'react';
import { Todo } from '../interface';
import { useAppDispatch } from '../app/hook';
import { toggleCheck, removeItem } from '../app/features/todo-slice';

const TodoItem = (props: Todo) => {
  const { id, text, done } = props;
  const dispatch = useAppDispatch();

  const [check, setCheck] = useState<boolean>(done);

  const handleChange = (id: Todo, event: boolean) => {
    setCheck(event);
    dispatch(toggleCheck({ id: id, done: event }));
  };

  const handleRemove = (id: Todo) => {
    dispatch(removeItem({ id: id }));
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(id, e.currentTarget.checked)
        }
        checked={check}
      />
      <p className={`${done && 'done'}`}>{text}</p>
      <button onClick={() => handleRemove(id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
