import React, { useState } from 'react';
import InputBox from './InputBox';
import SearchBox from './SearchBox';
import { addItem } from '../app/features/todo-slice';
import { useAppDispatch } from '../app/hook';
import { Todo } from '../interface';

interface Props {
  showInput: boolean;
  showSearch: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Form = (props: Props) => {
  const [inputText, setInputText] = useState<Todo>('');
  const { showInput, showSearch, setQuery } = props;

  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ text: inputText }));
    setInputText('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {showInput && <InputBox {...{ inputText, setInputText }} />}
      {showSearch && <SearchBox {...{ setQuery }} />}
    </form>
  );
};

export default Form;
