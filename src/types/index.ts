export interface ToDo {
  id: string;
  text: string;
  completed: boolean;
}

export interface NormalizedTodos {
  [key: string]: ToDo;
}

export interface NormalizedState {
  todos: NormalizedTodos;
  activeFilter: string;
}

export interface Filter {
  id: string;
  text: string;
}

export interface TodoActionsType {
  type: string;
  data: string;
}
