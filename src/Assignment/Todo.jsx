import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import React from "react";
import { useState } from "react";
import Column from "./Column";
import Input from "./Input";

const Todo = () => {
  const [info, setInfo] = useState([
    {
      id: 1,
      name: "Klaus",
      age: "21",
      phone: "1523647809",
    },
    {
      id: 2,
      name: "Elijah",
      age: "25",
      phone: "4521369870",
    },
    {
      id: 3,
      name: "Heitor",
      age: "13",
      phone: "1025896473",
    },
    {
      id: 4,
      name: "Harvey",
      age: "32",
      phone: "5691234701",
    },
    {
      id: 5,
      name: "Ethen",
      age: "19",
      phone: "5632147890",
    },
    {
      id: 6,
      name: "Prime",
      age: "28",
      phone: "9856321407",
    },
  ]);

  const addTask = (name, age, phone) => {
    setInfo([...info, { id: info.length + 1, name, age, phone }]);
  };
  const getTaskPos = (id) => info.findIndex((info) => info.id === id);
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setInfo((info) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      return arrayMove(info, originalPos, newPos);
    });
  };

  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Input onSubmit={addTask} />
        <Column info={info} />
      </DndContext>
    </div>
  );
};

export default Todo;
