import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo-slice';
export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
