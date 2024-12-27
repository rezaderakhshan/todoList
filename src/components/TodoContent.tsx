import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import TodoDateTime from "./TodoDateTime";

type TodoContentProps = {
  isDone: boolean;
  todoLabel: string;
  startTodoDate: string;
  endTodoDate: string;
};
const TodoContent = ({
  isDone,
  todoLabel,
  startTodoDate,
  endTodoDate,
}: TodoContentProps) => {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
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
        <TodoDateTime iso={startTodoDate} />
        <TodoDateTime iso={endTodoDate} />
      </Box>
    </Box>
  );
};

export default TodoContent;
