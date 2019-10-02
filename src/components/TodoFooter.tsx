import * as React from "react";
import { FILTERS } from "../utils";

export interface TodoFooterProps {
  activeFilter: string;
  leftTodos: number;
  onActiveFilter: (filter: { id: string; text: string }) => void;
  onClearAll: () => void;
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
            onClick={e => onActiveFilter(filter)}
          >
            {filter.text}
          </button>
        ))}
      </div>
      <span className="btn btn-link" onClick={onClearAll}>clear all</span>
    </footer>
  );
};

export default TodoFooter;
