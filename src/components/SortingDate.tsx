import { useEffect, useState } from "react";
import { DateObject } from "react-multi-date-picker";
import DateSelection from "./DateSelection";
import { useAppDispatch } from "../hooks/hooks";
import { setIsoStateFilterDate } from "../features/todo/todoSlice";
import { Box } from "@mui/material";

const SortingDate = () => {
  const dispatch = useAppDispatch();
  const [sortingDate, setSortingDate] = useState<DateObject | null>(null);
  const [isoSortingDate, setIsoSortingDate] = useState("");

  useEffect(() => {
    dispatch(setIsoStateFilterDate(isoSortingDate));
  }, [isoSortingDate, dispatch]);
  return (
    <Box>
      <DateSelection
        label="فیلتر براساس تاریخ"
        value={sortingDate}
        setValue={setSortingDate}
        setIsoState={setIsoSortingDate}
      />
    </Box>
  );
};

export default SortingDate;
