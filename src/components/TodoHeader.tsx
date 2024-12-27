import { Container, Grid2 } from "@mui/material";

import Sorting from "./Sorting";
import TodoForm from "./TodoForm";

const TodoHeader = () => {
  return (
    <Container
      maxWidth={"xl"}
      sx={{ mt: 3, pb: 5, borderBottom: "1px solid #3E1671" }}
    >
      <Grid2
        container
        rowSpacing={3}
        columns={12}
        sx={{ alignItems: "center" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TodoForm />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
          <Sorting />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default TodoHeader;
