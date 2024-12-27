import { useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { type Ttodo } from "../types/types";
import { useEditTask } from "../hooks/hooks";
import EditTask from "./EditTask";
import TodoActions from "./TodoActions";
import TodoContent from "./TodoContent";

type TodoProps = {
  todo: Ttodo;
  todos: Ttodo[];
};

const Todo = ({ todo, todos }: TodoProps) => {
  const { id, todoLabel, isDone, startTodoDate, endTodoDate } = todo;

  const theme = useTheme();
  const isLaptopDevice = useMediaQuery(theme.breakpoints.up("lg"));
  const isTabletDevice = useMediaQuery(theme.breakpoints.down("md"));
  const {
    handleConfirmEditTask,
    handleChangeEditTask,
    handleCloseEditTask,
    isEditing,
    handleChangeEditStatus,
    editValue,
    error,
  } = useEditTask({ todos, todo, id, todoLabel });

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
      {!isEditing && (
        <TodoActions
          id={id}
          todos={todos}
          isDone={isDone}
          handleChangeEditStatus={handleChangeEditStatus}
        />
      )}
      <Box sx={{ paddingInline: 2 }}>
        {!isEditing ? (
          <TodoContent
            isDone={isDone}
            todoLabel={todoLabel}
            startTodoDate={startTodoDate}
            endTodoDate={endTodoDate}
          />
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
