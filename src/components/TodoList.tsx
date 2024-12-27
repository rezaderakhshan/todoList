import { Container, Grid2 } from "@mui/material";
import Todo from "./Todo";
import { selectSortBy, selectTodos } from "../features/todo/todoSlice";
import { Ttodo } from "../types/types";
import { useAppSelector } from "../hooks/hooks";

const TodoList = () => {
  const todos = useAppSelector(selectTodos) || [];
  let todosDepnedsOnSortBy;
  const sortBy = useAppSelector(selectSortBy);
  if (sortBy === "all") {
    todosDepnedsOnSortBy = todos;
  }

  if (sortBy === "done") {
    todosDepnedsOnSortBy = todos?.filter((todo) => todo.isDone);
  }

  if (sortBy === "in progress") {
    todosDepnedsOnSortBy = todos?.filter((todo) => !todo.isDone);
  }

  return (
    <Container
      maxWidth={"xl"}
      sx={{
        paddingBlock: 2,
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: 10,
          bgcolor: "red",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "12px",
          bgcolor: "#3E1671",
        },
        scrollbarWidth: "thin",
        scrollbarColor: "#3E1671 transparent",
      }}
    >
      <Grid2 container columns={12} spacing={2} columnSpacing={2}>
        {todosDepnedsOnSortBy?.map((todo: Ttodo) => (
          <Grid2
            key={todo.todoLabel}
            size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
          >
            <Todo todo={todo} todos={todos} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default TodoList;
