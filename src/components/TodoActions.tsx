import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Checkbox } from "@mui/material";
import { useAppDispatch } from "../hooks/hooks";
import { finishedTodo, removeTodo } from "../features/todo/todoSlice";
import { Ttodo } from "../types/types";
type TodoActionsProps = {
  id: number;
  todos: Ttodo[];
  isDone: boolean;
  handleChangeEditStatus: () => void;
};

const TodoActions = ({
  id,
  todos,
  isDone,
  handleChangeEditStatus,
}: TodoActionsProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
    const filteredTodos = todos?.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  const handleFinishedTodo = (id: number) => {
    dispatch(finishedTodo(id));
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <IconButton onClick={() => handleRemoveTodo(id)}>
        <Delete color="primary" />
      </IconButton>
      <IconButton onClick={handleChangeEditStatus}>
        <Edit color="primary" />
      </IconButton>
      <Box>
        <Checkbox
          checked={isDone}
          onChange={() => handleFinishedTodo(id)}
          color="primary"
          sx={{ "& svg": { fill: "#9E78CF" } }}
        />
      </Box>
    </Box>
  );
};

export default TodoActions;
