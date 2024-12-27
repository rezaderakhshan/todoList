import { Box, Typography } from "@mui/material";

const EmptyTodoMessage = () => {
  return (
    <Box sx={{ width: 1, height: 1 }}>
      <Typography sx={{ textAlign: "center" }} variant="h2">
        چیزی برای نمایش وجود ندارد!
      </Typography>
    </Box>
  );
};

export default EmptyTodoMessage;
