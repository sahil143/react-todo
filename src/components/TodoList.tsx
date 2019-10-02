import * as React from "react";
import { ToDo } from "../types";

interface TodoListProps {
  todos: ToDo[];
  onDeleteTodo: (id: string) => void;
  onCompleteTask: (id: string) => void;
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
              onChange={e => onCompleteTask(todo.id)}
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
              onClick={e => onDeleteTodo(todo.id)}
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
