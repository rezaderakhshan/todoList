import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { DateObject } from "react-multi-date-picker";
import DateSelection from "./DateSelection";
import { useAppDispatch } from "../hooks/hooks";
import { setIsoStateFilterDate } from "../features/todo/todoSlice";

const SortingDate = () => {
  const dispatch = useAppDispatch();
  const [sortingDate, setSortingDate] = useState<DateObject | null>(null);
  const [isoSortingDate, setIsoSortingDate] = useState("");
  const resetFilterDate = () => {
    setIsoSortingDate("");
    setSortingDate(null);
  };
  useEffect(() => {
    dispatch(setIsoStateFilterDate(isoSortingDate));
  }, [isoSortingDate, dispatch]);
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <DateSelection
        label="فیلتر براساس تاریخ"
        value={sortingDate}
        setValue={setSortingDate}
        setIsoState={setIsoSortingDate}
        id="filter"
      />
      {isoSortingDate.length > 0 && (
        <IconButton
          sx={{ position: "absolute", bottom: -40, left: 0 }}
          onClick={resetFilterDate}
        >
          <ClearIcon color="primary" />
        </IconButton>
      )}
    </Box>
  );
};

export default SortingDate;
