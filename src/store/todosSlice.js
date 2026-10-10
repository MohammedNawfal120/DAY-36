import { createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 'demo-1', text: 'Learn Redux Toolkit', completed: true },
    { id: 'demo-2', text: 'Create a counter slice', completed: false },
    { id: 'demo-3', text: 'Build a todo list', completed: false }
  ],
  reducers: {
    addTodo: {
      reducer: (state, action) => { state.push(action.payload); },
      prepare: (text) => ({ payload: { id: nanoid(), text, completed: false } })
    },
    toggleTodo: (state, action) => {
      const todo = state.find((item) => item.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;