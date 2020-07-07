import React, { useState } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
// import Dates from "./Dates";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { text: "First todo", isComplete: false },
    { text: "Second todo", isComplete: false },
    { text: "Third todo", isComplete: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h2>Kairos Todo List</h2>
        </p>
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
