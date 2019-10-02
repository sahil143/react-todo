import { createUid } from "../utils";
import { NormalizedTodos } from "../types";

const randomStrings = ['Learn React', 'Use Typescript with React', 'Have Fun!!', "Use emoji's", 'Look at memes'];

export const mockTodos = ((strings: string[]) => {
  const todos: NormalizedTodos = {};
  strings.forEach((str, index) => {
    const uid = createUid();
    todos[uid] = {
      id: uid,
      text: str,
      completed: false
    };
  });
  return todos;
})(randomStrings)