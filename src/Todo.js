import React from "react";

const Todo = ({ todo, index, completeTodo, deleteTodo, updateTodo }) => {
  return (
    <div>
      <div className="todo flex items-center justify-between mb-4">
        <input className="w-8/12 py-3 border-bottom"
          style={{
            textDecoration: todo.isComplete ? "line-through" : "",
            color: todo.isComplete ? "#38B2AC" : "#2d3748",
          }}
          type="text"
          id={index}
          value={todo.text}
          onChange={(e) => updateTodo(e, index)}
        />
        <p className="text-gray-600">Due by: {todo.date}</p>
        <div className="w-2/12">
          <button
            className={
              todo.isComplete
                ? "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500 outline: none"
                : "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500 outline: none"
            }
            onClick={() => completeTodo(index)}
          >
            {todo.isComplete ? "Not Done" : "Done"}
          </button>

          <button
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
            onClick={() => deleteTodo(index)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
