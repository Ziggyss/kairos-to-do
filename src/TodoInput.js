import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState(new Date());

  const onDateChange = (date) => {
    setDate(date);
  };

  //   const onDateFormSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(date);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({ text: value, isComplete: false, date: date.toLocaleDateString('en-BR') });
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
      <button onClick={handleSubmit}>Submit</button>
      {/* <button onClick={onDateFormSubmit}>Date</button> */}
    </form>
  );
};

export default TodoInput;
