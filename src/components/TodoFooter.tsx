import * as React from "react";
import { FILTERS } from "../utils";
import { TodoActionsType } from "../types";
import { SET_ACTIVE_FILTER_ACTION, CLEAR_ALL_ACTION } from "../constants";

export interface TodoFooterProps {
  activeFilter: string;
  leftTodos: number;
  onActiveFilter: React.Dispatch<TodoActionsType>;
  onClearAll: React.Dispatch<TodoActionsType>;
}

const TodoFooter: React.FC<TodoFooterProps> = ({
  activeFilter,
  onActiveFilter,
  leftTodos,
  onClearAll
}) => {
  return (
    <footer className="d-flex justify-content-between">
      <span>{leftTodos} left</span>
      <div>
        {FILTERS.map(filter => (
          <button
            type="button"
            className={`btn btn-light ${
              filter.id === activeFilter ? "active" : ""
            }`}
            key={filter.id}
            onClick={e => onActiveFilter({ type: SET_ACTIVE_FILTER_ACTION, data: filter.id })}
          >
            {filter.text}
          </button>
        ))}
      </div>
      <span className="btn btn-link" onClick={() => onClearAll({ type: CLEAR_ALL_ACTION,  data: '' })}>clear all</span>
    </footer>
  );
};

export default TodoFooter;
