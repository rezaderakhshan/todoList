import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Input,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useHandlingAddTodo } from "../hooks/hooks";
import DateSelection from "./DateSelection";

const TodoForm = () => {
  const {
    handleAddTodo,
    handleInputChange,
    error,
    value,
    startTodoDate,
    setStartTodoDate,
    endTodoDate,
    setEndTodoDate,
  } = useHandlingAddTodo();

  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      component={"form"}
      onSubmit={handleAddTodo}
      sx={{ display: "flex", alignItems: "center", gap: 2 }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Box sx={{ position: "relative" }}>
          <Input
            placeholder="افزودن کار جدید"
            multiline
            maxRows={2}
            sx={[
              {
                border: "1px solid #3E1671",
                borderRadius: 2,
                color: "secondary.main",
                padding: "11px 15px",
                fontSize: 20,
                width: 1,
                maxWidth: 381,
                overflow: "hidden",
                "& textarea:first-of-type": { overflow: "hidden" },
                "&.Mui-focused::after": { display: "none" },
              },
              isMobileDevice && { height: "unset", paddingBlock: "4px" },
            ]}
            value={value}
            onChange={handleInputChange}
          />
          {error && (
            <Typography
              variant="body2"
              sx={{ position: "absolute", left: 4, bottom: -31 }}
            >
              {error}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <DateSelection
            value={startTodoDate}
            setValue={setStartTodoDate}
            label="شروع"
          />
          <DateSelection
            value={endTodoDate}
            setValue={setEndTodoDate}
            label="پایان"
          />
        </Box>
      </Box>
      <IconButton
        type="submit"
        size="large"
        sx={[
          {
            alignSelf: "flex-end",
            bgcolor: "primary.main",
            borderRadius: 2,
            width: 50,
            height: 50,
            "&:hover": { bgcolor: "primary.main" },
          },
          isMobileDevice && { width: 40, height: 40 },
        ]}
      >
        <AddIcon color="secondary" />
      </IconButton>
    </Box>
  );
};

export default TodoForm;
