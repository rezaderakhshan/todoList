import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { selectSortBy, sortingTodo } from "../features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { sortValue } from "../types/types";
const sortingValues = [
  { label: "همه", value: "all" },
  { label: "انجام شده", value: "done" },
  { label: "در حال انجام", value: "in progress" },
];
const Sorting = () => {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const value = useAppSelector(selectSortBy);
  const dispatch = useAppDispatch();
  const handleSortingChange = (e: SelectChangeEvent<sortValue>): void => {
    const sortingValue = e.target.value as sortValue;
    dispatch(sortingTodo(sortingValue));
  };

  return (
    <FormControl
      sx={[
        { m: 1, minWidth: 185, ml: "auto" },
        isMobileDevice && { mr: "auto", ml: "unset" },
      ]}
      size="small"
    >
      <InputLabel id="demo-select-small-label">مرتب سازی براساس</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label="مرتب سازی براساس"
        onChange={handleSortingChange}
        sx={{
          "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
            color: "#fff !important",
            fontSize: 16,
          },
          "&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#3E1671",
            },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#3E1671" },
          "&.Mui-focused": { border: "unset" },
        }}
      >
        {sortingValues.map((menu) => (
          <MenuItem key={menu.value} value={menu.value}>
            {menu.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Sorting;
