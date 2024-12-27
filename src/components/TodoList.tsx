import { Container, Grid2 } from "@mui/material";
import Todo from "./Todo";
import {
  selectIsoStringFilterDate,
  selectSortBy,
  selectTodos,
} from "../features/todo/todoSlice";
import { Ttodo } from "../types/types";
import { useAppSelector } from "../hooks/hooks";
import { useEffect, useState } from "react";
import EmptyTodoMessage from "./EmptyTodoMessage";

const TodoList = () => {
  const todos = useAppSelector(selectTodos) as Ttodo[];
  const sortBy = useAppSelector(selectSortBy);
  const date = useAppSelector(selectIsoStringFilterDate);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    const handleFilter = (
      todos: Ttodo[],
      sortBy: "done" | "in progress" | "all",
      date: string
    ) => {
      const filtered = filterTodos(todos, sortBy, date);
      setFilteredTodos(filtered);
    };
    handleFilter(todos, sortBy, date);
  }, [date, sortBy, todos.length, todos]);

  return (
    <Container
      maxWidth={"xl"}
      sx={{
        paddingBlock: 2,
      }}
    >
      {filteredTodos.length > 0 ? (
        <Grid2 container columns={12} spacing={2} columnSpacing={2}>
          {filteredTodos?.map((todo: Ttodo) => (
            <Grid2
              key={todo.todoLabel}
              size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
            >
              <Todo todo={todo} todos={todos} />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <EmptyTodoMessage />
      )}
    </Container>
  );
};

export default TodoList;

function filterTodos(
  todos: Ttodo[],
  sortBy: "done" | "in progress" | "all",
  date: string
) {
  return todos.filter((todo) => {
    const statusMatch =
      sortBy === "all" ||
      (todo.isDone && sortBy === "done") ||
      (!todo.isDone && sortBy === "in progress");

    const dateMatch = date
      ? todo.startTodoDate &&
        todo.startTodoDate.split("T")[0] === date.split("T")[0]
      : true;

    return statusMatch && dateMatch;
  });
}
