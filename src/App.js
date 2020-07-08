import React, { useState } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
// import moment from "moment";
// import Dates from "./Dates";

// import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { text: "First todo", isComplete: false, date: "08/07/20" },
    { text: "Second todo", isComplete: false, date: "09/07/20" },
    { text: "Third todo", isComplete: false, date: "09/07/20" },
  ]);

  const addTodo = ({ text, isComplete, date }) => {
    const newTodos = [...todos, { text, isComplete, date }];
    console.log(newTodos);
    const array1 = [];
    const array2 = [];
    for (var i = 0; i < newTodos.length; i++) {
      if (newTodos[i].isComplete === true) {
        array1.push(newTodos[i]);
        console.log("array1", array1);
      } else {
        array2.push(newTodos[i]);
      }
    }
    const sorted1 = array1.sort((a, b) => (a.date > b.date ? 1 : -1));
    const sorted2 = array2.sort((a, b) => (a.date > b.date ? 1 : -1));
    const sorted = sorted1.concat(sorted2);
    console.log("sorted", sorted);
    setTodos(sorted);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    const array1 = [];
    const array2 = [];
    for (var i = 0; i < newTodos.length; i++) {
      if (newTodos[i].isComplete === true) {
        array1.push(newTodos[i]);
        console.log("array1", array1);
      } else {
        array2.push(newTodos[i]);
      }
    }
    const sorted1 = array1.sort((a, b) => (a.date > b.date ? 1 : -1));
    const sorted2 = array2.sort((a, b) => (a.date > b.date ? 1 : -1));
    const sorted = sorted1.concat(sorted2);
    setTodos(sorted);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].text = e.target.value;
    setTodos(newTodos);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-teal-100 font-sans">
      <div className="bg-white w-10/12 rounded shadow p-6 m-4">
        <h1 className="mb-4 text-3xl text-grey-darkest">Kairos Todo List</h1>
        <div className="todo-list w-full text-gray-darkest">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
          <TodoInput addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
