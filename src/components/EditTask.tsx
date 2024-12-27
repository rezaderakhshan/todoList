import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { Box, IconButton, Input, Typography } from "@mui/material";
type EditTaskProps = {
  editValue: string;
  error: string;
  handleCloseEditTask: () => void;
  handleChangeEditTask: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleConfirmEditTask: () => void;
};
const EditTask = ({
  editValue,
  error,
  handleCloseEditTask,
  handleChangeEditTask,
  handleConfirmEditTask,
}: EditTaskProps) => {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Input
          multiline
          maxRows={2}
          sx={[
            {
              border: "1px solid #3E1671",
              borderRadius: 2,
              color: "secondary.main",
              padding: "6.7px 15px",
              fontSize: 20,
              width: 1,
              maxWidth: 381,
              "& textarea:first-of-type": { overflow: "hidden" },
              "&.Mui-focused::after": { display: "none" },
            },
          ]}
          value={editValue}
          onChange={handleChangeEditTask}
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
      <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
        <IconButton onClick={handleCloseEditTask}>
          <ClearIcon color="primary" />
        </IconButton>
        <IconButton onClick={handleConfirmEditTask}>
          <CheckIcon color="primary" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default EditTask;
