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

  return (
    <div className="App">
      <header className="App-header">
        <h2>Kairos Todo List</h2>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
          <TodoInput addTodo={addTodo} />
          {/* <Dates /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
