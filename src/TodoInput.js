import React, { useState } from "react";
import Dates from "./Dates";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Todo"
      />
      <Dates />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default TodoInput;
