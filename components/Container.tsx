import React, { useState, useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import ActiveList from './ActiveList';
import CompletedList from './CompletedList';
import Footer from './Footer';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { setActiveList, setCompletedList } from '../app/features/todo-slice';

const Container = () => {
  const [showInput, setShowInput] = useState<boolean>(true);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [active, setActive] = useState<number>(0);
  const [query, setQuery] = useState<string>('');

  const list = useAppSelector((state) => state.todo.list);

  const dispatch = useAppDispatch();

  //set done/undone list in first mounting
  useEffect(() => {
    dispatch(setActiveList());
    dispatch(setCompletedList());
  }, []);

  //update done/undone whenever item.done is changed
  useEffect(() => {
    dispatch(setActiveList());
    dispatch(setCompletedList());
  }, [list]);

  return (
    <div className="container">
      <Header />
      <Form {...{ showInput, showSearch, setQuery }} />
      {active === 0 ? (
        <TodoList {...{ query }} />
      ) : active === 1 ? (
        <ActiveList {...{ query }} />
      ) : (
        <CompletedList {...{ query }} />
      )}

      <Footer
        {...{
          showInput,
          showSearch,
          setShowInput,
          setShowSearch,
          active,
          setActive,
        }}
      />
    </div>
  );
};

export default Container;
