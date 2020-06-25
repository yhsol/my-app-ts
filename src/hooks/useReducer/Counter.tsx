import React, { useReducer } from "react";
import { errorMonitor } from "events";

type State = { count: number };
type Action =
  | { type: "INCREASE" }
  | { type: "DECREASE" }
  | { type: "CALC"; by: number };

const counterReducer = (state: number, action: Action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "CALC":
      return state + action.by;
    default:
      throw new Error();
  }
};

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleIncrease = () => {
    dispatch({ type: "CALC", by: 1 });
  };
  const handleDecrease = () => {
    dispatch({ type: "CALC", by: -1 });
  };

  return (
    <div>
      <h1>Counter with useReducer</h1>
      <p>Count: {count}</p>
      <button type="button" onClick={handleIncrease}>
        +
      </button>
      <button type="button" onClick={handleDecrease}>
        -
      </button>
    </div>
  );
}

export default Counter;
