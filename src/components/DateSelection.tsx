import DatePicker, { DateObject } from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/colors/purple.css";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import { Box, Typography } from "@mui/material";
import { handleGetDate, handleSetToISOString } from "../utils/utils";
type DateSelectionProps = {
  label: string;
  value: DateObject | null;
  setValue: React.Dispatch<React.SetStateAction<DateObject | null>>;
  setIsoState: React.Dispatch<React.SetStateAction<string>>;
  id: string;
};
const DateSelection = ({
  label,
  value,
  setValue,
  setIsoState,
  id,
}: DateSelectionProps) => {
  const handleChange = (date: DateObject) => {
    setValue(date);
    const selectedDate = handleGetDate(date)!.toDate();
    setIsoState(handleSetToISOString(selectedDate));
  };

  return (
    <>
      <Box component={"label"} htmlFor={id}>
        <Typography>{label}</Typography>
      </Box>
      <DatePicker
        id={id}
        style={{ fontSize: "16px" }}
        className="purple bg-dark"
        value={value}
        onChange={handleChange}
        format="hh:mm &mdash; YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        plugins={[<TimePicker hideSeconds position="bottom" />]}
        required
      />
    </>
  );
};

export default DateSelection;
