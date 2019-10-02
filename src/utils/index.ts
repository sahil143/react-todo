import { NormalizedTodos, ToDo, Filter } from "../types";
import { ACTIVE_FILTER, COMPLETED_FILTER, ALL_FILTER } from "../constants";

export const createUid = () : string => {
  var i, random;
  var uuid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16);
  }

  return uuid;
}

export const getTodos = (todos: NormalizedTodos): ToDo[] => {
  return Object.keys(todos).map(t => todos[t]);
}

export const FILTERS = [
  {id: ACTIVE_FILTER, text: 'Active'},
  {id: COMPLETED_FILTER, text: 'Completed'},
  {id: ALL_FILTER, text: 'All'}
];

export const getTodosBasedOnFilter = (todos: ToDo[], filter: string): ToDo[] => {
  switch(filter) {
    case ACTIVE_FILTER:
      return todos.filter(t => !t.completed);
    case COMPLETED_FILTER:
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
}

export const getNoOfActiveTodo = (todos: ToDo[]): number => {
  return todos.filter(t => !t.completed).length;
}
