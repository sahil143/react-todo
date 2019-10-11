import * as React from "react";
import { ENTER_KEY, ADD_TODO_ACTION } from "../constants";
import { TodoActionsType } from "../types";

interface AddTodoProps {
  onNewTodo: React.Dispatch<TodoActionsType>;
}

const AddTodo: React.FC<AddTodoProps> = ({ onNewTodo }) => {
  const onEnterKey = (e: React.KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (e.keyCode !== ENTER_KEY || !value.trim()) return;
    onNewTodo({
      type: ADD_TODO_ACTION,
      data: value,
    });
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
