import React, { useState } from "react";

type InputT = {
  onSubmit: (form: { name: string; desc: string }) => void;
};

function Input({ onSubmit }: InputT) {
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
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="desc" value={desc} onChange={onChange} />
      <button type="submit">submit</button>
    </form>
  );
}

export default Input;
