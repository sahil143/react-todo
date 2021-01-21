import { NormalizedTodos, ToDo, NormalizedState, TodoActionsType } from '../types';
import {
  ACTIVE_FILTER,
  COMPLETED_FILTER,
  ALL_FILTER,
  ADD_TODO_ACTION,
  COMPLETE_TODO_ACTION,
  DELETE_TODO_ACTION,
  SET_ACTIVE_FILTER_ACTION,
  CLEAR_ALL_ACTION,
} from '../constants';

export const createUid = (): string => {
  var i, random;
  var uuid = '';

  for (i = 0; i < 32; i++) {
    random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }

  return uuid;
};

export const getTodos = (todos: NormalizedTodos): ToDo[] => {
  return Object.keys(todos).map((t) => todos[t]);
};

export const FILTERS = [
  { id: ACTIVE_FILTER, text: 'Active' },
  { id: COMPLETED_FILTER, text: 'Completed' },
  { id: ALL_FILTER, text: 'All' },
];

export const getTodosBasedOnFilter = (todos: ToDo[], filter: string): ToDo[] => {
  switch (filter) {
    case ACTIVE_FILTER:
      return todos.filter((t) => !t.completed);
    case COMPLETED_FILTER:
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
};

export const getNoOfActiveTodo = (todos: ToDo[]): number => {
  return todos.filter((t) => !t.completed).length;
};

const addNewTodo = (todo: string, state: NormalizedState): NormalizedState => {
  const { todos } = state;
  const uid = createUid();
  todos[uid] = {
    id: uid,
    text: todo,
    completed: false,
  };
  return { ...state, todos };
};

const completeTask = (id: string, state: NormalizedState): NormalizedState => {
  const { todos } = state;
  const { completed } = todos[id];
  todos[id].completed = !completed;
  return { ...state, todos };
};

const deleteTask = (id: string, state: NormalizedState) => {
  const { todos } = state;
  delete todos[id];
  return { ...state, todos };
};

export const TodoReducer = (state: NormalizedState, action: TodoActionsType) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return addNewTodo(action.data, state);
    case COMPLETE_TODO_ACTION:
      return completeTask(action.data, state);
    case DELETE_TODO_ACTION:
      return deleteTask(action.data, state);
    case SET_ACTIVE_FILTER_ACTION:
      return { ...state, activeFilter: action.data };
    case CLEAR_ALL_ACTION:
      return { todos: {}, activeFilter: ALL_FILTER };
    default:
      return { ...state };
  }
};
