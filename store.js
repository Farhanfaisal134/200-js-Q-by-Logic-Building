import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: "all",
};

// Slice for todos
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.value = action.payload.value;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Save todos to local storage on every update
const saveTodosMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("todos", JSON.stringify(store.getState().todos.todos));
  return result;
};

// Store configuration
export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveTodosMiddleware),
});

// Export actions
export const { addTodo, deleteTodo, toggleComplete, updateTodo, setFilter } =
  todoSlice.actions;
