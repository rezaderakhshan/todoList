import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useState } from "react";
import { addTodo, selectTodos, updateTodo } from "../features/todo/todoSlice";
import { Ttodo } from "../types/types";
import { DateObject } from "react-multi-date-picker";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useHandlingAddTodo = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [startTodoDate, setStartTodoDate] = useState<DateObject | string>("");
  const [endTodoDate, setEndTodoDate] = useState<DateObject | string>("");
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);

  const handleGetDate = (
    dateObject: DateObject | string | null
  ): DateObject | string => {
    if (dateObject instanceof DateObject) {
      return dateObject ? dateObject.toDate().toISOString() : "";
    }
    return "";
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
    setError("");
  };
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) {
      setError("فیلد را پرکنید!");
      return;
    }
    dispatch(
      addTodo({
        value,
        startTodoDate: handleGetDate(startTodoDate),
        endTodoDate: handleGetDate(endTodoDate),
      })
    );
    if (todos?.length) {
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...todos,
          {
            todoLabel: value,
            isDone: false,
            id: Math.random() * 1100,
            startTodoDate: handleGetDate(startTodoDate),
            endTodoDate: handleGetDate(endTodoDate),
          },
        ])
      );
    }
    setValue("");
    setEndTodoDate("");
    setStartTodoDate("");
  };

  return {
    handleAddTodo,
    handleInputChange,
    error,
    value,
    startTodoDate,
    setStartTodoDate,
    endTodoDate,
    setEndTodoDate,
  };
};

type UseEditTaskProps = {
  todos: Ttodo[];
  todo: Ttodo;
  todoLabel: string;
  id: number;
};

export const useEditTask = ({
  todos,
  todo,
  todoLabel,
  id,
}: UseEditTaskProps) => {
  const [error, setError] = useState("");
  const [editValue, setEditValue] = useState(todoLabel);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  const handleChangeEditStatue = () => {
    setIsEditing((prev) => !prev);
  };

  const handleCloseEditTask = () => {
    setIsEditing((prev: boolean) => !prev);
    setEditValue(todoLabel);
    setError("");
  };

  const handleChangeEditTask = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditValue(e.target.value);
    setError("");
  };

  const handleConfirmEditTask = () => {
    if (!editValue.trim()) {
      setError("فیلد را پرکنید!");
      return;
    }
    const newTodos = todos.filter((todoo: Ttodo) => todoo.id !== id);
    localStorage.setItem(
      "todos",
      JSON.stringify([...newTodos, { ...todo, todoLabel: editValue }])
    );

    dispatch(updateTodo([...newTodos, { ...todo, todoLabel: editValue }]));
    setIsEditing((prev: boolean) => !prev);
  };

  return {
    handleConfirmEditTask,
    handleChangeEditTask,
    handleCloseEditTask,
    isEditing,
    handleChangeEditStatue,
    editValue,
    error,
  };
};
