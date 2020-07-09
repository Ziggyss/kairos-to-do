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
    <form className="flex flex-wrap md:flex-no-wrap align-center justify-between py-3 items-center">
      <input
        type="text"
        className="input shadow appearance-none border rounded w-full md:w-8/12 py-2 px-3 mr-0 mb-5 md:mb-0 md:mr-4 text-grey-darker"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Todo"
      />
      <p className="w-auto md:w-16 align-center">Due by: </p>
      <DatePicker
        className="shadow appearance-none border rounded w-auto md:w-8/12 py-2 px-3 mr-0 md:mr-4 text-grey-darker"
        selected={date}
        onChange={onDateChange}
        value={date}
        dateFormat="dd/MM/yyyy"
      />
      <button
        className="flex-no-shrink w-full mt-5 md:mt-0 md:w-auto p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default TodoInput;
