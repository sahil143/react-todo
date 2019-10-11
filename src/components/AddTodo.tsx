import * as React from 'react';
import { ENTER_KEY, ADD_TODO_ACTION } from '../constants';
import { TodoContext } from '../TodoApp';

const AddTodo: React.FC = () => {
  const dipatchAction = React.useContext(TodoContext);
  const onEnterKey = (e: React.KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (e.keyCode !== ENTER_KEY || !value.trim()) return;
    dipatchAction({
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
