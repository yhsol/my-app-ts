import React, { useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" };

function countReducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("counter reducer action error");
  }
}

export default countReducer;
