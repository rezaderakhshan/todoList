export type Ttodo = {
  todoLabel: string;
  isDone: boolean;
  id: number;
  startTodoDate: string;
  endTodoDate: string;
};

export type sortValue = "all" | "in progress" | "done";

export type todoInitialState = {
  todos: Ttodo[] | null;
  sortBy: sortValue;
};
