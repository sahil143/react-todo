import * as React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import AddTodo from './components/AddTodo';
import { getTodos, getTodosBasedOnFilter, getNoOfActiveTodo, TodoReducer } from './utils';
import { TodoActionsType } from './types';
import { ALL_FILTER } from './constants';
import { mockTodos } from './mocks';

export const TodoContext = React.createContext((value: TodoActionsType) => {});

const TodoApp = () => {
  const [state, dispatch] = React.useReducer(TodoReducer, {
    todos: { ...mockTodos },
    activeFilter: ALL_FILTER,
  });
  const todos = getTodos(state.todos);
  const showTodo = getTodosBasedOnFilter(todos, state.activeFilter);
  const activeTodosNumber = getNoOfActiveTodo(todos);
  return (
    <div className="container p-3 w-50 border border-2">
      <TodoContext.Provider value={dispatch}>
        <TodoHeader />
        <AddTodo />
        <TodoList todos={showTodo} />
        <TodoFooter activeFilter={state.activeFilter} leftTodos={activeTodosNumber} />
      </TodoContext.Provider>
    </div>
  );
};

export default TodoApp;
