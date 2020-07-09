import React, { useState } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

function App() {
  const [todos, setTodos] = useState([
    { text: "Study hard", isComplete: false, date: "08/07/2020" },
    { text: "Aqcuire job", isComplete: false, date: "09/07/2020" },
    { text: "Win lottery", isComplete: false, date: "10/07/2020" },
  ]);

  const sort = (arrayToSort) => {
    var sortedArray = [];
    const array1 = [];
    const array2 = [];
    for (var i = 0; i < arrayToSort.length; i++) {
      if (arrayToSort[i].isComplete === true) {
        array1.push(arrayToSort[i]);
      } else {
        array2.push(arrayToSort[i]);
      }
    }
    const sorted1 = array1.sort((a, b) => (a.date > b.date ? 1 : -1));
    const sorted2 = array2.sort((a, b) => (a.date > b.date ? 1 : -1));
    sortedArray = sorted1.concat(sorted2);
    return sortedArray;
  };

  const addTodo = ({ text, isComplete, date }) => {
    const newTodos = [...todos, { text, isComplete, date }];
    setTodos(sort(newTodos));
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(sort(newTodos));
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
    <div className="h-screen w-screen flex items-center bg-teal-100 font-sans overflow-scroll">
      <div className="m-auto bg-white w-10/12 rounded shadow p-6 m-4">
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
