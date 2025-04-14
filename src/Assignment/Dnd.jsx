import React, { useReducer } from "react";
import "./Dnd.css";

const initialState = {
  tasks: ["Task 1", "Task 2", "Task 3", "Task 4"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REORDER": {
      const { fromIndex, toIndex } = action.payload;
      const updatedTasks = [...state.tasks];
      const [movedTask] = updatedTasks.splice(fromIndex, 1);
      updatedTasks.splice(toIndex, 0, movedTask);
      return { ...state, tasks: updatedTasks };
    }
    default:
      return state;
  }
};

export default function Dnd() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("fromIndex", index);
  };

  const handleDrop = (e, toIndex) => {
    const fromIndex = parseInt(e.dataTransfer.getData("fromIndex"), 10);

    if (fromIndex === toIndex) return;

    dispatch({ type: "REORDER", payload: { fromIndex, toIndex } });
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div className="list-container">
      {state.tasks.map((task, index) => (
        <div
          key={task}
          className="task"
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={allowDrop}
          onDrop={(e) => handleDrop(e, index)}
        >
          {task}
        </div>
      ))}
    </div>
  );
}
