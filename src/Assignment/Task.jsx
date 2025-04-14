import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { IoMenu } from "react-icons/io5";

const Task = ({ id, name, age, phone }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className="d-flex justify-content-between ps-5 pe-5 align-items-center border
      "
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <h3>
        <IoMenu />
      </h3>
      <h3 className="p-2">{id}</h3>
      <h3 className="p-2">{name}</h3>
      <h3 className="p-2">{age}</h3>
      <h3 className="p-2">{phone}</h3>
    </div>
  );
};

export default Task;
