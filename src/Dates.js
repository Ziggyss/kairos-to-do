import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Dates = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(date);
  };

  return (
    <div>
      <form >
        <DatePicker
          selected={date}
          onChange={onChange}
          value={date}
          dateFormat="dd/MM/yyyy"
        />
      </form>
      <button onClick={onFormSubmit}>Date</button>
    </div>
  );
};

export default Dates;
