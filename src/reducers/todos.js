import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.unshift({
        ...action.payload,
        id: state.length + 1,
        userId: state.length + 1,
      });
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    deleteTodo: (state, action) => {
      let todoListArr = [];
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        todoListArr = state.filter((todo) => todo.id !== action.payload);
      }
      return todoListArr
    },
    editTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    toggleTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
      }
    },
    setTodos: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodo, setTodos } = todosSlice.actions;

export default todosSlice.reducer;
