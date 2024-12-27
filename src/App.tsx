import { Box } from "@mui/material";
import Title from "./components/Title";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Box
      sx={{
        pt: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title />
      <TodoHeader />
      <TodoList />
    </Box>
  );
};

export default App;
