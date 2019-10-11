import * as React from "react";
import { ToDo, TodoActionsType } from "../types";
import { COMPLETE_TODO_ACTION, DELETE_TODO_ACTION } from "../constants";

interface TodoListProps {
  todos: ToDo[];
  onDeleteTodo: React.Dispatch<TodoActionsType>
  onCompleteTask: React.Dispatch<TodoActionsType>;
}

const completedStyles = {
  color: 'grey',
  textDecoration: "line-through",
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDeleteTodo,
  onCompleteTask
}) => {
  return (
    <ul className="list-group m-3">
      {todos.map(todo => {
        return (
          <li key={todo.id} className="list-group-item">
            <input
              className="m-3"
              type="checkbox"
              checked={todo.completed}
              onChange={e => onCompleteTask({type: COMPLETE_TODO_ACTION, data: todo.id})}
            />
            <span
              className="m-3"
              style={todo.completed ? completedStyles : {}}
            >
              {todo.text}
            </span>
            <button
              className="btn btn-light float-right"
              type="button"
              onClick={e => onDeleteTodo({type: DELETE_TODO_ACTION, data: todo.id})}
            >
              x
            </button>
            <br />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
