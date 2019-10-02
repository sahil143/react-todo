import * as React from "react";
import { ENTER_KEY } from "../constants";
import { ToDo } from "../types";

interface AddTodoProps {
  onNewTodo: (todo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onNewTodo }) => {
  const onEnterKey = (e: React.KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (e.keyCode !== ENTER_KEY || !value.trim()) return;
    onNewTodo(value);
    (e.currentTarget as HTMLInputElement).value = '';
  };

  return (
    <input
      className="form-control form-control-lg"
      type="text"
      onKeyDown={onEnterKey}
      placeholder="Write a Task"
      autoFocus
    />
  );
};

export default AddTodo;
