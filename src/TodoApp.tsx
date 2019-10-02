import * as React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import AddTodo from "./components/AddTodo";
import {
  createUid,
  getTodos,
  getTodosBasedOnFilter,
  getNoOfActiveTodo
} from "./utils";
import { ToDo, NormalizedTodos, NormalizedState, Filter } from "./types";
import { ALL_FILTER } from "./constants";
import { mockTodos } from "./mocks";

const TodoApp = () => {
  const [state, setState] = React.useState<NormalizedState>({
    todos: {...mockTodos},
    activeFilter: ALL_FILTER
  });
  const addNewTodo = (todo: string) => {
    const { todos } = state;
    const uid = createUid();
    todos[uid] = {
      id: uid,
      text: todo,
      completed: false
    };
    setState({ ...state, todos });
  };

  const completeTask = (id: string) => {
    const { todos } = state;
    const { completed } = todos[id];
    todos[id].completed = !completed;
    setState({ ...state, todos });
  };

  const deleteTask = (id: string) => {
    const { todos } = state;
    delete todos[id];
    setState({ ...state, todos });
  };

  const setActiveFilter = (filter: Filter) => {
    const activeFilter = filter.id;
    setState({ ...state, activeFilter });
  };

  const clearAllTodos = () => {
    setState({ todos: {}, activeFilter: ALL_FILTER });
  };
  const todos = getTodos(state.todos);
  const showTodo = getTodosBasedOnFilter(todos, state.activeFilter);
  const activeTodosNumber = getNoOfActiveTodo(todos);
  return (
    <div className="container p-3 w-50 border border-2">
      <TodoHeader />
      <AddTodo onNewTodo={addNewTodo} />
      <TodoList
        onCompleteTask={completeTask}
        onDeleteTodo={deleteTask}
        todos={showTodo}
      />
      <TodoFooter
        activeFilter={state.activeFilter}
        leftTodos={activeTodosNumber}
        onActiveFilter={setActiveFilter}
        onClearAll={clearAllTodos}
      />
    </div>
  );
};

export default TodoApp;
