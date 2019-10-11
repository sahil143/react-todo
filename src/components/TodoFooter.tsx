import * as React from 'react';
import { FILTERS } from '../utils';
import { SET_ACTIVE_FILTER_ACTION, CLEAR_ALL_ACTION } from '../constants';
import { TodoContext } from '../TodoApp';

export interface TodoFooterProps {
  activeFilter: string;
  leftTodos: number;
}

const TodoFooter: React.FC<TodoFooterProps> = ({ activeFilter, leftTodos }) => {
  const dipatchAction = React.useContext(TodoContext);
  return (
    <footer className="d-flex justify-content-between">
      <span>{leftTodos} left</span>
      <div>
        {FILTERS.map((filter) => (
          <button
            type="button"
            className={`btn btn-light ${filter.id === activeFilter ? 'active' : ''}`}
            key={filter.id}
            onClick={(e) => dipatchAction({ type: SET_ACTIVE_FILTER_ACTION, data: filter.id })}
          >
            {filter.text}
          </button>
        ))}
      </div>
      <span
        className="btn btn-link"
        onClick={() => dipatchAction({ type: CLEAR_ALL_ACTION, data: '' })}
      >
        clear all
      </span>
    </footer>
  );
};

export default TodoFooter;
