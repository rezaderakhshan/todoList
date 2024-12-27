import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  type sortValue,
  type Ttodo,
  type todoInitialState,
} from "../../types/types";
import { RootState } from "../../store";
const savedTodos = localStorage.getItem("todos");
const initialState: todoInitialState = {
  todos: savedTodos ? JSON.parse(savedTodos) : [],
  sortBy: "all",
  isoStringFilterDate: "",
};

type TAddTodo = {
  value: string;
  startTodoDate: string;
  endTodoDate: string;
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TAddTodo>) => {
      state.todos?.push({
        todoLabel: action.payload.value,
        isDone: false,
        id: Math.random() * 1110,
        startTodoDate: action.payload.startTodoDate,
        endTodoDate: action.payload.endTodoDate,
      });
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos!.filter((todo) => todo.id !== action.payload);
    },

    finishedTodo: (state, action: PayloadAction<number>) => {
      state.todos!.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
      });
    },

    sortingTodo: (state, action: PayloadAction<sortValue>) => {
      state.sortBy = action.payload;
    },

    updateTodo: (state, action: PayloadAction<Ttodo[]>) => {
      state.todos = action.payload;
    },

    setIsoStateFilterDate: (state, action: PayloadAction<string>) => {
      state.isoStringFilterDate = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  finishedTodo,
  sortingTodo,
  updateTodo,
  setIsoStateFilterDate,
} = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todo.todos;
export const selectSortBy = (state: RootState) => state.todo.sortBy;
export const selectIsoStringFilterDate = (state: RootState) =>
  state.todo.isoStringFilterDate;
export default todoSlice.reducer;
