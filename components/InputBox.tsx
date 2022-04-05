import React from 'react';
import { Todo } from '../interface';

interface Props {
  inputText: Todo;
  setInputText: React.Dispatch<React.SetStateAction<Todo>>;
}

//Input text for add new item actions

const InputBox = (props: Props) => {
  const { inputText, setInputText } = props;
  return (
    <input
      className="form-control"
      type="text"
      placeholder="Add New"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    />
  );
};

export default InputBox;
