import { DateObject } from "react-multi-date-picker";

export type Ttodo = {
  todoLabel: string;
  isDone: boolean;
  id: number;
  startTodoDate: string | DateObject;
  endTodoDate: string | DateObject;
};

export type sortValue = "all" | "in progress" | "done";

export type todoInitialState = {
  todos: Ttodo[] | null;
  sortBy: sortValue;
};
