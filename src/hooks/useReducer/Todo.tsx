import React from "react";
import { v4 as uuidv4 } from "uuid";

type State = {
  task: string;
  id: string;
  complete: boolean;
};

type Action =
  | { type: "DO_TODO"; task: string; id: string; complete: boolean }
  | { type: "UNDO_TODO"; task: string; id: string; complete: boolean }
  | { type: "ADD_TODO"; task: string; id: string; complete: boolean };

const todoReducer = (state: State[], action: Action) => {
  switch (action.type) {
    case "DO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "UNDO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });
    default:
      throw new Error();
  }
};

function Todo() {
  return <div></div>;
}

export default Todo;
