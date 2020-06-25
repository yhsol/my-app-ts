import React, { useState, useRef } from "react";

type InputT = {
  onSubmit: (form: { name: string; desc: string }) => void;
};

function RefSample({ onSubmit }: InputT) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    desc: "",
  });

  const { name, desc } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      desc: "",
    });
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} ref={inputRef} />
      <input name="desc" value={desc} onChange={onChange} />
      <button type="submit">submit</button>
    </form>
  );
}

export default RefSample;
