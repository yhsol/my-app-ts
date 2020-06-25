import React, { useReducer } from "react";
import countReducer from "./module/Counter2";

function Counter2() {
  const [count, countDispatch] = useReducer(countReducer, 0);
  const onIncrease = () => countDispatch({ type: "INCREASE" });
  const onDecrease = () => countDispatch({ type: "DECREASE" });
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter2;
