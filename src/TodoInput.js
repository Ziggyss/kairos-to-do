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
    <form className="flex align-center justify-evenly py-3 items-center">
      <input
        type="text"
        className="input shadow appearance-none border rounded w-9/12 py-2 px-3 mr-4 text-grey-darker"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Todo"
      />
      <p className="w-1/12 align-center">Due by: </p>
      <DatePicker
        className="shadow appearance-none border rounded w-6/12 py-2 px-3 mr-4 text-grey-darker"
        selected={date}
        onChange={onDateChange}
        value={date}
        dateFormat="dd/MM/yy"
      />
      <button
        className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal hover:text-white hover:bg-teal-500"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default TodoInput;
