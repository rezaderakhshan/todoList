import { useEffect } from "react";
import {
  Box,
  Checkbox,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { type Ttodo } from "../types/types";
import { finishedTodo, removeTodo } from "../features/todo/todoSlice";
import { useAppDispatch, useEditTask } from "../hooks/hooks";
import EditTask from "./EditTask";
import TodoDateTime from "./TodoDateTime";

type TodoProps = {
  todo: Ttodo;
  todos: Ttodo[];
};

const Todo = ({ todo, todos }: TodoProps) => {
  const { id, todoLabel, isDone, startTodoDate, endTodoDate } = todo;

  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const isLaptopDevice = useMediaQuery(theme.breakpoints.up("lg"));
  const isTabletDevice = useMediaQuery(theme.breakpoints.down("md"));
  const {
    handleConfirmEditTask,
    handleChangeEditTask,
    handleCloseEditTask,
    isEditing,
    handleChangeEditStatue,
    editValue,
    error,
  } = useEditTask({ todos, todo, id, todoLabel });

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
    const filteredTodos = todos?.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  const handleFinishedTodo = (id: number) => {
    dispatch(finishedTodo(id));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Box
      component={"div"}
      sx={[
        {
          bgcolor: "#15101C",
          paddingBlock: isEditing ? 1 : 4,
          color: "#fff",
          display: "flex",
          gap: 3,
          alignItems: "center",
        },
        isLaptopDevice && { flexDirection: "column-reverse" },
        isTabletDevice && {
          flexDirection: "column-reverse",
          alignItems: "flex-start",
        },
      ]}
    >
      {!isEditing ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={() => handleRemoveTodo(id)}>
            <Delete color="primary" />
          </IconButton>
          <IconButton onClick={handleChangeEditStatue}>
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
      ) : null}
      <Box sx={{ paddingInline: 2 }}>
        {!isEditing ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={[
                {
                  textDecoration: isDone ? "line-through" : "unset",
                  lineBreak: "anywhere",
                },
                isMobileDevice && { fontSize: 14 },
              ]}
            >
              {todoLabel}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TodoDateTime iso={startTodoDate as string} />
              <TodoDateTime iso={endTodoDate as string} />
            </Box>
          </Box>
        ) : (
          <EditTask
            editValue={editValue}
            handleCloseEditTask={handleCloseEditTask}
            handleChangeEditTask={handleChangeEditTask}
            handleConfirmEditTask={handleConfirmEditTask}
            error={error}
          />
        )}
      </Box>
    </Box>
  );
};

export default Todo;
