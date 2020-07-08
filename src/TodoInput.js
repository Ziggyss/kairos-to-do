import React, { useState } from "react";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState(new Date());

  const onDateChange = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({
      text: value,
      isComplete: false,
      date: date.toLocaleDateString("en-GB"),
    });
    setValue("");
    console.log(date);
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
      <DatePicker
        selected={date}
        onChange={onDateChange}
        value={date}
        dateFormat="dd/MM/yy"
      />
      <button
        className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal hover:text-white hover:bg-teal"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default TodoInput;
