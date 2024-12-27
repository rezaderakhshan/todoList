import { DateObject } from "react-multi-date-picker";

export const handleGetDate = (
  dateObject: DateObject | null
): DateObject | null => {
  if (dateObject instanceof DateObject) {
    return dateObject;
  } else {
    return null;
  }
};

export const handleSetToISOString = (date: Date): string => {
  return date.toISOString();
};
