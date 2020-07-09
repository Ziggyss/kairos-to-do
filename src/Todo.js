import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useFlip, easeInOutQuint } from "react-easy-flip";

const Todo = ({ todo, index, completeTodo, deleteTodo, updateTodo }) => {
  const animationOptions = {
    duration: 300,
    easing: easeInOutQuint,
  };

  const rootId = "rootId";

  useFlip(rootId, animationOptions);
  return (
    <div data-flip-root-id={rootId}>
      <div
        data-flip-id="animated-image"
        style={{ borderBottom: "1px solid #a0aec0" }}
        className="flex flex-wrap md:flex-no-wrap items-center justify-between mb-4 py-4"
      >
        <input
          className="w-full md:w-8/12 py-3"
          style={{
            textDecoration: todo.isComplete ? "line-through" : "",
            color: todo.isComplete ? "#38B2AC" : "#2d3748",
          }}
          type="text"
          id={index}
          value={todo.text}
          onChange={(e) => updateTodo(e, index)}
        />
        <p className="w-1/2 md:w-40 text-gray-600">Due by: {todo.date}</p>
        <div className="w-1/2 md:w-40 flex justify-end">
          <button
            className={
              todo.isComplete
                ? "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500 outline: none"
                : "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-teal-500 border-teal-500 hover:bg-teal-500 outline: none"
            }
            onClick={() => completeTodo(index)}
          >
            {todo.isComplete ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faCheck} />
            )}
          </button>

          <button
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
            onClick={() => deleteTodo(index)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
