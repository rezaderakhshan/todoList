import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Title = () => {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h1"
        sx={[{ textAlign: "center" }, isMobileDevice && { fontSize: 40 }]}
      >
        فهرست انجام کار
      </Typography>
    </Box>
  );
};

export default Title;
