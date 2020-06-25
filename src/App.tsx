import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./hooks/useState/Counter";
import Input from "./hooks/useState/Input";
import ReducerSample from "./hooks/useReducer/ReducerSample";
import RefSample from "./hooks/useRef/RefSample";
import DataFetching from "./hooks/dataFetching/DataFetching";

function App() {
  const onSubmit = (form: { name: string; desc: string }) => {
    console.log(form);
  };
  return (
    <div>
      <DataFetching />
    </div>
  );
}

export default App;
