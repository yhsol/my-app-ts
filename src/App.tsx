import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./hooks/useState/Counter";
import Input from "./hooks/useState/Input";
import ReducerSample from "./hooks/useReducer/ReducerSample";
import RefSample from "./hooks/useRef/RefSample";

function App() {
  const onSubmit = (form: { name: string; desc: string }) => {
    console.log(form);
  };
  return (
    <div>
      <Counter />
      <Input onSubmit={onSubmit} />
      <ReducerSample />
      <RefSample onSubmit={onSubmit} />
    </div>
  );
}

export default App;
