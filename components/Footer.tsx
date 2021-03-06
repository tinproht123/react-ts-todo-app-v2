import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hook';

interface Props {
  showInput: boolean;
  showSearch: boolean;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const choiceBtns = [{ text: 'all' }, { text: 'active' }, { text: 'completed' }];

const Footer = (props: Props) => {
  const dispatch = useAppDispatch();
  const {
    showInput,
    showSearch,
    setShowInput,
    setShowSearch,
    active,
    setActive,
  } = props;

  const state = useAppSelector((state) => state.todo);

  return (
    <footer className="footer">
      <div className="footer-left">
        <i
          className={`fa-solid fa-plus ${showInput && 'active'}`}
          onClick={() => {
            setShowInput((prev) => !prev);
            setShowSearch((prev) => (prev = false));
          }}
        ></i>
        <i
          className={`fa-solid fa-search ${showSearch && 'active'}`}
          onClick={() => {
            setShowSearch((prev) => !prev);
            setShowInput((prev) => (prev = false));
          }}
        ></i>
      </div>
      <div className="footer-right">
        {active === 0 ? (
          <p>
            {state.list.length} {state.list.length > 1 ? 'items' : 'item'} left
          </p>
        ) : active === 1 ? (
          <p>
            {state.activeList.length}{' '}
            {state.activeList.length > 1 ? 'items' : 'item'} left
          </p>
        ) : (
          <p>
            {state.completedList.length}{' '}
            {state.completedList.length > 1 ? 'items' : 'item'} left
          </p>
        )}
        <div className="choice-btns">
          {choiceBtns.map((btn, index) => (
            <button
              className={`${active === index && 'active'}`}
              key={index}
              onClick={() => setActive(index)}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
