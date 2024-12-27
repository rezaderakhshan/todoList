import { Box, Typography } from "@mui/material";

const TodoDateTime = ({ iso }: { iso: string }) => {
  const persianDateTime = new Date(iso)
    .toLocaleDateString("fa", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(",", "-")
    .split("-");

  const persianDateTimeCorrectFormat = `${
    persianDateTime[1]
  } ⌚ ${persianDateTime[0].trim()}`;

  return (
    <Box>
      <Typography>{persianDateTimeCorrectFormat}</Typography>
    </Box>
  );
};

export default TodoDateTime;
