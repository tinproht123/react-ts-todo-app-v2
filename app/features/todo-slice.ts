import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../interface';

interface TodoState {
  list: Todo[]; //main list
  completedList: Todo[]; //list for done item
  activeList: Todo[]; //list for undone item
}

const initialState: TodoState = {
  list: [
    {
      id: 1,
      text: 'Learn Javascript',
      done: false,
    },
    {
      id: 2,
      text: 'Learn React',
      done: false,
    },
    {
      id: 3,
      text: 'Learn Redux',
      done: false,
    },
  ],
  completedList: [],
  activeList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    //add new todo things in list
    addItem: (state, action: PayloadAction<Todo>) => {
      const newItem = {
        id: new Date().getTime().toString(),
        text: action.payload.text,
        done: false,
      };
      state.list.push(newItem);
    },

    //set done/undone for item
    toggleCheck: (state, action: PayloadAction<Todo>) => {
      const checkItem = state.list.find(
        (item: Todo) => item.id === action.payload.id
      );
      const index = state.list.indexOf(checkItem);
      state.list.splice(index, 1);
      checkItem.done = action.payload.done;
      state.list.splice(index, 0, checkItem);
    },

    //create new list for undone item
    setActiveList: (state) => {
      state.activeList = state.list.filter((item) => !item.done);
    },

    //create new list for done item
    setCompletedList: (state) => {
      state.completedList = state.list.filter((item) => item.done);
    },

    //remove item from list
    removeItem: (state, action: PayloadAction<Todo>) => {
      const id = action.payload.id;
      state.list = state.list.filter((item) => item.id !== id);
    },
  },
});

export const {
  addItem,
  toggleCheck,
  setActiveList,
  setCompletedList,
  removeItem,
} = todoSlice.actions;
export default todoSlice.reducer;
